import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Payment() {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <>
      <div className="text-center" style={{ marginTop: "10%" }}>
        <div className="" style={{ fontWeight: "900", fontSize: "70px" }}>
          Yup! great Deal 😊
        </div>
        <small>Lets make payment</small>
        <br />
        <br />
        <br />
        <a className="btn btn-dark" onClick={() => navigate(`/Bill/${id}`)}>
          Payment
        </a>
      </div>
    </>
  );
}

export default Payment;
