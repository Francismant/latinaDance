import styles from "./Navbar.module.scss"

function Navbar() {
  return (
    <ul className={`df fr aic jcsa gap5`}>
      <li className={styles.button2}>
        <span>
          <a href="">Cours</a>
        </span>
        <ul className={styles.coursList}>
          <li>
            <a href="">Cours Collectifs</a>
          </li>
          <li >
            <a href="">Cours particuliers</a>
          </li>
        </ul>
      </li>
      <li className={styles.button2}>
        <span>
          <a href="">Infos</a>
        </span>
        <ul className={styles.coursList}>
          <li>
            <a href="">Lieu</a>
          </li>
          <li>
            <a href="">Planning</a>
          </li>
          <li>
            <a href="">Tarifs</a>
          </li>
        </ul>
      </li>
      <li><button className={styles.button2}><span><a href="">Evenements</a></span></button></li>
      <li><button className={styles.button2}><span><a href="">Contact</a></span></button></li>
    </ul>
  )
}

export default Navbar