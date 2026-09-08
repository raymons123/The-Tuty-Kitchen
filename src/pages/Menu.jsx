import { useState } from "react"
import { Link } from "react-router-dom"


function Menu({cart,setcart}) {
  const [categoryselected,setcategoryselected] = useState("Starters")
  const menuItems = [
    // Starters
    { name: "Chicken 65", price: 123, category: "Starters", image: "/paneer65.png" },
    { name: "Chicken Lollipop", price: 180, category: "Starters", image: "/paneer65.png"  },
    { name: "Paneer Tikka", price: 160, category: "Starters", image: "/paneer65.png"  },
    { name: "Gobi Manchurian", price: 140, category: "Starters", image: "/paneer65.png"  },
    { name: "Chicken Tikka", price: 190, category: "Starters", image: "/paneer65.png"  },
    { name: "Fish Fry", price: 220, category: "Starters", image: "/paneer65.png"  },
    { name: "Mushroom Pepper Fry", price: 150, category: "Starters", image: "/paneer65.png"  },
    { name: "Chilli Chicken", price: 200, category: "Starters", image: "/paneer65.png"  },
    { name: "Paneer 65", price: 155, category: "Starters", image: "/paneer65.png"  },
    { name: "Crispy Corn", price: 130, category: "Starters", image: "/paneer65.png"  },

    // Biriyani
    { name: "Chicken Biriyani", price: 180, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Mutton Biriyani", price: 220, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Egg Biriyani", price: 150, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Veg Biriyani", price: 140, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Fish Biriyani", price: 240, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Chicken 65 Biriyani", price: 210, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Mushroom Biriyani", price: 160, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Paneer Biriyani", price: 170, category: "Biriyani" , image: "/chickenbiriyani.png"},
    { name: "Mutton Donne Biriyani", price: 250, category: "Biriyani", image: "/chickenbiriyani.png" },
    { name: "Chicken Dum Biriyani", price: 200, category: "Biriyani", image: "/chickenbiriyani.png" },

    // Fried Rice
    { name: "Chicken Fried Rice", price: 150, category: "Friedrice", image: "/chickenfriedrice.png"  },
    { name: "Egg Fried Rice", price: 130, category: "Friedrice" , image: "/chickenfriedrice.png"},
    { name: "Veg Fried Rice", price: 120, category: "Friedrice", image: "/chickenfriedrice.png" },
    { name: "Schezwan Chicken Rice", price: 180, category: "Friedrice", image: "/chickenfriedrice.png" },
    { name: "Schezwan Veg Rice", price: 150, category: "Friedrice", image: "/chickenfriedrice.png" },
    { name: "Mushroom Fried Rice", price: 140, category: "Friedrice", image: "/chickenfriedrice.png" },
    { name: "Paneer Fried Rice", price: 160, category: "Friedrice", image: "/chickenfriedrice.png" },
    { name: "Mixed Fried Rice", price: 200, category: "Friedrice", image: "/chickenfriedrice.png" },
    { name: "Garlic Chicken Rice", price: 190, category: "Friedrice", image: "/chickenfriedrice.png" },
    { name: "Triple Schezwan Rice", price: 220, category: "Friedrice", image: "/chickenfriedrice.png" },

    // Pizza
    { name: "Veg Pizza", price: 200, category: "Pizza", image: "/pizza.png" },
    { name: "Chicken Pizza", price: 250, category: "Pizza", image: "/pizza.png" },
    { name: "Margherita Pizza", price: 180, category: "Pizza", image: "/pizza.png" },
    { name: "Paneer Pizza", price: 230, category: "Pizza", image: "/pizza.png" },
    { name: "Farmhouse Pizza", price: 240, category: "Pizza", image: "/pizza.png" },
    { name: "Pepperoni Pizza", price: 280, category: "Pizza" , image: "/pizza.png"},
    { name: "BBQ Chicken Pizza", price: 290, category: "Pizza" , image: "/pizza.png"},
    { name: "Cheese Burst Pizza", price: 260, category: "Pizza", image: "/pizza.png" },
    { name: "Mushroom Pizza", price: 220, category: "Pizza", image: "/pizza.png" },
    { name: "Spicy Chicken Pizza", price: 270, category: "Pizza", image: "/pizza.png" },

    // Burger
    { name: "Chicken Burger", price: 160, category: "Burger" , image: "/burger.png"},
    { name: "Veg Burger", price: 130, category: "Burger", image: "/burger.png" },
    { name: "Cheese Burger", price: 150, category: "Burger" , image: "/burger.png"},
    { name: "Double Chicken Burger", price: 220, category: "Burger" , image: "/burger.png"},
    { name: "Paneer Burger", price: 160, category: "Burger", image: "/burger.png" },
    { name: "BBQ Chicken Burger", price: 190, category: "Burger", image: "/burger.png" },
    { name: "Crispy Chicken Burger", price: 180, category: "Burger", image: "/burger.png" },
    { name: "Mushroom Burger", price: 150, category: "Burger", image: "/burger.png" },
    { name: "Spicy Chicken Burger", price: 190, category: "Burger" , image: "/burger.png"},
    { name: "Double Cheese Burger", price: 210, category: "Burger", image: "/burger.png" },

    { "name": "Gulab Jamun", "price": 80, "category": "Desserts" },
    { "name": "Gulab Jamun with Ice Cream", "price": 110, "category": "Desserts" },
    { "name": "Caramel Custard", "price": 100, "category": "Desserts" },
    { "name": "Tender Coconut Pudding", "price": 120, "category": "Desserts" },
    { "name": "Chocolate Brownie with Ice Cream", "price": 140, "category": "Desserts" },
    { "name": "Chocolate Lava Cake", "price": 150, "category": "Desserts" },
    { "name": "Fruit Salad with Ice Cream", "price": 120, "category": "Desserts" },
    { "name": "Mango Cream", "price": 120, "category": "Desserts" },
    { "name": "Falooda", "price": 150, "category": "Desserts" },
    { "name": "Royal Falooda", "price": 180, "category": "Desserts" },


    { "name": "Fresh Lime Juice", "price": 60, "category": "Juices" },
    { "name": "Watermelon Juice", "price": 70, "category": "Juices" },
    { "name": "Pineapple Juice", "price": 80, "category": "Juices" },
    { "name": "Orange Juice", "price": 90, "category": "Juices" },
    { "name": "Pomegranate Juice", "price": 120, "category": "Juices" },
    { "name": "Mango Juice", "price": 90, "category": "Juices" },
    { "name": "Vanilla Milkshake", "price": 100, "category": "Juices" },
    { "name": "Chocolate Milkshake", "price": 120, "category": "Juices" },
    { "name": "Butterscotch Milkshake", "price": 120, "category": "Juices" },
    { "name": "Strawberry Milkshake", "price": 120, "category": "Juices" },
    { "name": "Oreo Milkshake", "price": 140, "category": "Juices" },
    { "name": "Mango Milkshake", "price": 130, "category": "Juices" },
    { "name": "Chocolate Brownie Shake", "price": 150, "category": "Juices" },
    { "name": "Classic Lime Soda", "price": 70, "category": "Juices" },
    { "name": "Mint Lime Soda", "price": 80, "category": "Juices" },
    { "name": "Nannari Sarbath", "price": 70, "category": "Juices" },
    { "name": "Nannari Lime Soda", "price": 80, "category": "Juices" },
    { "name": "Pineapple Mint Cooler", "price": 100, "category": "Juices" },
    { "name": "Tender Coconut Cooler", "price": 110, "category": "Juices" },
    { "name": "Tuty Special Fruit Punch", "price": 130, "category": "Juices" }
  ]
  const filteritems=menuItems.filter((item)=> item.category=== categoryselected)

  function Categorybox({name}){
    return(
      <div className="flex justify-center">
        <button onClick={()=>{
          setcategoryselected(name)
        }} className={`bg-[rgb(58,37,22)] py-1 px-10 text-[#F5E6C8] rounded-3xl transition-all duration-300 hover:scale-105 ${
    categoryselected === name
      ? "bg-white text-[rgb(58,37,22)]"
      : "hover:bg-white hover:text-[rgb(58,37,22)]"
  }`}>{name}</button>
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
  function Menucards({name,price,category,image}){
    
    const existing = cart.find((item)=> item.name === name)

    return(
      <div className="text-center bg-[rgb(58,37,22)] m-5 p-5 text-[#F5E6C8] rounded-3xl">
        <div className="flex justify-center">
          <img src={image} alt="" className="w-30 h-30 rounded-2xl"/>
        </div>
        <h2>{name}</h2>
        <h3>₹ {price}</h3>
        {existing ? (
          <div className="flex justify-center items-center gap-5">
            <button onClick={()=> decrease(name)} className="hover:cursor-pointer py-2 bg-[#F5E6C8] rounded-2xl text-[rgb(58,37,22)] px-4">-</button>
            <p className="py-2">{existing.qty}</p>
            <button onClick={()=> increase(name)} className="hover:cursor-pointer py-2 bg-[#F5E6C8] rounded-2xl text-[rgb(58,37,22)] px-4">+</button>
          </div>
        ) : (
          <button onClick={() => Addtocart({name, price, category})} className="hover:cursor-pointer py-2  bg-[#F5E6C8] rounded-2xl text-[rgb(58,37,22)] py-2 px-5">
            Add to cart
          </button>
        )}
        

               
      </div>
    )
  }
  const total = cart.reduce((sum,item)=> sum=sum+item.qty,0)
  const totprice = cart.reduce((sum,item)=> sum=sum+item.qty*item.price,0)
  return (
    <div className="min-h-[calc(100vh-6rem)]  pt-10 bg-[url('/bg2.jpg')] bg-cover bg-center">
      <div>
        <div className="flex justify-center gap-10 p-10 text-xl ">
          < Categorybox name={"Starters"}/>
          < Categorybox name={"Biriyani"}/>
          < Categorybox name={"Friedrice"}/>
          < Categorybox name={"Pizza"}/>
          < Categorybox name={"Burger"}/>
          < Categorybox name={"Desserts"}/>
          < Categorybox name={"Juices"}/>
        </div>
        <div className="grid grid-cols-3 gap-10 w-5xl mx-auto">

          {filteritems.map((items)=>(
            < Menucards name ={items.name} price={items.price} category={items.category} image={items.image}/>
          ))}

        </div> 
        {cart.length>0 ? (
          <div className="fixed bottom-0 w-full h-20 flex justify-between items-center p-10 text-xl bg-[rgb(58,37,22)] text-[#F5E6C8]">
            <h1>Total items : {total} | Total price : ₹ {totprice}</h1>
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