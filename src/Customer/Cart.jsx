import React from 'react'
import NavBarCart from "./NavBarCart"
import {  useSelector } from 'react-redux'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'
function Cart() {
  let CartLists = useSelector(state=>state.Cart)

  // Getting total price from the Cart

  let totalPrice=0;
  CartLists.map((val)=>{
    if(val.isClicked){
      totalPrice+=val.price
    }
  })



  return <>
  <NavBarCart/>
  <h4 className="text-center">Your order</h4>
    <div className="container mt-2">
        <div className="bill flex-column container d-flex justify-content-center align-items-center">
        {
    CartLists.map((val,i)=>{
        if(val.isClicked){
          return <CartItems order={val} key={i}/>
        }

        
    })}
    
    <div class="d-flex mt-4 justify-content-end w-100">
                <a  class="btn btn-light">Total Price: {totalPrice} </a>
            </div>
            {/* <div className="mb-2 billOne d-flex justify-content-between align-items-center">
                <div className="text-start mx-2"> 
                    Biriyani
                </div>
                <div className="text-end"> 
                    Qty <input className="text-center border-0 border-bottom border-primary" type="number"/>
                </div>
            </div> */}

            <div class="d-flex mt-4 justify-content-end w-100">
                <Link to="/Delivery"   class="btn btn-light">Place Order</Link>
            </div>
        </div>
       
    </div>
  </>
}

export default Cart