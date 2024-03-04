import React, { useEffect, useReducer, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import deliveryApi from "../utils/DeliveryApiRoutes";
import AxiosService from "../utils/Api";
import { useNavigate, useParams } from "react-router-dom";
// import './bid.css';

function Bid() {
  let navigate = useNavigate();
  let { id } = useParams();
  // let dispatch=useDispatch();
  let [deliveryBid, setDeliveryBid] = useState();
  let [fixBid, setFixBid] = useState();
  let [deliverybid, setDeliverybid] = useState();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  let [displayReject, setDisplayReject] = useState();
  let handleChangeBid = async (customerValue) => {
    // dispatch(updateCustomerBid(customerValue))

    // console.log(customerValue)
    try {
      let res = await AxiosService.post(
        `${deliveryApi.handleBid.path}/${id}`,
        customerValue
      );
      if (res.status == 200) {
        forceUpdate();
      }
    } catch (error) {}
    // dispatch(handleCustomerBid(customerValue))
  };
  let getDeliveryBid = async () => {
    try {
      let res = await AxiosService.get(
        `${deliveryApi.getDeliveryBid.path}/${id}`
      );
      if (res.status == 200) {
        setDeliverybid(res.data.deliveryBid || 0);
        // setDeliveryBid(res.data.deliveryBid)
        setFixBid(res.data.fixedCustomerBid);
        setDisplayReject(res.data.DeliveryResponse);
        console.log(res.data.bothAcceptedBid);
        if (res.data.bothAcceptedBid) {
          navigate(`/Payment/${id}`);
          forceUpdate();
        }
      }
    } catch (error) {}
  };
  const formik = useFormik({
    initialValues: {
      CustomerBid: "",
    },
    validationSchema: Yup.object().shape({
      CustomerBid: Yup.number()
        .min(0, "Bid Amount must be greater than  0")
        .max(100, "Bid Amount must be less than or equal to 100")
        .required("Please enter bid amount"),
    }),
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      handleChangeBid(values);
      resetForm();
    },
  });
  useEffect(() => {
    // getDeliveryBid()
    const intervalId = setInterval(getDeliveryBid, 1200);
    return () => clearInterval(intervalId);
  }, [ignored]);

  const handleFixBid = async () => {
    // let payload={
    //     deliveryBid:fixBid,
    //     customerBid:null

    // }
    // dispatch(handleDeliveryBid(payload))
    let payload = {
      deliveryAmount: deliverybid,
    };
    try {
      let handleFixBid = await AxiosService.post(
        `${deliveryApi.handleFixBid.path}/${id}`,
        payload
      );
      if (handleFixBid.status == 200) {
        // setFixBid(handleFixBid.data.fixedCustomerBids)
        // forceUpdate()
      }
    } catch (error) {
      console.log(error);
    }
  };

  let ResetBid = async () => {
    let payload = {
      fixedCustomerBid: 0,
    };
    try {
      let ResetBid = await AxiosService.post(
        `${deliveryApi.ResetBid.path}/${id}`,
        payload
      );
      if (ResetBid.status == 200) {
        setFixBid(0);
        console.log(ResetBid.data);

        forceUpdate();
      }
    } catch (error) {
      console.log(error);
    }
  };
  let AcceptBid = async () => {
    let payload = { customerAcceptResponse: "Customer Accepted the Bid" };

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

  return (
    <>
      {/* <div className="width mt-5">
    <div className="containers">
        <div className="containerRow1">
            <div className="mb-5">
            <h4>Enter Bid amount</h4>
            </div>
            <div className="mb-3">
                <form onSubmit={formik.handleSubmit}>
                <input autoComplete="off" className='text-center' name="CustomerBid" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.CustomerBid} type="text" />
                {formik.touched.CustomerBid && formik.errors.CustomerBid ? (<div style={{color:"red"}}>{formik.errors.CustomerBid}</div>) : null}
                <br></br>
                <button type='submit' className="mt-1 btn btn-dark btn-sm" >Submit</button>
                </form>
            </div>
            <div>
            <button onClick={()=>handleFixBid()} className="mt-1 btn btn-dark btn-sm" >Fix Bid</button>
            </div>
        
            
            
            
        </div>


    </div>
    <div className=" mx-3 containers containerRow2">
        <div className="containerRow2">
            <div className="mb-5">
            <h4>Delivery Bid amount</h4>
            </div>
            <div>
                <h6>Rs {deliverybid}</h6>
            </div>
            {displayReject}
            {
                fixBid?<>
                <div>
                Delivery wants to fix the id Rs {fixBid}
                <div className='d-flex justify-content-around mt-3'>
                    <div>
                       <a onClick={()=>AcceptBid()} className='btn btn-light'>Accept</a> 
                    </div>
                    <div>
                    <a  onClick={async () => await ResetBid()} className='btn btn-danger'>Reject</a> 
                    </div>

                </div>
            </div>
                </>:""
            }
     
     
            
            
        </div>

    </div>

        
        
        
    </div> */}

      <div className="mainAll">
        <div className="mainBody">
          <main className="bidBody">
            <div id="left_side">
              <p class="logo">Customer Bid</p>
              <h3 className="enterBid">Enter the bid amount</h3>
              <div className="mb-3">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    autoComplete="off"
                    className="text-center mb-3"
                    name="CustomerBid"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.CustomerBid}
                    type="text"
                  />
                  {formik.touched.CustomerBid && formik.errors.CustomerBid ? (
                    <div
                      className="mt-3 text-center"
                      style={{
                        color: "red",
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                    >
                      {formik.errors.CustomerBid}
                    </div>
                  ) : null}
                  <br></br>
                  <div className="d-flex justify-content-around">
                    <div>
                      <button
                        type="submit"
                        className="mt-1 btn btn-dark btn-sm mb-3"
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

                <div></div>
              </div>
            </div>

            <div id="right_side">
              <p class="logo">Delivery Bid Amount</p>
              <h1 class="title_name">Rs {deliverybid}</h1>
              {displayReject}
              {fixBid ? (
                <>
                  <div className="mt-4">
                    <span style={{ color: "black" }}>
                      Delivery Fixed Bid Rs{" "}
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
          <div className="mt-3">
            <small>Dont Have Time To Bid ?</small>
          </div>
          <a
            onClick={() => navigate(`/Bill/${id}`)}
            className="mt-3 btn btn-dark btn-small"
          >
            Standard Delivery
          </a>
        </div>
      </div>
    </>
  );
}

export default Bid;
