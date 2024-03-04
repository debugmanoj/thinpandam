import React from "react";
import NavBarCart from "./NavBarCart";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import AxiosService from "../utils/Api";
import CustomerApiRoutes from "../utils/CustomerApiRoutes";
import { Link, useNavigate, useParams } from "react-router-dom";
function Cart() {
  let { id } = useParams();
  let navigate = useNavigate();
  let CartLists = useSelector((state) => state.Cart);
  // Getting total price from the Cart

  let totalPrice = 0;
  CartLists.map((val) => {
    if (val.isClicked) {
      totalPrice += val.price;
    }
  });

  let handleFoodList = async () => {
    let addFoodToCustomer = CartLists.filter((val) => val.isClicked).map(
      (val, i) => ({
        id: i,
        foodTitle: val.foodTitle,
        orgPrice: val.orgPrice,
        price: val.price,
        qty: val.qty,
      })
    );
    try {
      let updateFood = await AxiosService.post(
        `${CustomerApiRoutes.updateFood.path}/${id}`,
        { addFoodToCustomer: addFoodToCustomer, totalPrice: totalPrice },
        {
          authenticate: CustomerApiRoutes.updateFood.authenticate,
        }
      );
      if (updateFood.status == 200) {
        navigate(`/Delivery/${id}`);
        console.log(updateFood.request.message);
      }
    } catch (error) {
      navigate(`/NotAllowed`);
    }
  };

  return (
    <>
      <NavBarCart />
      <h4 className="text-center text-black">Your order</h4>
      <div className="container mt-2">
        <div className="bill flex-column container d-flex justify-content-center align-items-center">
          {CartLists.map((val, i) => {
            if (val.isClicked) {
              return <CartItems order={val} key={i} />;
            }
          })}

          <div className="d-flex mt-4 justify-content-end w-100">
            <a className="btn btn-light">Total Price: {totalPrice} </a>
          </div>
          {/* <div classNameName="mb-2 billOne d-flex justify-content-between align-items-center">
                <div classNameName="text-start mx-2"> 
                    Biriyani
                </div>
                <div classNameName="text-end"> 
                    Qty <input classNameName="text-center border-0 border-bottom border-primary" type="number"/>
                </div>
            </div> */}

          <div className="d-flex mt-4 justify-content-end w-100">
            <a onClick={handleFoodList} className="btn btn-light">
              Ready for Bid
            </a>
          </div>
        </div>
        {/* to={`/Delivery/${id}`}  */}
      </div>
    </>
  );
}

export default Cart;
