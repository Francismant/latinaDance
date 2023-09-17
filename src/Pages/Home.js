import Carousel from "../assets/components/Carousels/Carousel";
import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Home.module.scss"
import { tableauImageCarousel, tableauImageCarouselParticulier, buttonLabelsHome } from "../data/Data";
// import salsa from "../assets/images/la salsa.png"
// import bachata from "../assets/images/la bachata.png"
// import kizomba from "../assets/images/la kizomba.png"
import CarouselParticulier from "../assets/components/CarouselParticulier";
import ButtonList from "../assets/components/ButtonList";
import { salsaData, bachataData, kizombaData } from "../data/Data"
import StylesDance from "../assets/components/StylesDance";

function Home() {
  return (
    <>
      <Header />
      <section>
        <div className={`df fc jcsb ${styles.backgroundTop}`}>
          <h1 className="pt50 ml30">COURS DE SALSA BACHATA KIZOMBA</h1>
          <ButtonList buttonLabels={buttonLabelsHome} />
          {/* <button className={styles.btn}>
              <div className="df gap1 aic">
                <p>Cours collectifs</p>
                <i className="fa-solid fa-circle-right"></i>
              </div>
            </button>
            <button className={styles.btn}>
              <div className="df gap1 aic">
                <p>Cours particuliers</p>
                <i className="fa-solid fa-circle-right"></i>
              </div>
            </button>
            <button className={styles.btn}>
              <div className="df gap1 aic">
                <p>Horaires-tarifs</p>
                <i className="fa-solid fa-circle-right"></i>
              </div>
            </button> */}
        </div>
      </section>
      <main className="center df fc gap5">
        <section>
          <h2 className="pt50">Les Soirées SBK</h2>
          <div className="df jcsa aic gap10 fw">
            <div className="size3">
              <Carousel data={tableauImageCarousel} />
            </div>
            <p className="fsize1_25 size3 space">Les soirées Salsa sont généralement accompagnées de Bachata et de Kizomba, créant ainsi ce que l'on appelle les soirées SBK. C'est pourquoi nous avons pris la décision naturelle de vous proposer ces trois danses. En 2020, les cours Kizomba et Bachata ont été introduits pour offrir aux élèves, même ceux qui sont débutants, la possibilité de maîtriser rapidement ces trois styles de danse, afin qu'ils puissent profiter pleinement des soirées SBK.</p>
          </div>
        </section>
        <section>
          <h2 id="cours-collectifs" className="mb0">Les cours collectifs</h2>
        </section>
        <StylesDance {...salsaData} />
        <StylesDance {...bachataData} reverse />
        <StylesDance {...kizombaData} />
        {/* <section>
        <h3 className="fsize3 fweight4 tac mb50">La Salsa</h3>
        <div className="df jcsa aic gap10 fw">
          <p className="fsize2 space size3">La Salsa, l'une des danses de couple les plus populaires, a vu le jour à New York, influencée par la culture latino. . La Salsa se divise en deux courants distincts : la Salsa Cubaine, caractérisée par des mouvements essentiellement circulaires, et la Salsa Portoricaine, qui privilégie davantage les déplacements en ligne.
            Nous offrons les deux variantes de la Salsa en alternance, permettant aux danseurs de découvrir ces deux styles uniques. La Salsa se distingue par un rythme syncopé captivant, et elle invite à une constante fluidité de mouvement.</p>
            <img src={salsa} alt="des couples qui prennent un cours de danse" />
        </div>
      </section>
      <section>
        <h3 className="fsize3 fweight4 tac mb50 mt50">La Bachata</h3>
        <div className="df jcsa aic gap10 fw">
          <div className="size3">
            <img src={bachata} alt="des couples qui prennent un cours de danse" />
          </div>
          <p className="fsize2 size3 space">La Bachata, originaire de la République Dominicaine, est devenue une danse internationalement reconnue grâce à l'essor du tourisme. Son pas de base simple en fait une danse très accessible, combinant des postures tant rapprochées qu'éloignées, sur un rythme facile à suivre.
            Les danseuses l'apprécient particulièrement pour la liberté qu'elle offre pour exprimer leur féminité. De nombreuses figures permettent une créativité infinie sur la piste de danse. </p>
        </div>
      </section>
      <section>
        <h3 className="fsize3 fweight4 tac mb50 mt50">La Kizomba</h3>
        <div className="df jcsa aic gap10 fw">
          <p className="fsize2 size3 space">La Kizomba, originaire de l'Angola, a conquis le monde depuis les années 2000. Elle résulte d'un mélange entre le Semba angolais, le zouk, et le compas haïtien. C'est une danse à la fois chaleureuse, sensuelle et accessible. Son rythme calme en fait une danse appréciée des débutants.
            Son apprentissage est rapide, et elle séduit rapidement même les danseurs novices. La Kizomba emprunte des éléments au zouk et au tango argentin, ce qui lui confère une élégance particulière sur la piste de danse. </p>
          <div className="size3 pl50 mb50">
            <img src={kizomba} alt="des couples qui prennent un cours de danse" />
          </div>
        </div>
      </section> */}
        <section>
          <h2 id="cours-particuliers">Les cours particuliers</h2>
          <div className="fsize1_25 center tac space mb50">
            <p>Votre emploi du temps ne vous permet pas la régularité d’un cours collectif hebdomadaire ?</p>
            <p>Vous préférez apprendre les bases avant de vous lancer en cours collectif ?</p>
            <p>Vous savez déjà danser mais votre conjoint est débutant ?</p>
          </div>
          <div className="fsize1_25 center tac space mb50">
            <p>Quel que soit votre niveau nos professeurs, vous donneront, avec leur pédagogie des cours adaptés à votre niveau et qui vous permettront de progresser très rapidement.</p>
            <p>Les cours individuels peuvent se faire au domicile dans une une limite 20km autour de Lille.</p>
          </div>
          <p className="fsize1_25 center tac space mb50">Voici ce que nous vous proposons au travers de nos cours :</p>
          <div className="fsize1_25 center tac space mb50">
            <p>Travail des pas de base</p>
            <p>Enchainements</p>
            <p>Guidage</p>
            <p>Coordination</p>
            <p>Musicalité</p>
            <p>Ouverture de bal (mariage)</p>
          </div>
          <div>
            <CarouselParticulier dataCarousel={tableauImageCarouselParticulier} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home