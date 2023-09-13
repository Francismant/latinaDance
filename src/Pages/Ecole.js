import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Ecole.module.scss"
import ButtonList from "../assets/components/ButtonList";
import { buttonLabelsInfos } from "../data/Data";

function Ecole() {
  return (
    <>
    <Header/>
    <section>
        <div className={`df fc jcsb ${styles.backgroundTopInfos}`}>
          <h1 className="pt50 ml30">INFOS SUR L'ECOLE DE DANSE</h1>
          <ButtonList buttonLabels={buttonLabelsInfos} />
        </div>
      </section>
      <h2 className="pt50">Les professeurs</h2>
    <Footer/>
    </>
  )
}

export default Ecole