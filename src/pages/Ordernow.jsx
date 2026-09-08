import { Link } from "react-router-dom"

function Ordernow({cart,setcart}) {
  
  function Smallcard({name,price,qty}){
    return(
    <div className="flex justify-center gap-10 bg-[rgb(58,37,22)] max-w-sm mx-auto rounded-3xl p-10 mb-5 text-[#F5E6C8]">
      <div className="w-2/5">
        <p>image</p>
      </div>
      <div className="w-3/5 ">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <div className="flex gap-5 justify-center">
          <button onClick={()=> decrease(name)} className="hover:cursor-pointer">-</button>
          <p>{qty}</p>
          <button onClick={()=> increase(name)} className="hover:cursor-pointer">+</button>
        </div>
      </div>
    </div>)
  }

  function increase(name){
   setcart( cart.map((item) => {
      if (item.name === name) {
        return  { ...item, qty: item.qty + 1 }
      }
      return item
    }))

  }
  function decrease(name){
    const existing = cart.find((item)=> item.name === name)
    if(existing.qty>1){
      setcart( cart.map((item) => {
        if (item.name === name) {
          return  { ...item, qty: item.qty - 1 }
        }
        return item
      }))
    }
    else{
      setcart(cart.filter((item)=> item.name !== existing.name))
    }
  }
  const totprice = cart.reduce((sum,item)=> sum=sum+item.qty*item.price,0)
  return (
    <div className="min-h-[calc(100vh-6rem)]  pt-10 bg-[url('/bg2.jpg')] bg-cover bg-center">
      {
        cart.length>0 ? (
          <div className="flex justify-center gap-15">
            <div className="w-3/5 text-center ">
              <h2 className="flex justify-center text-4xl p-10">Cart</h2>
              <Link to="/menu" className="my-5 text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]  px-10 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-white hover:cursor-pointer hover:text-[rgb(58,37,22)]" >
                + Add Some More
              </Link>
              <div className="h-[55vh] overflow-y-auto hide-scrollbar my-10">
                {cart.map((item)=>(
                  < Smallcard name={item.name} price={item.price} qty={item.qty}/>
                ))}
              </div>
              
            </div>
            <div className="w-2/5 text-[rgb(58,37,22)]">
              <h2 className="flex justify-center text-4xl p-10">Order Summary</h2>
              {
                cart.map((item)=> (
                  <div className="flex justify-center ">
                    <h2 className="w-3/5 text-center text-lg">{item.name}</h2>
                    <h2 className="w-2/5 text-center text-lg">₹{item.price} X {item.qty}</h2>
                  </div>
                  
                ))
              }
              <div className="flex justify-center mt-10">
                <h2 className="w-3/5 text-center text-lg">Subtotal : </h2>
                <h2 className="w-2/5 text-center text-lg">₹ {totprice}</h2>
              </div>
              <div className="flex justify-center">
                <h2 className="w-3/5 text-center text-lg">Charges : </h2>
                <h2 className="w-2/5 text-center text-lg">₹ {totprice*0.05}</h2>
              </div>
              <div className="flex justify-center pt-10 font-bold text-2xl">
                <h2 className="w-3/5 text-center  ">Total : </h2>
                <h2 className="w-2/5 text-center">₹ {totprice*1.05}</h2>
              </div>
              <div className="flex justify-center p-20">
                <button className="text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]  px-10 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-white hover:cursor-pointer hover:text-[rgb(58,37,22)]" onClick={()=> {
                  setcart([])
                  alert("Order Placed")
                  
                }}>
                  PLACE ORDER
                </button>
              </div>
              
            </div>
          </div>
        ):(
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-5xl">Cart</h1>
              <p className="p-20 text-2xl">Your cart is empty</p>
              <Link to="/menu" className="shadow-2xl text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]  px-10 py-3 rounded-3xl transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-[rgb(58,37,22)]">
                              View Menu
                          </Link>
            </div>
          </div>
          
        )
      }
      
    </div>
  )
}

export default Ordernow