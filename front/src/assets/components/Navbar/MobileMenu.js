import styles from "./MobileMenu.module.scss"

export default function MobileMenu() {
    return (
        <ul className={`card p20 ${styles.menuContainer}`}>
            <li>Cours</li>
            <li>Infos</li>
            <li>Evenements</li>
            <li>Contact</li>
        </ul>
    );
}