import { userTypes } from "../../common/constants";
import { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, storage } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../common/routes";
import { setFormData, signOutUser } from "../../helpers/js-helpers";
import { collection, addDoc, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, getBlob, deleteObject } from "firebase/storage";
import db from "../../firebase/firebase"

const Main = () => {
    const [ users, setUsers ] = useState([])
    const [ editId, setEditID ] = useState('')
    const [ editFormValues, setEditFormValues ] = useState({})
    useEffect(() => {
        getMyCVdata()
    }, [])

    useEffect(() => {
        editId !== '' && setEditFormValues(users.filter(user => user.id === editId)[0])
    }, [ editId ])

    const getMyCVdata = () => {
        console.log("Getting data")
        const collectionRef = collection(db, "cv");
        onSnapshot(collectionRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setUsers(data)
        })
    }
    const handleDeleteUser = async (userId) => {
        const docRef = doc(db, "cv", userId)
        await deleteDoc(docRef)
    }
    const handleAddUSer = async () => {
        const collectionRef = collection(db, "cv");
        const docRef = await addDoc(collectionRef, {role: "mentor", firstName: 'Ihor'})
        docRef.id && console.log(docRef.id)
        console.log(docRef)
    }

    const editUser = async (id, newUser = editFormValues) => {
        const docRef = doc(db, "cv", id)
        console.log("editFormValues",newUser)
        await setDoc(docRef, newUser)
    }
    const handleEditUser = async (id, newUser)=> {
        await editUser(id, newUser)
        setEditID('')
        setEditFormValues({})
    }

    const handleUpload = (e) => {
        const storageRef = ref(storage, `/photos/${e.target.files[0].name}`)
        const uploadData = uploadBytesResumable(storageRef, e.target.files[0])

        uploadData.on("state_changed",
            (snapshot) => {
                console.log(snapshot)
                const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(progress, "%");
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadData.snapshot.ref)
                    .then(url => setEditFormValues(prevState => {
                        return {
                            ...prevState,
                            imageUrl: url,
                            imageName: e.target.files[0].name
                        }
                    }))
            }
        )
    }
    const handleDeleteImage = (user) => {
        const imageRef = ref(storage, `photos/${user?.imageName}`);
        deleteObject(imageRef).then(() => {
            handleEditUser(user.id, {...editFormValues,
                imageUrl: null,
                imageName: null
            })
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    }


    // const navigate = useNavigate()
    // const setAdmin = () => {
    //     const user = {
    //         name: 'admin',
    //         role: userTypes.admin
    //     }
    //     localStorage.setItem('user', JSON.stringify(user))
    // }
    //
    // useEffect(() => {
    //     console.log('auth?.currentUser', auth?.currentUser)
    // }, [auth])
    // const formEl = useRef();
    // const setUser = () => {
    //     const user = {
    //         name: 'user',
    //         role: userTypes.user
    //     }
    //     localStorage.setItem('user', JSON.stringify(user))
    // }
    // const setLogout = () => {
    //     localStorage.removeItem('user')
    // }
    // const [ formValues, setFormValues ] = useState({
    //     email: '',
    //     password: '',
    // })
    //

    // //todo Sign iN user
    // const signIn = async () => {
    //     const user = await signInWithEmailAndPassword(auth, formValues.email, formValues.password)
    //         .then((res) => res.user)
    //         .catch((error) => console.log(error));
    //     auth?.currentUser?.uid && navigate(AppRoutes.HOC)
    // }


    // //todo Register user
    // const registerUser = async () => {
    //     const user = await createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
    //         .then((res) => res.user)
    //         .catch((error) => console.log(error));
    //     console.log(auth.currentUser)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     signIn()
    //     // registerUser();
    // }

    //todo Sign Out user
    // const signOutUser = async () => {
    //     try {
    //         await signOut(auth)
    //         console.log(auth.currentUser)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // const handleSubmitF2 = (e) => {
    //     e.preventDefault()
    //     console.log(formEl.current.elements)
    //     const formInputs = [ ...formEl.current.elements ].filter(
    //         element => element.type !== "submit"
    //     );
    //     const newSubmitted = formInputs.reduce(
    //         (acc, input) => {
    //             return {
    //                 ...acc,
    //                 [input.name]: input.value
    //             };
    //         }
    //     );
    //     console.log(newSubmitted, {
    //         email: newSubmitted.value,
    //         password: newSubmitted.password
    //     })
    // }

    return (
        <div>
            <h1>Main</h1>
            <button onClick={handleAddUSer}>Add USer</button>

            {users && users.map((user) => (
                editId !== user?.id
                    ? (<div key={user?.id}>
                        <p>{user?.firstName}</p>
                        <p>{user?.role}</p>
                        {user?.imageUrl && <img src={user.imageUrl} alt="" style={{width: "100px"}}/>}
                        <button onClick={() => handleDeleteUser(user?.id)}>Delete</button>
                        <button onClick={() => setEditID(user?.id)}>Edit</button>
                        <button onClick={async ()=>{
                            const image = await getBlob(ref(storage, `photos/${user?.imageName}`), user?.imageUrl);
                            const csvURL = window.URL.createObjectURL(image);
                            const tempLink = document.createElement('a');
                            tempLink.href = csvURL;
                            tempLink.setAttribute('download', 'filename.csv');
                            tempLink.click();
                        }}>download</button>
                    </div>)
                    : (<div key={user?.id}>
                        {editFormValues?.imageUrl && <img src={editFormValues.imageUrl} alt="" style={{width: "100px"}}/>}
                        <input type="file" onChange={handleUpload}/>
                        <input
                            value={editFormValues?.firstName}
                            onChange={(e)=>setFormData(e.target.value,"firstName", setEditFormValues)}
                        ></input>
                        <input value={editFormValues?.role}
                               onChange={(e)=>setFormData(e.target.value,"role", setEditFormValues)}

                        ></input>
                        <button onClick={() => handleEditUser(user.id)}>Edit</button>
                        <button onClick={()=>handleDeleteImage(user)}>Delete Image</button>
                    </div>)
            ))}


            {/*<button onClick={setAdmin}>*/}
            {/*    set as Admin*/}
            {/*</button>*/}
            {/*<button onClick={setUser}>*/}
            {/*    set as User*/}
            {/*</button>*/}
            {/*<button onClick={setLogout}>*/}
            {/*    set as UnAuth*/}
            {/*</button>*/}
            {/*<p>Sign up</p>*/}
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <input type="email"*/}
            {/*           name='email'*/}
            {/*           value={formValues.email}*/}
            {/*           onChange={(e) => setFormData(e.target.value, 'email', setFormValues)}/>*/}
            {/*    <input*/}
            {/*        type="password"*/}
            {/*        value={formValues.password}*/}
            {/*        onChange={(e) => setFormData(e.target.value, 'password', setFormValues)}*/}
            {/*    />*/}
            {/*    <button type='submit'>Register</button>*/}
            {/*</form>*/}
            {/*<button type='button' onClick={()=>signOutUser(navigate)}>Sign Out</button>*/}
            {/*<form onSubmit={handleSubmitF2} ref={formEl}>*/}
            {/*    <input type="email" name='email'/>*/}
            {/*    <input type="password" name='password'/>*/}
            {/*    <button type='submit'>Register</button>*/}
            {/*</form>*/}
        </div>
    )
};
export default Main
