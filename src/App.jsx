import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Ordernow from "./pages/Ordernow"
import Aboutus from "./pages/Aboutus"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import { useState } from "react"

function tuty(){

  const [cart,setcart] = useState([])

  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/aboutus" element={< Aboutus/>}/>
        <Route path="/menu" element={< Menu cart={cart} setcart={setcart} />}/>
        <Route path="/ordernow" element={<Ordernow cart={cart} setcart={setcart} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default tuty