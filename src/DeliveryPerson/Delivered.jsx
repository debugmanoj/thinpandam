import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delivered() {
  let navigate = useNavigate();
  let { id } = useParams();
  return (
    <>
      <div className="text-center" style={{ marginTop: "10%" }}>
        <div className="" style={{ fontWeight: "900", fontSize: "70px" }}>
          Thanks For Deliverying The Food 😊
        </div>
        <small>Delivery the food with smile</small>
        <br />
        <br />
        <br />
        <a
          className="btn btn-dark"
          onClick={() => navigate(`/deliveryHome/${id}`)}
        >
          Home
        </a>
      </div>
    </>
  );
}

export default Delivered;
