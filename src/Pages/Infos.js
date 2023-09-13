import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Infos.module.scss"
import ButtonList from "../assets/components/ButtonList";
import { buttonLabelsInfos } from "../data/Data";
import Cards from "../assets/components/Cards";
import { profSalsa, profBachata, profKizomba } from "../data/Data"

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
      <div className="df center">
        <Cards {...profSalsa}/>
        <Cards {...profBachata}/>
        <Cards {...profKizomba}/>
      </div>
      <Footer />
    </>
  )
}

export default Infos