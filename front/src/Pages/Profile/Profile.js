import { useEffect, useState } from "react";
import styles from "../Forms/Register/Register.module.scss";
import { useFieldArray, useForm } from "react-hook-form";
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
          // console.log(skills);
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

  const { fields, append } = useFieldArray({
    name: "dances",
    control,
  });

  async function submit(values) {
    try {
      setFeedBack("");
      console.log("values_vote",values);
      const response = await fetch("http://localhost:8000/api/profile/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const voteUser = await response.json();
        // console.log("newUser", newUser);
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

  function addDance() {
    append({
      value: "",
    });
  }

  return (
    <>
      <section className={styles.top}>
        <div className={styles.backgroundTop}></div>
        <h3 className="tac pt3pc mb3pc">Bienvenue sur votre profil</h3>
        <h4 className="tac">Quelle danse souhaiteriez vous voir mise en avant lors de nos prochain stages ?</h4>
      </section>
      <div className="flex-fill df jcc aic mb3pc mt3pc">
        <form onSubmit={handleSubmit(submit)}>
          <div className="df fc mb10">
            <label className="mb10 df jcc aic gap1">
              <span className="flex-fill">Dances</span>
              <button
                onClick={addDance}
                type="button"
                className="btn btn-primary-reverse"
              >
                +
              </button>
            </label>
            <ul>
              {fields.map((dance, index) => (
                <li key={dance.id} className="mb10">
                  <select
                    className="mr10"
                    {...register(`dances[${index}].value`)}
                  >
                    {allTheDances.map((dance) => (
                      <option key={dance.idDance} value={dance.idDance}>
                        {dance.nameDance}
                      </option>
                    ))}
                  </select>
                </li>
              ))}
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