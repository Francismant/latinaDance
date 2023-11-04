import styles from "./Events.module.scss";
import Loading from "../../assets/components/Loading/Loading";
import { useFetchData } from '../../hooks/useFetchData';
import Event from './components/Event';



function Events({user}) {


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
                {/* <ButtonList buttonLabels={buttonLabelsInfos} /> */}
            </div>
            <div className="flex-fill df fc container p20">
                <h2 className="my30">Retrouvez ici les évènements ponctuels proposés par notre école </h2>
                {/* <div
                    className={`card p20  fc mb20 flex-fill ${styles.contentCard}`}
                > */}
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
                {/* </div> */}
            </div>
        </section>
    );
}

export default Events;