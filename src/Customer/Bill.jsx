import React, { useEffect, useState } from "react";
import AxiosService from "../utils/Api";
import customerapi from "../utils/CustomerApiRoutes";
import { useParams } from "react-router-dom";
import RazorPayment from "./RazorPayment";

function Bill() {
  let { id } = useParams();
  let [foodList, setFoodList] = useState();
  let [totalPrice, setTotalPrice] = useState();
  let [name, setName] = useState();
  let [bothAcceptedBidAmount, setbothAcceptedBidAmount] = useState();
  let getFoodList = async () => {
    let result = await AxiosService.get(`${customerapi.getFood.path}/${id}`, {
      authenticate: customerapi.getFood.authenticate,
    });

    if (result.status == 200) {
      // console.log(result.data.currentFood);
      setName(`${result.data.fname} ${result.data.lname}`);
      setTotalPrice(result.data.totalPrice);
      setFoodList(result.data.currentFood);
      const defaultValue = Math.floor(Math.random() * 61) + 40;
      setbothAcceptedBidAmount(
        result.data.bothAcceptedBidAmount || defaultValue
      );
    }
  };

  useEffect(() => {
    getFoodList();
  }, []);

  return (
    <>
      <section className="wrapper-invoice">
        <div className="invoice">
          <h1>Thin pandam</h1>

          {/* <div className="invoice-logo-brand">
          <!-- <h2>Tampsh.</h2> -->
          <img src="./assets/image/tampsh.png" alt="" />
        </div> */}

          <div className="invoice-head">
            {/* <div className="head client-info">
            <p>Tampsh, Inc.</p>
            <p>NPWP: 12.345.678.910.111213.1415</p>
            <p>Bondowoso, Jawa timur</p>
            <p>Jln. Rengganis 05, Bondowoso</p>
          </div> */}
            <div className="head client-data">
              <p>{name}</p>
            </div>
          </div>

          <div className="invoice-body">
            <table className="table ">
              <thead>
                <tr className="text-center">
                  <th>Foods</th>
                  <th>Qty</th>
                  <th>Amount in ( INR )</th>
                </tr>
              </thead>
              <tbody>
                {foodList &&
                  foodList.map((val, i) => {
                    return (
                      <tr className="text-align-right" key={i}>
                        <td>{val.foodTitle}</td>
                        <td className="text-left fw-bold">{val.qty}</td>
                        <td className="text-left fw-bold">{val.price}</td>
                      </tr>
                    );
                  })}
                {/* <tr>
                <td>Biriyani</td>
                <td> 75.00</td>
              </tr>
              <tr>
                <td>Kuska</td>
                <td> 75.00</td>
              </tr> */}
              </tbody>
            </table>
            <div className="flex-table">
              <div className="flex-column"></div>
              <div className="flex-column">
                <table className="table-subtotal">
                  <tbody>
                    <tr>
                      <td>Food Total Price</td>
                      <td className="fw-bold">Rs {totalPrice}</td>
                    </tr>
                    <tr>
                      <td>Delivery Charge</td>
                      <td className="fw-bold">Rs {bothAcceptedBidAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="invoice-total-amount">
              <p className="fw-bold">
                Total : Rs {totalPrice + bothAcceptedBidAmount}
              </p>
            </div>
          </div>

          <div className="invoice-footer">
            <RazorPayment
              deliveryCharge={bothAcceptedBidAmount}
              id={id}
              name={name}
              price={totalPrice + bothAcceptedBidAmount}
            />
            {/* <p>Thankyou, happy shopping again</p> */}
          </div>
        </div>
      </section>
      {/* <div className="copyright">
      <p>Created by ❤ Mohammad Sahrullah</p>
    </div> */}
    </>
  );
}

export default Bill;
