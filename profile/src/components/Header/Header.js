import styles from './Header.module.css'
import { AppRoutes } from "../../common/routes";
import { Link } from "react-router-dom";
const Header = () => {
    // const links = Object.keys(AppRoutes)
    return(
        <div className={styles.container}>
            {/*{Object.keys(AppRoutes).map((link) => <Link key={link} to={AppRoutes[link]}>{link}</Link>)}*/}
            {/*{links.map((link) => <Link key={link} to={AppRoutes[link]}>{link}</Link>)}*/}
            <Link to={AppRoutes.main}>Home</Link>
            <Link to={AppRoutes.bobby}>Bobby</Link>
            <Link to={AppRoutes.ihor}>Ihor</Link>
        </div>
    );
}
export default Header;
