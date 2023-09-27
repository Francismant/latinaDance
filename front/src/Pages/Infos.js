import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Infos.module.scss"
// import ButtonList from "../assets/components/ButtonList";
import { buttonLabelsInfos, tarifsCouple, tarifsSolo } from "../data/Data";
import CarteSalsa from "../assets/components/Cards/CarteSalsa";
import CarteBachata from "../assets/components/Cards/CarteBachata";
import CarteKizomba from "../assets/components/Cards/CarteKizomba";
import Salles from "../assets/components/Salles";
import Planning from "../assets/components/Plannings/Planning";
import Planning2 from "../assets/components/Plannings/Planning2";
import Planning3 from "../assets/components/Plannings/Planning3";
import Planning4 from "../assets/components/Plannings/Planning4";
import CarteTarifCouple from "../assets/components/Cards/CarteTarifCouple";
import CarteTarifSolo from "../assets/components/Cards/CarteTarifSolo";


function Infos() {
  return (
    <>
      <section>
        <div className={`df fc jcsb ${styles.backgroundTopInfos}`}>
          <h1 className="pt50 ml30">INFOS SUR L'ECOLE DE DANSE</h1>
          {/* <ButtonList buttonLabels={buttonLabelsInfos} /> */}
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
          <p className="mb50 tac pl50 pr50">Notre école  située dans le vieux Lille au 16 rue Paul Ramadier est composée de trois grandes salles climatisées avec parquet et Miroirs. La salle est facile d’accès et un parking est à votre disposition. </p>
          <div className="df fc gap3">
            <Salles />
          </div>
        </section>
        <section className="mb50">
          <h2 id="planning">Les Plannings</h2>
          <div className="df fc gap5">
            <div className="df jcsa">
              <Planning />
              <Planning2 />
            </div>
            <div className="df jcsa">
              <Planning3 />
              <Planning4 />
            </div>
          </div>
          <div className="fsize08 ml100">
            <p>niveau1 : débutant</p>
            <p>niveau2 : intermédiaire</p>
            <p>niveau3 : avancé</p>
          </div>
        </section>
        <section className="mb50">
          <h2 id="tarifs">Les tarifs**</h2>
          <div className="df fc gap4">
          <CarteTarifCouple tarifsCouple={tarifsCouple} />
          <CarteTarifSolo tarifsSolo={tarifsSolo} />
          </div>
        </section>
      </main>
    </>
  )
}

export default Infos