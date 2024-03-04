import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ThanksForOrder() {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <>
      <div className="text-center" style={{ marginTop: "10%" }}>
        <div className="" style={{ fontWeight: "900", fontSize: "70px" }}>
          Thank You For Ordering Food 😊
        </div>
        <small>Enjoy your food</small>
        <br />
        <br />
        <br />
        <a className="btn btn-dark" onClick={() => navigate(`/home/${id}`)}>
          Home
        </a>
      </div>
    </>
  );
}

export default ThanksForOrder;
