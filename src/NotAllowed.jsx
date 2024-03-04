import React from "react";
import { useNavigate } from "react-router-dom";

function NotAllowed() {
  let navigate = useNavigate();
  return (
    <>
      <div className="text-center" style={{ marginTop: "10%" }}>
        <div className="" style={{ fontWeight: "900", fontSize: "70px" }}>
          I Am Sorry 😔
        </div>
        <small>Your are not a user</small>
        <br />
        <br />
        <br />
        <a className="btn btn-dark" onClick={() => navigate(`/DeliverySignIn`)}>
          Home
        </a>
      </div>
    </>
  );
}

export default NotAllowed;
