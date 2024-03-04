import React from "react";
import { Link, useParams } from "react-router-dom";

function GotCustomer() {
  let { id } = useParams();
  return (
    <>
      <div className="text-center" style={{ marginTop: "10%" }}>
        <div className="" style={{ fontWeight: "900", fontSize: "70px" }}>
          Yup! you got customer 😊
        </div>
        <small>Delivery the food with smile</small>
        <br />
        <br />
        <br />

        <Link to={`/deliveryHome/${id}/myCustomer`} className="btn btn-dark">
          Pending customer delivery
        </Link>
      </div>
    </>
  );
}

export default GotCustomer;

//    {/* onClick={()=>navigate("/DeliverySignIn")} */}
