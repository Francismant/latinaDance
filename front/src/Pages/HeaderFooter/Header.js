import Navbar from "../../assets/components/Navbar/Navbar";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";


function Header({ user, logout }) {
  console.log("userHeader", user);
  const [showButton, setShowButton] = useState(false);

  return (
    <header>
      <div className={`df ${styles.headerResponsive}`}>
        <div className={styles.sizeHeaderLeft}>
          <div className={`df fc jcc aic ${styles.latina}`}>
            <Link to="/">
              <p className="fweight4">LILLE</p>
              <p className="fweight4">LATINA</p>
              <p className="ffamily2">Dance</p>
            </Link>
          </div>
        </div>
        <Navbar />
        <div className={styles.register}>
          <ul>
            {user ? (
              <>
                <button onClick={logout} className={`mr20 btn btn-primary`}>
                  <Link to="/">Déconnexion</Link>
                </button>
                <button className={`btn btn-primary-reverse mr20`}>
                  <Link to="/Profile">Profil</Link>
                </button>
                <button className={`btn btn-primary-reverse`}>
                  <Link to="/Delete">Suppression du compte</Link>
                </button>
              </>
            ) : (
              <>
                <button className={`mr20 btn btn-primary`}>
                  <Link to="/Register">Inscription</Link>
                </button>
                <button className={`btn btn-primary-reverse`}>
                  <i className="fas fa-right-to-bracket mr5"></i>
                  <Link to="/Login">Connexion</Link>
                </button>
              </>
            )}
          </ul>
        </div>
        <i
          onClick={() => setShowButton(true)}
          className={`fa-solid fa-circle-user ${styles.mobileNavbar}`}
        ></i>
        {showButton && (
          <>
            <div onClick={() => setShowButton(false)} className="calc"></div>
            <div>
              <ul className={`card p10 ${styles.menuContainer}`}>
                {user ? (
                  <>
                    <button onClick={logout} className={`btn btn-primary`}>
                      <Link to="/">Déconnexion</Link>
                    </button>
                    <button className={`btn btn-primary-reverse`}>
                      <Link to="/Profile">Profil</Link>
                    </button>
                    <button className={`btn btn-primary`}>
                      <Link to="/Delete">Suppression</Link>
                    </button>
                  </>
                ) : (
                  <>
                    <button className={`mr20 btn btn-primary`}>
                      <Link to="/Register">Inscription</Link>
                    </button>
                    <button className={`btn btn-primary-reverse`}>
                      <i className="fas fa-right-to-bracket mr5"></i>
                      <Link to="/Login">Connexion</Link>
                    </button>
                  </>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
