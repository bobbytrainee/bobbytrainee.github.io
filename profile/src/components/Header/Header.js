import styles from './Header.module.css'
import { AppRoutes } from "../../common/routes";
import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../../helpers/js-helpers";
const Header = () => {
    const navigate = useNavigate()
    // const links = Object.keys(AppRoutes)
    return(
        <div className={styles.container}>
            {/*{Object.keys(AppRoutes).map((link) => <Link key={link} to={AppRoutes[link]}>{link}</Link>)}*/}
            {/*{links.map((link) => <Link key={link} to={AppRoutes[link]}>{link}</Link>)}*/}
            <Link to={AppRoutes.main}>Home</Link>
            <Link to={AppRoutes.bobby}>Bobby</Link>
            <Link to={AppRoutes.ihor}>Ihor</Link>
            <button type='button' onClick={()=>signOutUser(navigate)}>Sign Out</button>
        </div>
    );
}
export default Header;
