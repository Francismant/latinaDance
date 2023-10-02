import React from 'react';
import styles from "./Event.module.scss";


function Event() {
    return (
        <section className={styles.topEvent}>
            <div className={`df fc jcsb ${styles.backgroundTopEvent}`}>
                <h1 className="pt3pc ml20">EVENEMENTS</h1>
                {/* <ButtonList buttonLabels={buttonLabelsInfos} /> */}
            </div>
        </section>
    );
}

export default Event;