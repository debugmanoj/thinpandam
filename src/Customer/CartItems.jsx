import React, { useState } from 'react'
import {  useDispatch,useSelector } from 'react-redux'
import { handleCartAdd,handleCartRemove } from '../CartRedux/CartList';




function CartItems({order}) {
    let CartLists = useSelector(state=>state.Cart)
    
    let dispatch=useDispatch();
    let handleChange=(e)=>{
        let cartSwitcher=e.target.getAttribute("name")
        
        cartSwitcher==="Up"?dispatch(handleCartAdd(order)):dispatch(handleCartRemove(order))
        
    }
  return <>
        <div className="mb-2 billOne d-flex justify-content-between align-items-center">
                <div className="text-start mx-2"> 
                    {order.foodTitle}
                </div>
                <div className="text-center"> 
                    Qty
                    <div>
                    <input className="text-center border-0 border-bottom border-primary" type="text" value={order.qty} />
                    </div>

                </div>
                <div className='mx-auto'>
                <i className="fa-solid fa-angle-up" name="Up" onClick={handleChange} ></i>
                    <i className="fa-solid fa-angle-down" onClick={handleChange} name="Down"></i>
                </div>
                <div className=" mx-auto"> 
                    Price
                    <div>
                    {order.price}
                    </div>

                </div>
            </div>
            
            
  </>
}

export default CartItems