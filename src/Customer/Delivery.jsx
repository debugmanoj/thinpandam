import React from "react";
import Button from "@mui/material/Button";

import DeliveryItem from "./DeliveryItem";
import { useEffect } from "react";
import AxiosService from "../utils/Api";
import deliveryApi from "../utils/DeliveryApiRoutes";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerDelivery } from "../Customer redux/CustomerDeliveryLink";
import { useNavigate, useParams } from "react-router-dom";

let deliverydata = [
  {
    img: "https://cdn-icons-png.flaticon.com/256/3135/3135715.png",
    name: "Kumar Manoj",
    rating: 1,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/256/3135/3135715.png",
    name: "Joe",
    rating: 3,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/256/3135/3135715.png",
    name: "Srinivasa",
    rating: 5,
  },
];
function Delivery() {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  let dispatch = useDispatch();
  let apiDeliveryData = useSelector((state) => state.cdLink);
  const fetchApi = async () => {
    try {
      let res = await AxiosService.get(`${deliveryApi.getDeliveryUser.path}`);

      if (res.status === 200) {
        dispatch(updateCustomerDelivery(res.data.result));
        // dispatch(handleNewData(res.data))

        // apiDeliveryData=res.data
        //  navigator? setnavigateToggle(true) :"Enter the data"
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <h2 className="mb-5 text-center">Choose the delivery person</h2>

      <div className="container">
        <div className="row">
          {apiDeliveryData.length == 0 ? (
            <>
              <h6 className="text-center">
                Sorry there are no delivery person right now
              </h6>
              <br />
              <a
                onClick={() => navigate(`/Bill/${id}`)}
                className="btn btn-dark"
              >
                Standard delivery
              </a>
            </>
          ) : (
            apiDeliveryData.map((val, i) => {
              return <DeliveryItem person={val} key={i} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
export default Delivery;

{
  /* <div className="col-md-2">
          <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center ">
              <h5 className="card-title CardTitleColor" >Joe</h5>
              <p className="card-text p-2">⭐★★★</p>
              <p className="card-text p-2"><small className="text-body-secondary"><button className="btn btn-primary"> Give Bid</button></small></p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body text-center ">
              <h5 className="card-title CardTitleColor" >Srinivasa</h5>
              <p className="card-text p-2">⭐⭐★★★</p>
              <p className="card-text p-2"><small className="text-body-secondary"><a href="amount.html"> <button className="btn btn-primary"> Give Bid</button></a></small></p>
            </div>
          </div>
        </div>
         */
}
