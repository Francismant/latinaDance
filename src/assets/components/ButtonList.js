import styles from "./ButtonList.module.scss"

const ButtonList = ({ buttonLabels }) => {
    return (
      <div className="df jcsa pb50">
        {buttonLabels.map((text, index) => (
          <button key={index} className={styles.btn}>
            <div className="df gap1 aic">
              <p>{text}</p>
              <i className="fa-solid fa-circle-right"></i>
            </div>
          </button>
        ))}
      </div>
    );
  };
  
  export default ButtonList;