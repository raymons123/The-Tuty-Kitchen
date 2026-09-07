import { Link } from "react-router-dom"

function Ordernow({cart,setcart}) {
  
  function Smallcard({name,price,qty}){
    return(
    <div className="flex justify-center gap-10">
      <div className="w-2/5">
        <p>image</p>
      </div>
      <div className="w-3/5 ">
        <h3>{name}</h3>
        <h4>{price}</h4>
        <div className="flex gap-5">
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
    <div className="min-h-screen max-w-5xl mx-auto">
      <div className="flex justify-center gap-15">
        <div className="w-3/5">
          <h2 className="flex justify-center text-4xl p-10">Cart</h2>
          {cart.map((item)=>(
            < Smallcard name={item.name} price={item.price} qty={item.qty}/>
          ))}
          <Link to="/menu" >+ Add Some More</Link>
        </div>
        <div className="w-2/5">
          <h2 className="flex justify-center text-4xl p-10">Order Summary</h2>
          {
            cart.map((item)=> (
              <div className="flex justify-center ">
                <h2 className="w-3/5 text-center">{item.name}</h2>
                <h2 className="w-2/5 text-center">{item.price} X {item.qty}</h2>
              </div>
              
            ))
          }
          <div className="flex justify-center mt-10">
            <h2 className="w-3/5 text-center">Subtotal : </h2>
            <h2 className="w-2/5 text-center">{totprice}</h2>
          </div>
          <div className="flex justify-center">
            <h2 className="w-3/5 text-center">Charges : </h2>
            <h2 className="w-2/5 text-center">{totprice*0.05}</h2>
          </div>
          <div className="flex justify-center">
            <h2 className="w-3/5 text-center">Total : </h2>
            <h2 className="w-2/5 text-center">{totprice*1.05}</h2>
          </div>
          <div className="flex justify-center p-20">
            <button className="hover:cursor-pointer" onClick={()=> {
              setcart([])
              alert("Order Placed")
              
            }}>
              PLACE ORDER
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Ordernow