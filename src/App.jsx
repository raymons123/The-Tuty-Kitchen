import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Ordernow from "./pages/Ordernow"
import Aboutus from "./pages/Aboutus"
import Home from "./pages/Home"
import Menu from "./pages/Menu"

function tuty(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/aboutus" element={< Aboutus/>}/>
        <Route path="/menu" element={< Menu/>}/>
        <Route path="/ordernow" element={<Ordernow/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default tuty