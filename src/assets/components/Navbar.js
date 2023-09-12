import styles from "./Navbar.module.scss"

function Navbar() {
  return (
    <ul className={`df fr aic jcsa fsize2 gap5`}>
        <li><button className={styles.button2}><span><a href="">Cours</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Ecole</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Infos</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Evenements</a></span></button></li>
        <li><button className={styles.button2}><span><a href="">Contact</a></span></button></li>
    </ul>
  )
}

export default Navbar