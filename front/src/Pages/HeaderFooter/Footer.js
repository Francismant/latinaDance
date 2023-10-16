import styles from "./Footer.module.scss";
import fb from "../../assets/images/facebook.png";
import insta from "../../assets/images/instagram.png";

function Footer() {
  return (
    <footer className="colorFooter">
      <div className={`df fc jcc aic fsize2 ${styles.footer}`}>
        <p>LILLE</p>
        <p>LATINA</p>
        <p className="ffamily2">Dance</p>
      </div>
      <div className={`df jcc fsize08 ${styles.footerend}`}>
        <p>Copyright©2023 |Tous droits réservés -</p>
        <a href="">Mentions légale</a>
        <div className={styles.icons}>
          <a href="">
            <img className="ml20" src={fb} alt="logo de facebook" />
          </a>
          <a href="">
            <img src={insta} alt="logo de instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
