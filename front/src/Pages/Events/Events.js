import styles from "./Events.module.scss";
import Loading from "../../assets/components/Loading/Loading";
import { useFetchData } from '../../hooks/useFetchData';
import Event from './components/Event';
import { useContext } from "react";
import { AuthContext } from "../../context";



function Events() {
    const { user } = useContext(AuthContext);

    const [[events, setEvents], isLoading] = useFetchData(
        "http://localhost:8000", "api/events/getEvents"
    );

    function deleteEvent(idEvent) {
        setEvents(events.filter((e) => e.idEvent !== idEvent));
    }

    return (
        <section className={styles.topEvents}>
            <div className={`df fc jcsb ${styles.backgroundTopEvents}`}>
                <h1 className={styles.headerTitle}>EVENEMENTS</h1>
            </div>
            {user && user.admin &&
                <div>
                    <div>
                        <details className={`df fc aic ${styles.details}`}>
                            <summary className="cp my30">Ajouter un nouvel évènement</summary>
                            <div className={`df fc aic gap1 mt3pc ${styles.inputContainer}`}>
                                <input type="text" placeholder="date et heure de l'évènement" />
                                <input type="text" placeholder="titre de l'évènement" />
                                <input type="text" placeholder="durée de l'évènement" />
                                <input type="text" placeholder="prix de l'évènement" />
                                <input type="file" className={styles.inputImg} />
                            </div>
                        </details>
                    </div>
                    <div className="df jcc aic mt3pc">

                    <button className="btn btn-primary">Créer l'évènement</button>
                    </div>
                </div>
            }
            <div className="flex-fill df fc container p20">
                <h2 className="my30">Retrouvez ici les évènements ponctuels proposés par notre école </h2>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="df fc gap2 jcc aic">
                        {events
                            .map((event) => (
                                <Event
                                    key={event.idEvent}
                                    event={event}
                                    deleteEvent={deleteEvent}
                                    user={user}
                                />
                            ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Events;