import { userTypes } from "../../common/constants";

const Main = () => {
const setAdmin = () => {
    const user = {
        name: 'admin',
        role: userTypes.admin
    }
    localStorage.setItem('user', JSON.stringify(user))
}

    const setUser = () => {
        const user = {
            name: 'user',
            role: userTypes.user
        }
        localStorage.setItem('user', JSON.stringify(user))
    }
    const setLogout = () => {
        localStorage.removeItem('user')
    }


    return (
        <div>
            <h1>Main</h1>
            <button onClick={setAdmin}>
                set as Admin
            </button>
            <button onClick={setUser}>
                set as User
            </button>
            <button onClick={setLogout}>
                set as UnAuth
            </button>
        </div>
    )
};
export default Main
