import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className="colorFooter">
    <div className={`df fc jcc aic fsize2 ${styles.footer}`}>
        <p>LILLE</p>
        <p>LATINA</p>
        <p className="ffamily2">Dance</p>
    </div>
    <div className="df jcc fsize08">
        <p>Copyright©2023 |Tous droits réservés  -</p>
        <a href="">Mentions légale</a>
    </div>
    </footer>
  )
}

export default Footer