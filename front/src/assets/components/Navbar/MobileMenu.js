import styles from "./MobileMenu.module.scss"
import { Link } from "react-router-dom";

export default function MobileMenu() {
    return (
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
        </ul>
    );
}