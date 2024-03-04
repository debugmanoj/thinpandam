import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleDelete } from "../Customer redux/CartList";

function HomeItems({ values, cart, setCart }) {
  let dispatch = useDispatch();
  const [add, setAdd] = useState("Add to Cart");
  const handleClick = (e) => {
    let switcher = e.target.innerText;
    switcher === "Add to Cart"
      ? dispatch(handleAdd(values))
      : dispatch(handleDelete(values));
    // dispatch(handleAdd(values))
    // useDispatch(handleAdd(values))
    // console.log(values);
    // {add==="Remove from Cart"?setCart(cart -1):setCart(cart+1)}
    // setAdd(add === "Add to Cart" ? "Remove from Cart" : "Add to Cart");
  };
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={values.img}
            alt={values.foodTitle}
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{values.foodTitle}</h5>
              <h6>₹{values.orgPrice}</h6>

              <span className="text-muted +"></span>
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                className="btn  btn-outline-dark mt-auto "
                onClick={handleClick}
                name={values.cart}
              >
                {values.Cart}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeItems;
