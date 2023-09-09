import styles from "./Header.module.scss"

function Navbar() {
  return (
    <ul className={`df fr aic jcsa fsize2 mr30 ${styles.size2}`}>
        <li><button className={styles.button2}><span><a href="">Cours</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Ecole</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Horaires-Tarifs</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Evenements</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Espace Adherent</a></span></button></li>
    </ul>
  )
}

export default Navbar