import Login from "./Pages/Forms/Login/Login";
import Register from "./Pages/Forms/Register/Register";
// import Home from "./Pages/Home";
import Profile from "./Pages/Profile/Profile";
import Infos from "./Pages/Infos";
import Footer from "./assets/components/HeaderFooter/Footer";
import Header from "./assets/components/HeaderFooter/Header";
import { useState } from "react";


function App() {

  const [seeComponent, setSeeComponent] = useState(1);


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
    setSeeComponent(3)
  }

  return (
    <>
      <Header
        seeRegisterForm={seeRegisterForm}
        seeLoginForm={seeLoginForm}
        seeHome={seeHome}
      />
      {seeComponent === 1 ? (
        <Infos />
      ) : seeComponent === 2 ? (
        <Register seeLoginForm={seeLoginForm}/>
      ) : seeComponent === 3 ? (
        <Login seeProfile={seeProfile} />
      ) : (
        <Profile />
      )}
      <Footer />
    </>
  );
}

export default App;
