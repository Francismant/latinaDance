import styles from "../Forms/Register/Register.module.scss";

function Profile({ user }) {
  return (
      <section className={styles.top}>
        <div className={styles.backgroundTop}></div>
        <h3 className="tac pt3pc mb3pc">Bienvenue sur votre profil</h3>
        <div className="flex-fill">
          <h1 className="ml20 my30">Profile</h1>
          <h2 className="ml20 mb10">username : {user.username}</h2>
          <h2 className="ml20 mb10">email : {user.email}</h2>
        </div>
      </section>
  );
}

export default Profile;