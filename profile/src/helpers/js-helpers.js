import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AppRoutes } from "../common/routes";

export const signOutUser = async (callback) => {
    try {
        await signOut(auth)
        console.log(auth.currentUser)
        callback(AppRoutes.main)
    } catch (e) {
        console.log(e);
    }
}

export const setFormData = (value, key, callback) => {
    callback((prevState) => {
        return {
            ...prevState,
            [key]: value,
        }
    })
}
