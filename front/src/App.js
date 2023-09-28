import Layout from "./Layout/layout";
import Login from "./Pages/Forms/Login/Login";
import Register from "./Pages/Forms/Register/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile/Profile";
// import Infos from "./Pages/Infos";
import Footer from "./assets/components/HeaderFooter/Footer";
import Header from "./assets/components/HeaderFooter/Header";
import { useState } from "react";

function App() {
  const [seeComponent, setSeeComponent] = useState(1);
  const [user, setUser] = useState(null);

  console.log("user");

  function seeRegisterForm() {
    setSeeComponent(2);
  }

  function seeLoginForm() {
    setSeeComponent(3);
  }

  function seeHome() {
    setSeeComponent(1);
  }

  function seeProfile() {
    setSeeComponent(4);
  }

  function logout() {
    setSeeComponent(3);
    setUser(null);
  }

  function getUser(userLogged) {
    setUser(userLogged);
  }

  return (
    <>
    <Layout/>
      {/* <Header
        seeRegisterForm={seeRegisterForm}
        seeLoginForm={seeLoginForm}
        seeHome={seeHome}
        user={user}
      />
      {seeComponent === 1 ? (
        <Home />
      ) : seeComponent === 2 ? (
        <Register seeLoginForm={seeLoginForm} />
      ) : seeComponent === 3 ? (
        <Login seeProfile={seeProfile} />
      ) : (
        <Profile user={user} />
      )}
      <Footer /> */}
    </>
  );
}

export default App;
