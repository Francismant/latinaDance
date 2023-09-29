import { Routes, Route } from "react-router-dom"
import Header from "../assets/components/HeaderFooter/Header";
import Footer from "../assets/components/HeaderFooter/Footer";
import Home from "../Pages/Home";
import Infos from "../Pages/Infos";
import Register from "../Pages/Forms/Register/Register";
import Login from "../Pages/Forms/Login/Login";
import Profile from "../Pages/Profile/Profile";
import { useState } from "react";
import MobileMenu from "../assets/components/Navbar/MobileMenu";
// import Evenements from "../Pages/Evenements";
// import Contact from "../Pages/Contact";




function Layout() {

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
      <Header user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Infos" element={<Infos />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login getUser={getUser} />}></Route>
        <Route path="/Profile" element={<Profile user={user} />}></Route>
        <Route path="/MobileMenu" element={<MobileMenu user={user} logout={logout} />}></Route>
        {/* <Route path="/Evenements" element={<Evenements/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route> */}
      </Routes>
      <Footer />
    </>
  )
}

export default Layout