import salle1 from "../images/Salle1.png"
import salle2 from "../images/Salle2.png"
import salle3 from "../images/Salle3.png"
import plan from "../images/plan.png"
import styles from "./Salles.module.scss"

function Salles() {
  return (
    <>
    <div className="df jcc gap3 fw">
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
          <div className="df jcc gap3 fw">
            <div className={styles.containerSalle}>
              <div className={styles.boxSalle}>
                <img className={styles.imageSalle} src={salle3} alt="salle de danse avec parquet et mirroir" />
              </div>
            </div>
            <img src={plan} alt="plan du lieu sur Googlemap" />
          </div>
    </>
  )
}

export default Salles