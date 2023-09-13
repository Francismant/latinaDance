import fb from "../images/facebook.png"
import insta from "../images/instagram.png"
import logo from "../images/LilleLatinaDance.png"
import Navbar from "./Navbar"
import styles from "./Header.module.scss"

function Header() {
    return (
        <header >
            <div className="colorHeader df jcsb">
                <div className="df jcc aic fweight6">
                    <p className="ml20">Tel : 06.03.21.21.21</p>
                    <p className="ml20">Email : lillelatinadance@org.com</p>
                </div>
                <div className="df jcc aic gap1">
                    <a href=""><img className="mr10 mt5 pb5" src={fb} alt="logo de facebook" /></a>
                    <a href=""><img className="mr70 mt5 pb5" src={insta} alt="logo de instagram" /></a>
                </div>
            </div>
            <div className="df fr">
                <div className={styles.sizeHeaderLeft}>
                    <img src={logo} alt="logo sur fond blanc avec deux grands L pour Lille et latina et en dessous dance " />
                    <div className="df fc jcc aic">
                        <p className={`fweight4 ${styles.styleLogo}`}>LILLE</p>
                        <p className={`fweight4 ${styles.styleLogo}`}>LATINA</p>
                        <p className={`ffamily2 ${styles.styleLogo}`}>Dance</p>
                    </div>
                </div>
                <Navbar/>
                    <a className="df aic ml100 fsize3" href=""><i class="fa-regular fa-circle-user"></i></a>
            </div>

        </header>
    )
}

export default Header