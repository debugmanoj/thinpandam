import React from "react";
import Rating from "@mui/material/Rating";
import { handleBid } from "../Customer redux/CustomerDeliveryLink";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function DeliveryItem({ person }) {
  let { id } = useParams();

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleBidSubmit = () => {
    let payload = {
      person: person,
      customerId: id,
    };
    dispatch(handleBid(payload));
    navigate(`/Bid/${id}`);
  };
  return (
    <>
      <div className="col-md-2">
        <img
          src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png"
          className="img-fluid rounded-start"
          alt={person.name}
        />
      </div>
      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body text-center ">
            <h5 className="card-title CardTitleColor">
              {person.fname}
              {person.lname}
            </h5>
            <Rating name="read-only" value={person.rating} readOnly />
            <p className="card-text p-2">
              <small className="text-body-secondary">
                <button onClick={handleBidSubmit} className="btn btn-primary">
                  {" "}
                  Give Bid
                </button>
              </small>
            </p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default DeliveryItem;
