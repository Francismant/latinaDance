import React from 'react';
import styles from "./CarteTarif.module.scss"

function CarteTarifSolo({tarifsSolo}) {
  return (
    <div className="df jcsa">
          {tarifsSolo.map((item, idx) => (
            <div key={idx} className={`df fc gap1 ${styles.card}`}>
              <p>{item.title}</p>
              <div className={styles.line}></div>
              <p>{item.tarif}</p>
              <p>{item.info}</p>
              <p>{item.adh}</p>
            </div>
          ))}
    </div>
  );
}
export default CarteTarifSolo;

