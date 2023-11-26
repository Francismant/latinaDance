import styles from "./MobileMenu.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export default function MobileMenu({ setShowMenu }) {
    const { user, logout } = useContext(AuthContext);

    const handleMenuItemClick = () => {
        setShowMenu(false);
    };

    const handleLogoutClick = () => {
        handleMenuItemClick(); 
        logout(); 
    };

    return (
        <>
            {user ? (
                <>
                    <ul className={`card p20 ${styles.menuContainer}`}>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <Link to="/">Cours</Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <Link to="/Infos">Infos</Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <Link to="/Events">Evenements</Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <Link to="/Contact">Contact</Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleLogoutClick}>
                                <Link to="/">Déconnexion</Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <Link to="/profile">Profil</Link>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <Link to="/delete">Suppression</Link>
                            </span>
                        </li>
                    </ul>
                </>
            ) : (

                <ul className={`card p20 ${styles.menuContainer}`}>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <Link to="/">Cours</Link>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <Link to="/Infos">Infos</Link>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <Link to="/Events">Evenements</Link>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <Link to="/Contact">Contact</Link>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <Link to="/register">Inscription</Link>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <Link to="/Login">Connexion</Link>
                        </span>
                    </li>
                </ul>
            )}
        </>
    );
}