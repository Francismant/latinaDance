import Navbar from "../../assets/components/Navbar/Navbar";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context";


function Header() {
  // const [showButton, setShowButton] = useState(false);
  const { user, logout } = useContext(AuthContext);
 

// const viewMenu = () => {
//   if (showMenu) {
//     setShowMenu(false)
//   }
//   setShowButton(!showButton)
// }

  return (
    <header>
      <div className={`df aic ${styles.headerResponsive}`}>
        <div className={styles.sizeHeaderLeft}>
          <div className={`df fc jcc aic ${styles.latina}`}>
            <NavLink end to="/">
              <p className="fweight4">LILLE</p>
              <p className="fweight4">LATINA</p>
              <p className="ffamily2">Dance</p>
            </NavLink>
          </div>
        </div>
        <Navbar />
        <div className={styles.register}>
          <ul>
            {user ? (
              <>
                <button onClick={logout} className={`mr20 btn btn-primary`}>
                  <NavLink to="/">Déconnexion</NavLink>
                </button>
                <button className={`btn btn-primary-reverse mr20`}>
                  <NavLink to="/Profile">Profil</NavLink>
                </button>
                <button className={`btn btn-primary-reverse`}>
                  <NavLink to="/Delete">Suppression du compte</NavLink>
                </button>
              </>
            ) : (
              <>
                <button className={`mr20 btn btn-primary`}>
                  <NavLink to="/createAccount">Inscription</NavLink>
                </button>
                <button className={`btn btn-primary-reverse`}>
                  <i className="fas fa-right-to-bracket mr5"></i>
                  <NavLink to="/Login">Connexion</NavLink>
                </button>
              </>
            )}
          </ul>
        </div>
        {/* <i
          onClick={viewMenu}
          className={`fa-solid fa-circle-user ${styles.mobileNavbar}`}
        ></i>
        {showButton && (
          <>
            <ul className={`card p10 ${styles.menuContainer}`}>
              {user ? (
                <>
                  <button onClick={logout} className={`btn btn-primary`}>
                    <NavLink to="/">Déconnexion</NavLink>
                  </button>
                  <button className={`btn btn-primary-reverse`}>
                    <NavLink to="/Profile">Profil</NavLink>
                  </button>
                  <button className={`btn btn-primary`}>
                    <NavLink to="/Delete">Suppression</NavLink>
                  </button>
                </>
              ) : (
                <>
                  <button className={`mr20 btn btn-primary`}>
                    <NavLink to="/Register">Inscription</NavLink>
                  </button>
                  <button className={`btn btn-primary-reverse`}>
                    <i className="fas fa-right-to-bracket mr5"></i>
                    <NavLink to="/Login">Connexion</NavLink>
                  </button>
                </>
              )}
            </ul>
          </>
        )} */}
      </div>
    </header>
  );
}

export default Header;
