import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/Api";
import * as Yup from "yup";
// import AdminRoutes from "../utils/AdminRoutes";
import AdminApiRoutes from "../utils/AdminApiRoutes";


//Sign In component Start
function AdminSignIn() {
  let [error, setError] = useState();
  let navigate = useNavigate();

  let handleSubmit = async (values) => {
    values.role="admin"
    try {
      let res = await AxiosService.post(
        `${AdminApiRoutes.checkAdmin.path}`,
        values
      );
      if (res.status == 200) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);

        sessionStorage.setItem("id", res.data.id);
        if (res.data.role == "admin") {
          navigate(`/adminHome/${res.data.id}`);
        }
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password:""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Enter the Email ID")
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
      <h5 className="text-center ">Admin Sign In</h5>
      <div className="container w-25 p-3 text-center ">
        <div className="color">
          <form
            onSubmit={formik.handleSubmit}
            id="reseting"
            className="formOwn"
          >
            <h6>😊 Hi </h6>

            <label className="blacktext" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              className="text-center"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              id="email"
              type="text"
              placeholder="sample@thinpandam.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <label className="blacktext" htmlFor="password">
            password
            </label>
            <input
              name="password"
              className="text-center"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              id="password"
              type="text"
              placeholder=""
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <div>
              <button type="submit" className="btn btn-dark">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-3 " style={{ color: "red" }}>
        {error}
      </div>
    </>
  );
}

export default AdminSignIn;
