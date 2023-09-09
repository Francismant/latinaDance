import fb from "../images/facebook.png"
import insta from "../images/instagram.png"
import logo from "../images/LilleLatinaDance 1.png"
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
                    <a href=""><img className="mr10 mt5" src={fb} alt="logo de facebook" /></a>
                    <a href=""><img className="mr70 mt5" src={insta} alt="logo de instagram" /></a>
                </div>
            </div>
            <div className="df fr">
                <div className={styles.size1}>
                    <img src={logo} alt="logo sur fond blanc avec deux grands L pour Lille et latina et en dessous dance " />
                    <div className="df fc jcc aic">
                        <h2 className="fweight4">LILLE</h2>
                        <h2 className="fweight4">LATINA</h2>
                        <h2 className="ffamily2">Dance</h2>
                    </div>
                </div>
                <Navbar/>
            </div>

        </header>
    )
}

export default Header