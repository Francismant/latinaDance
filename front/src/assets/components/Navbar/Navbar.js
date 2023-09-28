import styles from "./Navbar.module.scss"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ul className={`df fr aic jcsa gap5 ${styles.desktopNavbar}`}>
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
            <Link>Evenements</Link>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <Link>Contact</Link>
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