import styles from "./Navbar.module.scss";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  // const menuRef = useRef(null);

  const viewMenu = () => {
    console.log("showMenu", showMenu);
    setShowMenu(!showMenu);
  };

  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setShowMenu(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);


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
      {/* <i onClick={viewMenu} className={`fas fa-bars mr10 ${styles.mobileNavbar}`}></i> */}
      <div onClick={viewMenu} className={`burger-menu ${showMenu ? 'active' : ''}`}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
      {
        showMenu && (
          <>
            <div>
              {/* <div ref={menuRef}> */}
              <MobileMenu setShowMenu={setShowMenu} />
            </div>
          </>
        )
      }
    </nav>
  );
}

export default Navbar;