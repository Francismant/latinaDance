import Layout from "./Layout/Layout";
import Login from "./Pages/Forms/Login/Login";
import Register from "./Pages/Forms/Register/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile/Profile";
// import Infos from "./Pages/Infos";
import Footer from "./assets/components/HeaderFooter/Footer";
import Header from "./assets/components/HeaderFooter/Header";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  console.log("user");


  function logout() {
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
