import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Infos.module.scss"
import ButtonList from "../assets/components/ButtonList";
import { buttonLabelsInfos } from "../data/Data";
import CarteSalsa from "../assets/components/Cards/CarteSalsa";
import CarteBachata from "../assets/components/Cards/CarteBachata";
import CarteKizomba from "../assets/components/Cards/CarteKizomba";
import salle1 from "../assets/images/Salle1.png"
import salle2 from "../assets/images/Salle2.png"
import salle3 from "../assets/images/Salle3.png"
import plan from "../assets/images/plan.png"


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
        <CarteSalsa />
        <CarteBachata />
        <CarteKizomba />
      </section>
      <section className="center mb50">
        <h2 id="salles-lieu" className="pt50 mb0">Les Salles de Cours</h2>
        <h2>Le lieu</h2>
        <p className="mb50 tac">Notre école  située dans le vieux Lille au 16 rue Paul Ramadier est composée de trois grandes salles climatisées avec parquet et Miroirs. La salle est facile d’accès et un parking est à votre disposition. </p>
        <div className="df fc jcc gap2">
          <div className="df jcc gap5 fw">
            <div className={styles.containerSalle}>
              <div className={styles.boxSalle}>
                <img src={salle1} alt="salle de danse avec parquet et mirroir" />
              </div>
            </div>
            <div className={styles.containerSalle}>
              <div className={styles.boxSalle}>
                <img className={styles.imageSalle} src={salle2} alt="salle de danse avec parquet et mirroir" />
              </div>
            </div>
          </div>
          <div className="df jcc gap5 fw">
            <div className={styles.containerSalle}>
              <div className={styles.boxSalle}>
                <img className={styles.imageSalle} src={salle3} alt="salle de danse avec parquet et mirroir" />
              </div>
            </div>
            <img src={plan} alt="plan du lieu sur Googlemap" />
          </div>
        </div>
      </section>
      <section>
        <h2 id="planning">Les Plannings</h2>
      </section>
      <Footer />
    </>
  )
}

export default Infos