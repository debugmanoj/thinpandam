import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCartAdd, handleCartRemove } from "../Customer redux/CartList";

function CartItems({ order }) {
  let CartLists = useSelector((state) => state.Cart);

  let dispatch = useDispatch();
  let handleChange = (e) => {
    let cartSwitcher = e.target.getAttribute("name");

    cartSwitcher === "Up"
      ? dispatch(handleCartAdd(order))
      : dispatch(handleCartRemove(order));
  };
  return (
    <>
      <div className="mb-2 billOne d-flex justify-content-between align-items-center">
        <div className="text-start mx-2">{order.foodTitle}</div>
        <div className="mx-auto"></div>
        <div className="mx-auto"></div>
        <div className="mx-auto"></div>
        <div className="mx-auto"></div>
        <div className="text-center">
          Qty
          <div>
            <i
              style={{ cursor: "pointer" }}
              className="mx-4 fa-solid fa-minus"
              onClick={handleChange}
              name="Down"
            ></i>

            <input
              className="text-center border-0 border-bottom border-primary"
              style={{ width: "10%" }}
              type="text"
              value={order.qty}
            />
            <i
              style={{ cursor: "pointer" }}
              className=" mx-4 fa-solid fa-plus"
              name="Up"
              onClick={handleChange}
            ></i>
          </div>
        </div>

        <div className=" mx-auto">
          Price
          <div>{order.price}</div>
        </div>
      </div>
    </>
  );
}

export default CartItems;

/*
<section className="h-100 h-custom" style={{"backgroundColor": "#d2c9ff"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{"borderRadius":" 15px"}}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                         
                        </div>
                        <hr className="my-4" />
                        <Item/>
                        { {
                                          phone.map((e, i) => (
                                            e.products.map((items,i)=>{
                                              // console.log(items.images[0]);
                                              let image=items.images[0];
                                              let products=items
                                              
                                           return  <Item image={image} products={products} phone={phone} setPhone={setPhone} key={i}/>
                                            })
                                            // 
                                          ))
                        } }
                    
                      
                    
                      
                      
                        </div>
                        </div>
               
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>




*/
