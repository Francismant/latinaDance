import { useEffect, useState } from "react";
import styles from "../Forms/Register/Register.module.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Profile({ user }) {
  console.log("userProfile", user);
  const [allTheDances, setAllTheDances] = useState([]);
  const [feedback, setFeedBack] = useState("");
  const [feedbackGood, setFeedBackGood] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getDances() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/dances/getDances"
        );
        if (response.ok) {
          const dances = await response.json();
          setAllTheDances(dances);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getDances();
  }, []);

  const defaultValues = {
    dances: [],
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

 
  async function submit(values) {
    console.log("premierevalue", values);
    try {
      setFeedBack("");
      let data = { values, id: user.idUser };
      console.log("values_vote", data);
      const response = await fetch("http://localhost:8000/api/dances/vote", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const voteUser = await response.json();
        setFeedBackGood(voteUser.messageGood);
        reset(defaultValues);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // function addDance() {
  //   append({
  //     value: "",
  //   });
  // }

  return (
    <>
      <section className={styles.top}>
        <div className={styles.backgroundTop}></div>
        <h3 className="tac pt3pc mb3pc">Bienvenue sur votre profil</h3>
        <h4 className="tac">
          Quelle danse souhaiteriez vous voir mise en avant lors de nos prochain
          stages ?
        </h4>
      </section>
      <div className="flex-fill df jcc aic mb3pc mt3pc">
        <form onSubmit={handleSubmit(submit)}>
          <div className="df fc mb10">
            <label className="mb10 df jcc aic gap1">
              <span className="flex-fill">Dances</span>
              {/* <button
                onClick={addDance}
                type="button"
                className="btn btn-primary-reverse"
              >
                +
              </button> */}
            </label>
            <ul>
              <li className="mb10">
                <select className="mr10" {...register(`dances`)}>
                  <option value="" disabled>Faites votre choix</option>
                  {allTheDances.map((dance) => (
                    <option key={dance.idDance} value={dance.idDance}>
                      {dance.nameDance}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </div>
          {feedback && <p className={`${styles.feedback} mb20`}>{feedback}</p>}
          {feedbackGood && (
            <p className={`${styles.feedbackGood} mb20`}>{feedbackGood}</p>
          )}
          <button className="btn btn-primary" disabled={isSubmitted}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;
