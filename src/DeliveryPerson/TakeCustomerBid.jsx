import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import AxiosService from "../utils/Api";
import deliveryApi from "../utils/DeliveryApiRoutes";

function TakeCustomerBid() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [customerdetails, setCustomerdetails] = useState();
  const fetchApi = async () => {
    try {
      let res = await AxiosService.post(
        `${deliveryApi.getAllValidCustomerDetails.path}/${id}`,
        {},
        {
          authenticate: deliveryApi.getAllValidCustomerDetails.authenticate,
        }
      );
      if (res.status == 200) {
        setCustomerdetails(res.data.list);
        console.log(res.data.list);
      }

      // let res = await AxiosService.get(`delivery/${id}`)
      // if(res.status===200)
      // {
      //     let customer_data = null;

      //     if (res.data.customerId != null) {
      //         customer_data = await fetchCustomerApi(res.data.customerId);
      //     }

      //     // monthEarn=res.data.monthlyEarn
      //     // annualEarn=res.data.annualEarn
      //     // pendingCustomer=res.data.PendingCustomer

      //     let payload={deliveryData:res.data,customerData:customer_data}
      //     dispatch(handleNewData(payload))
      //     // console.log(res.data.customerId);

      //     // HomeList=res.data
      //   //  navigator? setnavigateToggle(true) :"Enter the data"
      // }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerdetails &&
              customerdetails.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {e.fname} {e.lname}
                    </td>
                    <td>
                      <button
                        onClick={() => navigate(`/DeliveryBid/${id}`)}
                        className="btn btn-primary"
                      >
                        Take Bid
                      </button>
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

export default TakeCustomerBid;
