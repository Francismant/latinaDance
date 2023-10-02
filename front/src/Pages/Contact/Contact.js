import React from 'react';
import styles from "./Contact.module.scss";


function Contact() {
    return (
        <section className={styles.topContact}>
            <div className={`df fc jcsb ${styles.backgroundTopContact}`}>
                <h1 className="pt3pc ml20">CONTACT</h1>
                {/* <ButtonList buttonLabels={buttonLabelsInfos} /> */}
            </div>
        </section>
    );
}

export default Contact;