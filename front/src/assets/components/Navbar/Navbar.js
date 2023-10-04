import styles from "./Navbar.module.scss"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
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
            <Link to="/Event">Evenements</Link>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <Link to="/Contact">Contact</Link>
          </span>
        </li>
      </ul>
      <i onClick={() => setShowMenu(true)} className={`fas fa-bars mr10 ${styles.mobileNavbar}`}></i>
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