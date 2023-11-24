import styles from "./Events.module.scss";
import Loading from "../../assets/components/Loading/Loading";
import { useFetchData } from '../../hooks/useFetchData';
import Event from './components/Event';
import { useContext } from "react";
import { AuthContext } from "../../context";
import AddNewEvent from "./components/AddNewEvent";



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
            {/* {user && user.admin &&
                <>
                </>
            } */}
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
                                    deleteEvent={deleteEvent}
                                    event={event}
                                    user={user}
                                />
                            ))}
                    </div>
                )}
                <p>N’oubliez pas de vous connecter à votre  compte afin de pouvoir voter pour la danse que vous souhaitez voir mise en avant lors de 
nos prochains stages (avant ke 15 du mois en cours)</p>
            </div>
        </section>
    );
}

export default Events;