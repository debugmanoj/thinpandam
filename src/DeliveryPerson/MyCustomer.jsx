import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosService from "../utils/Api";
import deliveryApi from "../utils/DeliveryApiRoutes";

function MyCustomer() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [fetchValues, setFetchValues] = useState([]);
  let [waitforPayment, setWaitforPayment] = useState();

  let fetchPendingCustomer = async () => {
    try {
      let res = await AxiosService.get(
        `${deliveryApi.pendingCustomer.path}/${id}`,
        {
          authenticate: deliveryApi.pendingCustomer.authenticate,
        }
      );
      if (res.status == 200) {
        console.log(res);
        setFetchValues([res.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPendingCustomer();
  }, []);

  const handleDelivery = async () => {
    try {
      let updateDelivery = await AxiosService.get(
        `${deliveryApi.clearCustomerId.path}/${id}`,
        {
          authenticate: deliveryApi.clearCustomerId.authenticate,
        }
      );
      if (updateDelivery.status == 200) {
        navigate(`/ThanksforDeliverying/${id}`);
      }
    } catch (error) {
      alert("customer didnot paid amount");
      // console.log(error.response.data);
    }
  };
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>

              <th>Address</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fetchValues &&
              fetchValues.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {e.fname} {e.lname}
                    </td>
                    <td>{e.address} </td>

                    <td>
                      <button
                        onClick={handleDelivery}
                        className="btn btn-primary btn-sm"
                      >
                        Delivery food
                      </button>
                      {/* ()=>navigate(`/ThanksforDeliverying/${id}`) */}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyCustomer;
