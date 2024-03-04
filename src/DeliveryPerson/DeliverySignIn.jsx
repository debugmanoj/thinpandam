import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/Api";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import deliveryApi from "../utils/DeliveryApiRoutes";
var deliveryId;
// below which indicate Checking the API data with user typed value
let isUser = (APIdata, userValue) => {
  let { userName, phone } = userValue;
  let result = false;
  APIdata.map((val) => {
    if (val.userName === userName && val.phone.toString() === phone) {
      deliveryId = val.id;
      result = true;
    }
  });
  return result;
};

//Caling the API to fetch the data

//Sign In component Start
function DeliverySignIn() {
  let navigate = useNavigate();
  let [error, setError] = useState();

  //Navigate tool appaarama setNavigateTool vanthu home kum sign In page kum differ aaaga use aaguthu

  // let [navigatetoggle,setnavigateToggle]=useState(false)

  // navigateSignup vanthu Signup page ku poga

  let handleSubmit = async (values) => {
    try {
      let res = await AxiosService.post(
        `${deliveryApi.checkUser.path}`,
        values
      );
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);

        sessionStorage.setItem("id", res.data.phone);
        if (res.data.role == "delivery") {
          navigate(`/deliveryHome/${res.data.phone}`);
        }

        //  navigator? setnavigateToggle(true) :"Enter the data"
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // let signInResult = useSelector((state) => state.CustomerList.signInResult);
  // console.log(signInResult);
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .required("Enter the mobile number")
        .matches(/^\d{10}$/, "Enter a valid mobile number"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });
  // let handleLink=()=>{
  //   setnavigateToggle(false)
  // }

  return (
    <>
      <>
        <h1 className="text-center">Thin Pandam</h1>
        <h5 className="text-center mt-3 blacktext ">Delivery Sign In </h5>
        <div className="container w-25 p-3 text-center ">
          <div className="color">
            <form
              onSubmit={formik.handleSubmit}
              id="reseting"
              className="formOwn"
            >
              <h6 className="blacktext">😊 Hi </h6>

              <label className="blacktext" htmlFor="phone">
                Phone
              </label>
              <input
                className="text-center"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                id="phone"
                type="text"
                placeholder="9456781234"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div style={{ color: "red" }}>{formik.errors.phone}</div>
              ) : null}

              <div>
                <button type="submit" className="btn btn-dark">
                  Sign in
                </button>
              </div>

              {/* <Link   to="/home" id="changepage" className="text-center">
          <button type="submit" className="btn btn-dark">
            Sign in
          </button> </Link>*/}
              <p>
                Not registered Yet ?{" "}
                <span>
                  <Link to="/deliverySignUp">Sign up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
        <div className="text-center mt-3 " style={{ color: "red" }}>
          {error}
        </div>
      </>
    </>
  );
}

export default DeliverySignIn;
