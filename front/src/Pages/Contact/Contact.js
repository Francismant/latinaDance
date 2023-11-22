import React from 'react';
import styles from "./Contact.module.scss";
import contact from "../../assets/images/Contact.png";


function Contact() {
    return (
        <>
            <section className={styles.topContact}>
                <div className={`df fc jcsb ${styles.backgroundTopContact}`}>
                    <h1 className="pt3pc ml20">CONTACT & FAQ</h1>
                    {/* <ButtonList buttonLabels={buttonLabelsInfos} /> */}
                </div>
            </section>
            <main className='center'>
                <section className={styles.contactContainer}>
                    <div className={styles.contactData}>
                        <h3>Comment nous contacter</h3>
                        <div className='df fc gap2'>
                            <div className='df gap1 aic fsize1_25'>
                                <i class="fa-solid fa-phone"></i>
                                <p>06.21.21.21.21</p>
                            </div>
                            <div className='df gap1 aic fsize1_25'>
                                <i class="fa-solid fa-envelope"></i>
                                <p>lillelatinadance@org.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={contact} alt="" />
                    </div>
                </section>
                <h2>FAQ</h2>
                <section className={`df fc gap1 mb3pc ${styles.faq}`}>
                    <details>
                        <summary>Question : Dois-je avoir de l'expérience en danse pour participer à vos cours de danse latine ?</summary>
                        <p>Réponse : Non, notre école propose des cours pour tous les niveaux, y compris les débutants et  après avoir
                            acquis une certaine expérience vous pourrez participer aux cours intermédiaire pui avancé</p>
                    </details>
                    <details>
                        <summary>Question : Comment se chausser et s'habiller ?</summary>
                        <p> Optez pour des vêtements légers et confortables qui vous permettront de bouger facilement.</p>
                    </details>
                    <details>
                        <summary>Question : Comment puis-je m'inscrire à un cours de danse latine ?</summary>
                        <p>L'inscription se fait uniquement sur place lors des cours ou des soirées</p>
                    </details>
                    <details>
                        <summary>Question : Quels sont les avantages de prendre des cours de danse latine avec votre école ?</summary>
                        <p>
                            Notre école inclue des enseignants hautement qualifiés qui vous guideront à perfectionner vos compétences dans un cadre magnifique </p>
                    </details>
                </section>
            </main>
        </>
    );
}

export default Contact;