import { memo, useEffect, useRef, useState } from "react";
//
// const Form = () => {
//
//     const [ formValues, setFormValues ] = useState({name: '', role: '', gender: ''})
//     const [ formErrors, setFormErrors ] = useState({name: '', role: '', gender: ''})
//     const [ needValid, setNeedValid ] = useState(false);
//
//     const [ isSubmited, setIsSubmited ] = useState(false)
//     console.log("Render isSubmited", isSubmited)
//
//     useEffect(() => {
//         isSubmited && validateFields()
//     }, [ needValid ])
//
//     const onFieldChange = (event, key) => {
//         setFormValues((prevState) => {
//             return {
//                 ...prevState,
//                 [key]: event.target.value
//             }
//         })
//         isSubmited && setNeedValid(!needValid);
//     }
//     const validateFields = () => {
//         Object.keys(formValues).map((key) => {
//             setFormErrors((prevState) => {
//                 return {
//                     ...prevState,
//                     [key]: formValues[key] === "" ? 'field required' : ''
//                 }
//             })
//         })
//     }
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         setIsSubmited(true)
//         validateFields();
//     }
//
//
//     return (
//         <div>
//             <h1>Form</h1>
//             <form onSubmit={handleFormSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" name="name" value={formValues.name}
//                            onChange={(event) => onFieldChange(event, "name")}/>
//                 </label>
//                 {formErrors.name && <span style={{color: "red"}}>{formErrors.name}</span>}
//                 <br/>
//                 <br/>
//                 <label>
//                     Role:
//                     <input type="text" name="role" value={formValues.role}
//                            onChange={(event) => onFieldChange(event, "role")}/>
//                 </label>
//                 {formErrors.role && <span style={{color: "red"}}>{formErrors.role}</span>}
//                 <br/>
//                 <br/>
//                 <label>
//                     Gender:
//                     <select name="gender" id="" value={formValues.gender}
//                             onChange={(event) => onFieldChange(event, "gender")}>
//                         <option value="">Select gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </label>
//                 {formErrors.gender && <span style={{color: "red"}}>{formErrors.gender}</span>}
//                 <input type="submit" value="Submit"/>
//             </form>
//         </div>
//
//     )
// };


const Form = () => {
    const name = useRef(null);
    const role = useRef(null);
    const gender = useRef(null);
    const [ formErrors, setFormErrors ] = useState({name: '', role: '', gender: ''})
    const [ needValid, setNeedValid ] = useState(false);
    const [ isSubmited, setIsSubmited ] = useState(false)

    // useEffect(() => {
    //     const data = {
    //         name: name.current.value,
    //         role: role.current.value,
    //         gender: gender.current.value,
    //     }
    //     isSubmited && validateFields(data)
    // }, [ needValid ])

    console.log("Render")

    const validateFields = (data) => {
        Object.keys(data).map((key) => {
            setFormErrors((prevState) => {
                return {
                    ...prevState,
                    [key]: data[key] === "" ? 'field required' : ''
                }
            })
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: name.current.value,
            role: role.current.value,
            gender: gender.current.value,
        }
        validateFields(data);
        setIsSubmited(true)
        name.current.value =""
    }
    const dynamicValid =()=>{
        const data = {
            name: name.current.value,
            role: role.current.value,
            gender: gender.current.value,
        }
        isSubmited && validateFields(data)
    }


    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" ref={name} onChange={dynamicValid}/>
                </label>
                {formErrors.name && <span style={{color: "red"}}>{formErrors.name}</span>}
                <br/>
                <br/>
                <label>
                    Role:
                    <input type="text" name="role" ref={role} onChange={dynamicValid} />
                </label>
                {formErrors.role && <span style={{color: "red"}}>{formErrors.role}</span>}
                <br/>
                <br/>
                <label>
                    Gender:
                    <select name="gender" ref={gender} onChange={dynamicValid} >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                {formErrors.gender && <span style={{color: "red"}}>{formErrors.gender}</span>}
                <input type="submit" value="Submit"/>
            </form>
        </div>

    )
};


export default Form;
