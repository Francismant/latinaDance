import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Infos.module.scss"
import ButtonList from "../assets/components/ButtonList";
import { buttonLabelsInfos } from "../data/Data";
import CarteSalsa from "../assets/components/Cards/CarteSalsa";
import CarteBachata from "../assets/components/Cards/CarteBachata";
import CarteKizomba from "../assets/components/Cards/CarteKizomba";


function Infos() {
  return (
    <>
      <Header />
      <section>
        <div className={`df fc jcsb ${styles.backgroundTopInfos}`}>
          <h1 className="pt50 ml30">INFOS SUR L'ECOLE DE DANSE</h1>
          <ButtonList buttonLabels={buttonLabelsInfos} />
        </div>
      </section>
      <h2 className="pt50">Les professeurs</h2>
      <section className="df center gap1 fw">
        <CarteSalsa/>
        <CarteBachata/>
        <CarteKizomba/>
      </section>
      <Footer />
    </>
  )
}

export default Infos