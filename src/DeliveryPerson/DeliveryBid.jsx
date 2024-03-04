import React, { useEffect, useState, useRef, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

import * as Yup from "yup";
import AxiosService from "../utils/Api";
import deliveryApi from "../utils/DeliveryApiRoutes";
import {
  handleDeliveryBid,
  handleDeliveryInitialValue,
  updateDeliveryBid,
} from "../Customer redux/FixedBid";
import { useNavigate, useParams } from "react-router-dom";
// import "./deliveryBid.css"

function DeliveryBid() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [bid, setBid] = useState();
  let { id } = useParams();
  let [customerBid, setCustomerBid] = useState();
  let [displayReject, setDisplayReject] = useState();
  let fixedBid = useSelector((state) => state.FixedBid);

  // console.log(fixedBid);

  // Convert fixBid to useRef
  let [fixBid, setFixBid] = useState();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  let values = async (reset) => {
    try {
      let result = await AxiosService.get(`${deliveryApi.getBid.path}/${id}`);
      if (result.status === 200) {
        setCustomerBid(result.data.bidamount || 0);
        setDisplayReject(result.data.customerResponse);
        // console.log(customerBid);
        // setBid(result.data.bidamount)
        setFixBid(result.data.fixedDeliveryBid);
        if (result.data.bothAcceptedBid) {
          try {
            let res = await AxiosService.get(
              `${deliveryApi.resetAllFields.path}/${id}`
            );
            if (res.status == 200) {
              navigate(`/gotCustomer/${id}`);
              forceUpdate();
            }
          } catch (error) {
            console.log(error.response.data);
          }
          // navigate(`/gotCustomer/${id}`)
          // navigate(`/deliveryHome/${id}`)
          forceUpdate();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  let updateTheValues = async (values) => {
    // dispatch(updateDeliveryBid(values))
    try {
      let result = await AxiosService.post(
        `${deliveryApi.updateBid.path}/${id}`,
        values
      );
      if (result.status === 200) {
        forceUpdate();
        // setCustomerBid(result)
        // Handle success
      }
    } catch (error) {
      // Handle error
    }
  };

  let handleFixBid = async (values) => {
    let payload = { customerBid: customerBid };
    try {
      let handleFixBid = await AxiosService.post(
        `${deliveryApi.handleFixBid.path}/${id}`,
        payload
      );
      if (handleFixBid.status === 200) {
        console.log(handleFixBid.data);
        forceUpdate();
      }
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  let ResetBid = async () => {
    // fixBid.current = 0
    let payload = { fixedDeliveryBid: 0 };
    try {
      let ResetBid = await AxiosService.post(
        `${deliveryApi.ResetBid.path}/${id}`,
        payload
      );
      if (ResetBid.status == 200) {
        forceUpdate();
      }
    } catch (error) {
      console.log(error);
    }
  };

  let AcceptBid = async () => {
    let payload = { deliveryAcceptResponse: "delivery Accepted the Bid" };

    try {
      let AcceptBid = await AxiosService.post(
        `${deliveryApi.acceptBid.path}/${id}`,
        payload
      );
      if (AcceptBid.status == 200) {
        console.log(AcceptBid.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(values, 1200);
    return () => clearInterval(intervalId);
    // values()
  }, [ignored]);

  const formik = useFormik({
    initialValues: {
      deliveryBid: "",
    },
    validationSchema: Yup.object().shape({
      deliveryBid: Yup.number()
        .min(0, "Bid Amount must be greater than  0")
        .max(100, "Bid Amount must be less than or equal to 100")
        .required("Please enter bid amount"),
    }),
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      updateTheValues(values);
      resetForm();
    },
  });

  return (
    <>
      {/* <div className="width mt-5">
            <div className="containers">
                <div className="containerRow1">
                    <div className="mb-5">
                        <h4>Enter bid amount</h4>
                    </div>
                    <div className="mb-3">
                        <form onSubmit={formik.handleSubmit} >
                            <input autoComplete="off" className='text-center' name="deliveryBid" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.deliveryBid} id="" />
                            {formik.touched.deliveryBid && formik.errors.deliveryBid ? (<div style={{ color: "red" }}>{formik.errors.deliveryBid}</div>) : null}
                            <br></br>
                            <button type='submit' className="mt-1 btn btn-dark btn-sm" >Submit</button>
                        </form>
                    </div>
                    <div>
                        <button onClick={() => handleFixBid()} className="mt-1 btn btn-dark btn-sm" >Fix Bid</button>
                    </div>
                </div>
            </div>
            <div className=" mx-3 containers containerRow2">
                <div className="containerRow2">
                    <div className="mb-5">
                        <h4>Customer Bid amount</h4>
                    </div>
                    <div>
                        <h6>Rs {customerBid}</h6>
                    </div>
                    {
                        displayReject
                    }
                    {
                        fixBid ? <>
                            <div>
                                Customer wants to fix the bid Rs{fixBid}
                                <div className='d-flex justify-content-around mt-3'>
                                    <div>
                                        <a onClick={async()=>await AcceptBid()} className='btn btn-light'>Accept</a>
                                    </div>
                                    <div>
                                        <a onClick={async () => await ResetBid()} className='btn btn-danger'>Reject</a>
                                    </div>
                                </div>
                            </div>
                        </> : ""
                    }
                </div>
            </div>
        </div> */}
      <div className="mainAll">
        <div className="mainBody">
          <main className="bidBody">
            <div id="left_side">
              <p class="logo">Delivery Bid</p>
              <h3 className="enterBid">Enter the bid amount</h3>
              <div className="mb-3">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    autoComplete="off"
                    className="text-center"
                    name="deliveryBid"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.deliveryBid}
                    id=""
                  />
                  {formik.touched.deliveryBid && formik.errors.deliveryBid ? (
                    <div
                      className="mt-3 text-center"
                      style={{
                        color: "red",
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                    >
                      {formik.errors.deliveryBid}
                    </div>
                  ) : null}
                  <br></br>
                  <div className="d-flex justify-content-around mt-3">
                    <div>
                      <button
                        type="submit"
                        className="mt-1 btn btn-dark btn-sm"
                      >
                        Submit
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleFixBid()}
                        className="mt-1 btn btn-dark btn-sm"
                      >
                        Fix Bid
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="right_side">
              <p class="logo">Customer Bid Amount</p>
              <h1 class="title_name">Rs {customerBid}</h1>
              {displayReject}
              {fixBid ? (
                <>
                  <div className="mt-2">
                    <span style={{ color: "black" }}>
                      Customer Fixed Bid Rs{" "}
                      <span className="FixedBid">{fixBid}</span>{" "}
                    </span>
                    <div className="d-flex justify-content-around mt-3">
                      <div>
                        <a
                          onClick={() => AcceptBid()}
                          className="btn btn-light"
                        >
                          Accept
                        </a>
                      </div>
                      <div>
                        <a
                          onClick={async () => await ResetBid()}
                          className="btn btn-danger"
                        >
                          Reject
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DeliveryBid;
