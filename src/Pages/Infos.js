import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Infos.module.scss"
import ButtonList from "../assets/components/ButtonList";
import { buttonLabelsInfos } from "../data/Data";
import CarteSalsa from "../assets/components/Cards/CarteSalsa";
import CarteBachata from "../assets/components/Cards/CarteBachata";
import CarteKizomba from "../assets/components/Cards/CarteKizomba";
import Salles from "../assets/components/Salles";


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
      <main className="center df fc gap2">
      <h2 className="pt50 mb0">Les professeurs</h2>
      <section className="df gap1 fw">
        <CarteSalsa />
        <CarteBachata />
        <CarteKizomba />
      </section>
      <section className="mb50">
        <h2 id="salles-lieu" className="mb0">Les Salles de Cours</h2>
        <h2>Le lieu</h2>
        <p className="mb50 tac">Notre école  située dans le vieux Lille au 16 rue Paul Ramadier est composée de trois grandes salles climatisées avec parquet et Miroirs. La salle est facile d’accès et un parking est à votre disposition. </p>
        <div className="df fc jcc gap3">
          <Salles/>
        </div>
      </section>
      <section>
        <h2 id="planning">Les Plannings</h2>
      </section>
      </main>
      <Footer />
    </>
  )
}

export default Infos