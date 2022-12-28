import { userTypes } from "../../common/constants";
import { useEffect, useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../common/routes";
import { setFormData, signOutUser } from "../../helpers/js-helpers";
import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import db from "../../firebase/firebase"
const Main = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getMyCVdata()
    },[])

    const getMyCVdata = () => {
        console.log("Getting data")
        const collectionRef = collection(db,"cv");
        onSnapshot(collectionRef,(snapshot)=>{
         const data = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}))
            setUsers(data)
        })
    }
    const handleDeleteUser = async (userId) => {
        const docRef = doc(db,"cv",  userId)
        await deleteDoc(docRef)
    }
    const handleAddUSer = async() => {
        const collectionRef = collection(db,"cv");
        const docRef = await addDoc(collectionRef, {role: "mentor", firstName: 'Ihor'})
        docRef.id && console.log(docRef.id)
        console.log(docRef)
    }

    const EditUser = async (user) => {
        const docRef = doc(db,"cv",  user.id)
        await setDoc(docRef, {
            ...user,
            role: Math.random().toFixed(2)
        })
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
                <div key={user?.id}>
                    <p>{user?.firstName}</p>
                    <p>{user?.role}</p>
                    <button onClick={()=> handleDeleteUser(user?.id)}>Delete</button>
                    <button onClick={()=> EditUser(user)}>Edit</button>
                </div>
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
