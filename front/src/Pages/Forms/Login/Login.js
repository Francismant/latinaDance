import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../Register/Register.module.scss";
import { useNavigate } from "react-router-dom";

function Login({ getUser }) {
  const [feedback, setFeedBack] = useState("");
  const [feedbackGood, setFeedBackGood] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const yupSchema = yup.object({
    email: yup
      .string()
      .required("Le champ est obligatoire")
      .email("Vous devez saisir un email valide"),
    password: yup.string().required("Le champ est obligatoire"),
  });

  const defaultValues = {
    password: "",
    email: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    try {
      setFeedBack("");
      console.log(values);
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const newUser = await response.json();
        if (newUser.message) {
          setIsSubmitted(false);
          setFeedBack(newUser.message);
        } else {
          setFeedBackGood("Connexion réussie, vous allez être redirigé");
          reset(defaultValues);
          console.log("User récupéré", newUser);
          let user = {};
          user.username = newUser[0].username;
          user.email = newUser[0].email;
          user.idUser = newUser[0].idUser;
          setIsSubmitted(true);
          setTimeout(() => {
            navigate("/");
            getUser(user);
          }, 3000);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitted(false);
    }
  }

  return (
    <section className={styles.top}>
      <div className={styles.backgroundTop}></div>
      <div className="flex-fill df fc jcc aic mb3pc">
        <h2 className="mt3pc">Connexion</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="df fc mb10">
            <label htmlFor="email" className="mb10">
              Email
            </label>
            <input type="email" id="email" {...register("email")} />
            {errors?.email && (
              <p className={`${styles.feedback}`}>{errors.email.message}</p>
            )}
          </div>
          <div className="df fc mb10">
            <label htmlFor="password" className="mb10">
              Password
            </label>
            <input type="password" id="password" {...register("password")} />
            {errors?.password && (
              <p className={`${styles.feedback}`}>{errors.password.message}</p>
            )}
          </div>
          {feedback && <p className={`${styles.feedback} mb20`}>{feedback}</p>}
          {feedbackGood && (
            <p className={`${styles.feedbackGood} mb20`}>{feedbackGood}</p>
          )}
          <button className="btn btn-primary mt3pc mb3pc" disabled={isSubmitted}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
