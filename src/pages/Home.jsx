import { Link } from "react-router-dom"

function Home(){
    
    function Dishcard( {name, price}){
        return(
            <div className="w-40">
                <div className="h-30 w-32 text-center">
                    <p>img</p>
                </div>
                <h3 className="pt-10 text-center">{name}</h3>
                <p className="pt-10 text-center"> {price}</p>
                <div className="text-center pt-5 pb-10">
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
        )
    }
    
    return(
        <div>
            <div className="min-h-screen">
                <div className="max-w-2xl mx-auto ">
                    <h1 className="flex justify-center text-6xl pt-30">The Tuty Kitchen</h1>
                    <p className="flex justify-center mt-5 text-center text-xl pt-10" >Lorem ipsurem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptates doloribus repellat, tempora alias mollitia libero similique perspiciatis expedita ea perferendis accusamus ipsa omnis quasi ducimus accusantium possimus! Harum, consequatur.</p>
                    <div className="flex justify-center gap-10 mt-20">
                        <Link to="/menu" className="text-xl">
                            Our Menu
                        </Link>
                        <Link to="/ordernow" className="text-xl">
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="min-h-screen">
                <div>
                    <h1 className="flex justify-center text-6xl">Top Dishes</h1>
                    <div className="flex justify-center pt-20 gap-20 ">
                        < Dishcard name={"Chicken Biriyani"} price={249} />
                        < Dishcard name={"Mutton Biriyani"} price={349} />
                        < Dishcard name={"Chicken Friedrice"} price={199} />
                        < Dishcard name={"Mutton friedrice"} price={249} />   
                    </div>
                    <div className="flex justify-center mt-10 ">
                        <Link to="/menu" className="text-xl pt-10">
                            Full Menu
                        </Link>
                    </div>
                </div>

            </div>
            <div className="mb-40">
                <div className="flex justify-center">
                    <div className="w-3/5">
                        <h1 className="flex justify-center text-6xl">Short Story</h1>
                        <p className="max-w-2xl mx-auto flex justify-center mt-5 text-center text-xl pt-10 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum aut ex ea dolorem cumque laborum eum eius cupiditate vitae saepe ratione quos aliquam, placeat quis ad accusamus quaerat mollitia.
                        </p>
                        <p className="max-w-2xl mx-auto flex justify-center mt-5 text-center text-xl pt-10 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum aut ex ea dolorem cumque laborum eum eius cupiditate vitae saepe ratione quos aliquam, placeat quis ad accusamus quaerat mollitia.
                        </p>
                        <div className="flex justify-center mt-10" >
                            <Link to="/aboutus" className="text-xl pt-10">
                                Know More
                            </Link>
                        </div>
                    </div>
                    <div className="w-2/5">
                        <p className="flex justify-center">
                            Owners Photo
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )   
}
export default Home