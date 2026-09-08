import { Link } from "react-router-dom"



function Navbar(){
    return(
        <div className="h-24 p-8 flex justify-between sticky top-0 items-center relative z-50 text-white bg-[rgb(58,37,22)]">
            <div className="flex justify-center items-center gap-5">
                <Link to="/"><img src="logo.jpeg" alt="" className="h-16 w-16 rounded-full" /></Link>
                
                <h2>The Tuty Kitchen</h2>
            </div>
            <div className="flex justify-center gap-16 text-2xl mr-12">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/ordernow">Order now</Link>
                <Link to="/aboutus">About Us</Link>
            </div>
        </div>
    )
}

export default Navbar