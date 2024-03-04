import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  let navigate = useNavigate();
  return (
    <>
      <div className="text-center" style={{ marginTop: "10%" }}>
        <div className="" style={{ fontWeight: "900", fontSize: "70px" }}>
          Thank you creating the account 😊
        </div>
        <small>Delivery the food with smile</small>
        <br />
        <br />
        <br />
        <a className="btn btn-dark" onClick={() => navigate("/DeliverySignIn")}>
          Sign in
        </a>
      </div>
    </>
  );
}

export default ThankYou;
