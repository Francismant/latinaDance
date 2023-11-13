import styles from "./Navbar.module.scss"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

function Navbar({showButton, setShowButton, setShowMenu, showMenu}) {

  const viewMenu = () => {
    if (showButton) {
      setShowButton(false)
    }
    setShowMenu(!showMenu)
  }
  return (
    <nav className="df jcsb">
      <ul className={`df fr aic jcsa ${styles.desktopNavbar}`}>
        <li className={styles.button2}>
          <span>
            <Link to="/">Cours</Link>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <Link to="/Infos">Infos</Link>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <Link to="/Events">Evenements</Link>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <Link to="/Contact">Contact</Link>
          </span>
        </li>
      </ul>
      <i onClick={viewMenu} className={`fas fa-bars mr10 ${styles.mobileNavbar}`}></i>
      {
        showMenu && (
          <>
            <div>
              <MobileMenu />
            </div>
          </>
        )
      }
    </nav>
  )
}

export default Navbar