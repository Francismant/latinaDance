import styles from "./Header.module.scss"

function Navbar() {
  return (
    <ul className={`df fr aic jcsb fsize2 ${styles.size2}`}>
        <li><a href="">Cours</a></li>
        <li><a href="">Ecole</a></li>
        <li><a href="">Horaires-Taris</a></li>
        <li><a href="">Evenements</a></li>
        <li><a href="">Espace Adherent</a></li>
    </ul>
  )
}

export default Navbar