import React from 'react';
import styles from "./Contact.module.scss";


function Contact() {
    return (
        <>
        <section className={styles.topContact}>
            <div className={`df fc jcsb ${styles.backgroundTopContact}`}>
                <h1 className="pt3pc ml20">CONTACT</h1>
                {/* <ButtonList buttonLabels={buttonLabelsInfos} /> */}
            </div>
        </section>
        <section>
            <h2>Comment nous contacter</h2>
            <div>
                <div>
                <i class="fa-solid fa-phone"></i>
                <p>06.21.21.21.21</p>
                </div>
                <div>
                <i class="fa-solid fa-envelope"></i>
                <p>lillelatinadance@org.com</p>
                </div>
            </div>
            <div></div>
        </section>
        </>
    );
}

export default Contact;