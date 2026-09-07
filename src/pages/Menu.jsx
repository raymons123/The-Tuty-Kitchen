import { useState } from "react"
import { Link } from "react-router-dom"


function Menu() {
  const [categoryselected,setcategoryselected] = useState("Starters")
  const [cart,setcart] = useState([])
  const menuItems = [
    // Starters
    { name: "Chicken 65", price: 123, category: "Starters" },
    { name: "Chicken Lollipop", price: 180, category: "Starters" },
    { name: "Paneer Tikka", price: 160, category: "Starters" },
    { name: "Gobi Manchurian", price: 140, category: "Starters" },
    { name: "Chicken Tikka", price: 190, category: "Starters" },
    { name: "Fish Fry", price: 220, category: "Starters" },
    { name: "Mushroom Pepper Fry", price: 150, category: "Starters" },
    { name: "Chilli Chicken", price: 200, category: "Starters" },
    { name: "Paneer 65", price: 155, category: "Starters" },
    { name: "Crispy Corn", price: 130, category: "Starters" },

    // Biriyani
    { name: "Chicken Biriyani", price: 180, category: "Biriyani" },
    { name: "Mutton Biriyani", price: 220, category: "Biriyani" },
    { name: "Egg Biriyani", price: 150, category: "Biriyani" },
    { name: "Veg Biriyani", price: 140, category: "Biriyani" },
    { name: "Fish Biriyani", price: 240, category: "Biriyani" },
    { name: "Chicken 65 Biriyani", price: 210, category: "Biriyani" },
    { name: "Mushroom Biriyani", price: 160, category: "Biriyani" },
    { name: "Paneer Biriyani", price: 170, category: "Biriyani" },
    { name: "Mutton Donne Biriyani", price: 250, category: "Biriyani" },
    { name: "Chicken Dum Biriyani", price: 200, category: "Biriyani" },

    // Fried Rice
    { name: "Chicken Fried Rice", price: 150, category: "Friedrice" },
    { name: "Egg Fried Rice", price: 130, category: "Friedrice" },
    { name: "Veg Fried Rice", price: 120, category: "Friedrice" },
    { name: "Schezwan Chicken Rice", price: 180, category: "Friedrice" },
    { name: "Schezwan Veg Rice", price: 150, category: "Friedrice" },
    { name: "Mushroom Fried Rice", price: 140, category: "Friedrice" },
    { name: "Paneer Fried Rice", price: 160, category: "Friedrice" },
    { name: "Mixed Fried Rice", price: 200, category: "Friedrice" },
    { name: "Garlic Chicken Rice", price: 190, category: "Friedrice" },
    { name: "Triple Schezwan Rice", price: 220, category: "Friedrice" },

    // Pizza
    { name: "Veg Pizza", price: 200, category: "Pizza" },
    { name: "Chicken Pizza", price: 250, category: "Pizza" },
    { name: "Margherita Pizza", price: 180, category: "Pizza" },
    { name: "Paneer Pizza", price: 230, category: "Pizza" },
    { name: "Farmhouse Pizza", price: 240, category: "Pizza" },
    { name: "Pepperoni Pizza", price: 280, category: "Pizza" },
    { name: "BBQ Chicken Pizza", price: 290, category: "Pizza" },
    { name: "Cheese Burst Pizza", price: 260, category: "Pizza" },
    { name: "Mushroom Pizza", price: 220, category: "Pizza" },
    { name: "Spicy Chicken Pizza", price: 270, category: "Pizza" },

    // Burger
    { name: "Chicken Burger", price: 160, category: "Burger" },
    { name: "Veg Burger", price: 130, category: "Burger" },
    { name: "Cheese Burger", price: 150, category: "Burger" },
    { name: "Double Chicken Burger", price: 220, category: "Burger" },
    { name: "Paneer Burger", price: 160, category: "Burger" },
    { name: "BBQ Chicken Burger", price: 190, category: "Burger" },
    { name: "Crispy Chicken Burger", price: 180, category: "Burger" },
    { name: "Mushroom Burger", price: 150, category: "Burger" },
    { name: "Spicy Chicken Burger", price: 190, category: "Burger" },
    { name: "Double Cheese Burger", price: 210, category: "Burger" },
  ]
  const filteritems=menuItems.filter((item)=> item.category=== categoryselected)

  function Categorybox({name}){
    return(
      <div className="flex justify-center">
        <button onClick={()=>{
          setcategoryselected(name)
        }}>{name}</button>
      </div>
    )
  }
  function Addtocart({name,price,category}){
    const Find = cart.find((item)=> item.name == name)
    if(Find){
      return(setcart(
        cart.map((item)=> {
          if(item.name === name){
            return({...item,qty: item.qty+1})
          }
          else{
            return({...item})
          }
        })
      ))
    }
    else {
      return setcart([
        ...cart,
        {
          name: name,
          price: price,
          qty: 1,
          category: category
        }
      ])
    }
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
  function Menucards({name,price,category}){
    
    const existing = cart.find((item)=> item.name === name)

    return(
      <div className="text-center">
        <div>
          <p>image</p>
        </div>
        <h2>{name}</h2>
        <h3>{price}</h3>
        {existing ? (
          <div className="flex justify-center gap-5">
            <button onClick={()=> decrease(name)}>-</button>
            <p>{existing.qty}</p>
            <button onClick={()=> increase(name)}>+</button>
          </div>
        ) : (
          <button onClick={() => Addtocart({name, price, category})}>
            Add to cart
          </button>
        )}
        

               
      </div>
    )
  }
  const total = cart.reduce((sum,item)=> sum=sum+item.qty,0)
  const totprice = cart.reduce((sum,item)=> sum=sum+item.qty*item.price,0)
  return (
    <div className="min-h-screen">
      <div>
        <div className="fixed w-full flex justify-center gap-10 pt-10 text-2xl">
          < Categorybox name={"Starters"}/>
          < Categorybox name={"Biriyani"}/>
          < Categorybox name={"Friedrice"}/>
          < Categorybox name={"Pizza"}/>
          < Categorybox name={"Burger"}/>
        </div>
        <div className="grid grid-cols-4 gap-10 pt-30">

          {filteritems.map((items)=>(
            < Menucards name ={items.name} price={items.price} category={items.category}/>
          ))}

        </div> 
        {cart.length>0 ? (
          <div className="fixed bottom-0 w-full h-20 flex justify-between p-10 text-xl">
            <h1>Total items : {total} | Total price : {totprice}</h1>
            <Link to="/ordernow" >
              Order Now
            </Link>
          </div>
        ):(
          <div>
            
          </div>
        )

        }
      </div>
      
      
    </div>
  )
}

export default Menu