import { Link } from "react-router-dom"

function Home(){
    
    function Dishcard( {name, price}){
        return(
            <div className="bg-[rgb(58,37,22)] rounded-3xl text-[#F5E6C8] px-10">
                <div className="flex justify-center items-center p-5">
                    <img src="chickenbiriyani.png" alt=""  className="w-40 h-40 rounded-2xl"/>
                </div>
                <h3 className="pt-10 text-center font-bold text-xl">{name}</h3>
                <p className="py-5 text-center">₹ {price}</p>
                
            </div>
        )
    }
    
    return(
        <div >
            <div className="min-h-screen ">
                <div className="absolute inset-0 bg-no-repeat bg-cover  blur-sm w-full scale-110" >
                    <img src="bg1.jpg" alt="" />
                </div>
                <div className="max-w-2xl mx-auto text-[#F5E6C8] relative z-10">
                    <h1 className="flex justify-center text-7xl pt-30 italic">The Tuty Kitchen</h1>
                    <p className="flex justify-center mt-5 text-center text-xl pt-10" >Lorem ipsurem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptates doloribus repellat, tempora alias mollitia libero similique perspiciatis expedita ea perferendis accusamus ipsa omnis quasi ducimus accusantium possimus! Harum, consequatur.</p>
                    <div className="flex justify-center gap-10 mt-20">
                        <Link to="/menu" className="text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]  px-10 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-[#F5E6C8] hover:text-[rgb(58,37,22)]">
                            Our Menu
                        </Link>
                        <Link to="/ordernow" className="text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]  px-10 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-[#F5E6C8] hover:text-[rgb(58,37,22)]">
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="min-h-screen">
                <div  className="min-h-screen pt-10 bg-[url('/bg2.jpg')] bg-cover bg-center">
                    <h1 className="flex justify-center text-6xl text-[rgb(58,37,22)] ">Top Dishes</h1>
                    <div className="flex justify-center pt-20 gap-20 ">
                        < Dishcard name={"Chicken Biriyani"} price={249} />
                        < Dishcard name={"Mutton Biriyani"} price={349} />
                        < Dishcard name={"Chicken Friedrice"} price={199} />
                        < Dishcard name={"Mutton friedrice"} price={249} />   
                    </div>
                    <div className="flex justify-center mt-20 ">
                        <Link to="/menu" className="shadow-2xl text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]  px-10 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-[rgb(58,37,22)]">
                            View Menu
                        </Link>
                    </div>
                </div>

            </div>
            <div className="min-h-[calc(100vh-8rem)] pt-10 bg-[url('/bg2.jpg')] bg-cover bg-center">
                <div className="flex justify-center">
                    <div className="w-3/5 text-[rgb(58,37,22)]">
                        <h1 className="flex justify-center text-6xl">Short Story</h1>
                        <p className="max-w-2xl mx-auto flex justify-center mt-5 text-center text-xl pt-10 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum aut ex ea dolorem cumque laborum eum eius cupiditate vitae saepe ratione quos aliquam, placeat quis ad accusamus quaerat mollitia.
                        </p>
                        <p className="max-w-2xl mx-auto flex justify-center mt-5 text-center text-xl pt-10 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum aut ex ea dolorem cumque laborum eum eius cupiditate vitae saepe ratione quos aliquam, placeat quis ad accusamus quaerat mollitia.
                        </p>
                        <div className="flex justify-center mt-10" >
                            <Link to="/aboutus" className="text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]  px-10 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-[rgb(58,37,22)]">
                                Know More
                            </Link>
                        </div>
                    </div>
                    <div className="w-2/5 flex justify-center items-center">
                        <img src="owner.png" alt="" className="w-100 h-100 rounded-3xl" />
                    </div>
                </div>
            </div>
        </div>
        
    )   
}
export default Home