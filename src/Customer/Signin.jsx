import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/Api";
import * as Yup from "yup";

import customerapi from "../utils/CustomerApiRoutes";

//Sign In component Start
function Signin() {
  let [error, setError] = useState();
  let navigate = useNavigate();

  let handleSubmit = async (values) => {
    try {
      let res = await AxiosService.post(
        `${customerapi.checkUser.path}`,
        values
      );
      if (res.status == 200) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);

        sessionStorage.setItem("id", res.data.phone);
        if (res.data.role == "user") {
          navigate(`/home/${res.data.phone}`);
        }
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

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

    // handleSubmit(values),
  });
  // let handleLink=()=>{
  //   setnavigateToggle(false)
  // }

  return (
    <>
      <h1 className="text-center blacktext">Thin Pandam</h1>
      <div className="container w-25 p-3 text-center ">
        <div className="color">
          <form
            onSubmit={formik.handleSubmit}
            id="reseting"
            className="formOwn"
          >
            <h6>😊 Hi </h6>

            <label className="blacktext" htmlFor="phone">
              Phone
            </label>
            <input
              name="phone"
              className="text-center"
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
            <p>
              Not registered Yet ?{" "}
              <span>
                <Link to="/signUp">Sign up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
      <div className="text-center mt-3 " style={{ color: "red" }}>
        {error}
      </div>
    </>
  );
}

export default Signin;
