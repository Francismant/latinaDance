// import fb from "../../assets/images/facebook.png";
// import insta from "../../assets/images/instagram.png";
import Navbar from "../../assets/components/Navbar/Navbar";
import styles from "./Header.module.scss";

import { Link } from "react-router-dom";
import { useState } from "react";
// import MobileConnexion from "../Navbar/MobileConnexion";

function Header({ user, logout }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <header>
      {/* <div className={`colorHeader ${styles.topHeader}`}>
        <div className="df jcc gap2 fweight6">
          <p>Tel : 06.03.21.21.21</p>
          <p>Email : lillelatinadance@org.com</p>
        </div>
        <div className={styles.icons}>
          <a href="">
            <img src={fb} alt="logo de facebook" />
          </a>
          <a href="">
            <img src={insta} alt="logo de instagram" />
          </a>
        </div>
      </div> */}
      <div className={`df ${styles.headerResponsive}`}>
        <div className={styles.sizeHeaderLeft}>
          {/* <img
            className={styles.logo}
            src={logoDance}
            alt="logo sur fond blanc avec deux grands L pour Lille et latina et en dessous dance "
          /> */}
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
                  <Link to="/">Logout</Link>
                </button>
                <button className={`btn btn-primary-reverse`}>
                  <Link to="/Profile">Profile</Link>
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
                    <button onClick={logout} className={`mr20 btn btn-primary`}>
                      <Link to="/">Logout</Link>
                    </button>
                    <button className={`btn btn-primary-reverse`}>
                      <Link to="/Profile">Profile</Link>
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
