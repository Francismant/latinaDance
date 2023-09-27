import styles from "./Navbar.module.scss"
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ul className={`df fr aic jcsa gap5 ${styles.desktopNavbar}`}>
        <li className={styles.button2}>
          <span>
            <a href="">Cours</a>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <a href="">Infos</a>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <a href="">Evenements</a>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <a href="">Contact</a>
          </span>
        </li>
      </ul>
      <i onClick={() => setShowMenu(true)} className={`fas fa-bars ${styles.mobileNavbar}`}></i>
      {
        showMenu && (
          <>
            <div onClick={() => setShowMenu(false)} className="calc"></div>
            <div>
              <MobileMenu />
            </div>
          </>
        )
      }
    </>
  )
}

export default Navbar