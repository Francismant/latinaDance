import styles from "./MobileMenu.module.scss"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export default function MobileMenu() {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
        {user ? ( 
            <>
            <ul className={`card p20 ${styles.menuContainer}`}>
            <li>
                <span>
                    <Link to="/">Cours</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/Infos">Infos</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/Events">Evenements</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/Contact">Contact</Link>
                </span>
            </li>
            <li>
                <span onClick={logout}>
                    <Link to="/">Déconnexion</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/profile">Profil</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/delete">Suppression</Link>
                </span>
            </li>
        </ul>
            </>
        ) : (

        <ul className={`card p20 ${styles.menuContainer}`}>
            <li>
                <span>
                    <Link to="/">Cours</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/Infos">Infos</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/Events">Evenements</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/Contact">Contact</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/register">Inscription</Link>
                </span>
            </li>
            <li>
                <span>
                    <Link to="/Login">Connexion</Link>
                </span>
            </li>
        </ul>
        )}
        </>
    );
}