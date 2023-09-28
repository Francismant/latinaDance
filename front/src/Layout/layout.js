import {Routes, Route} from "react-router-dom"
import Header from "../assets/components/HeaderFooter/Header";
import Footer from "../assets/components/HeaderFooter/Footer";
import Home from "../Pages/Home";
import Infos from "../Pages/Infos";
// import Evenements from "../Pages/Evenements";
// import Contact from "../Pages/Contact";




function layout() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Infos" element={<Infos/>}></Route>
        {/* <Route path="/Evenements" element={<Evenements/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default layout