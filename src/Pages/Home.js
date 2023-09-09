import Footer from "../assets/components/Footer"
import Header from "../assets/components/Header"
import styles from "./Home.module.scss"


function Home() {
  return (
    <>
      <Header />
      <section>
        <div className={`df fc jcsb ${styles.backgroundTop}`}>
          <h1 className="pt50 ml30">COURS DE SALSA BACHATA KIZOMBA</h1>
          <div className="df jcsa pb50">
            <button className={styles.btn}>
              <div className="df gap1 aic">
                <p>Cours collectifs</p>
                <i class="fa-solid fa-circle-right"></i>
              </div>
            </button>
            <button className={styles.btn}>
              <div className="df gap1 aic">
                <p>Cours individuels</p>
                <i class="fa-solid fa-circle-right"></i>
              </div>
            </button>
            <button className={styles.btn}>
              <div className="df gap1 aic">
                <p>Horaires-tarifs</p>
                <i class="fa-solid fa-circle-right"></i>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="fspecialh2 tac pt50">Les soirées SBK</h2>
      </section>
      <Footer />
    </>
  )
}

export default Home