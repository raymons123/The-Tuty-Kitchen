import { Link } from "react-router-dom"



function Navbar(){
    return(
        <div className="p-8 flex justify-between sticky top-0">
            <div>
                <h1>Logo</h1>
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