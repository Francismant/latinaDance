import fb from "../images/facebook.png"
import insta from "../images/instagram.png"
import logo from "../images/LilleLatinaDance.png"
import Navbar from "./Navbar"
import styles from "./Header.module.scss"

function Header({
    seeRegisterForm,
    seeLoginForm,
    seeHome }) {
    return (
        <header >
            <div className={`colorHeader df jcsb ${styles.topHeader}`}>
                <div className="df jcc aic fweight6">
                    <p className="ml20">Tel : 06.03.21.21.21</p>
                    <p className="ml20">Email : lillelatinadance@org.com</p>
                </div>
                <div className={`df jcc aic gap1 ${styles.divIcon}`}>
                    <a href=""><img className="mr10 mt5 pb5" src={fb} alt="logo de facebook" /></a>
                    <a href=""><img className={`mr70 mt5 pb5 ${styles.iconHeader}`} src={insta} alt="logo de instagram" /></a>
                </div>
            </div>
            <div className={`df ${styles.headerResponsive}`}>
                <div className={styles.sizeHeaderLeft}>
                    <img className={styles.logo} src={logo} alt="logo sur fond blanc avec deux grands L pour Lille et latina et en dessous dance " />
                    <div onClick={seeHome} className={`df fc jcc aic ${styles.latina}`}>
                        <p className="fweight4">LILLE</p>
                        <p className="fweight4">LATINA</p>
                        <p className="ffamily2">Dance</p>
                    </div>
                </div>
                <Navbar />
                <div className={styles.register}>
                    <button
                        className={`mr10 btn btn-primary`}
                        onClick={seeRegisterForm}
                    >
                        <span>Register</span>
                    </button>
                    <button
                        className={`mr10 btn btn-primary-reverse`}
                        onClick={seeLoginForm}
                    >
                        <i className="fas fa-right-to-bracket mr5"></i>
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header