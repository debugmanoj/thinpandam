import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import AxiosService from "../utils/Api";
import customerapi from "../utils/CustomerApiRoutes";
function SignUp() {
  let [error, setError] = useState();
  let navigate = useNavigate();
  //Calling reducer function and adding to API
  let handleSubmit = (values) => {
    // dispatch(handleAddUser(values))

    return navigate("/fdghdfghdfgh");
  };

  let handleCreateUser = async (values) => {
    values.role = "user";
    try {
      let res = await AxiosService.post(
        `${customerapi.createUser.path}`,
        values
      );
      if (res.status == 200) {
        navigate("/readySignIn");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  //Form works

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      userName: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      fname: Yup.string().required("Enter the First name"),
      lname: Yup.string().required("Enter the Last name"),
      userName: Yup.string().required("Enter the User Name"),
      phone: Yup.string()
        .required("Enter the mobile number")
        .matches(/^\d{10}$/, "Enter a valid mobile number"),
      address: Yup.string().required("Enter the address "),
    }),
    onSubmit: (values) => {
      handleCreateUser(values);
      // let a=dispatch(handleAddUser(values))
      // console.log(a);
    },
  });

  return (
    <>
      <>
        <div></div>
        <h1 className="text-center">Thin Pandam</h1>
        <div className="container mt-5 text-center">
          <form id="change" onSubmit={formik.handleSubmit}>
            <div className="form-group ">
              <label htmlFor="exampleInputName " className="mb-3">
                fname
              </label>
              <input
                type="text"
                name="fname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
                className="form-control"
                id="fname"
                placeholder="Enter First Name"
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div style={{ color: "red" }}>{formik.errors.fname}</div>
              ) : null}
              {/* <input type="text" className="form-control center-text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} id="fname" aria-label="Name" name="fname" placeholder="Enter First Name"/> */}

              {/* <input  type="text" name="fname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} className="form-control" id="fname" placeholder="Enter First Name"/> */}
            </div>
            <div className="form-group ">
              <label htmlFor="exampleInputName " className="mb-3">
                Lname
              </label>
              <input
                name="lname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lname}
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter Last Name"
              />
              {formik.touched.lname && formik.errors.lname ? (
                <div style={{ color: "red" }}>{formik.errors.lname}</div>
              ) : null}
              {/* <input  type="text" name="fname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} className="form-control" id="fname" placeholder="Enter First Name"/> */}
            </div>
            {/* <div className="form-group row">
                <label  className="col-sm-2 col-form-label custom-label">Lname</label>
                <div className="col-sm-10">
                    <input name="lname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lname} type="text" className="form-control" id="lname" placeholder="Enter Last Name"/>
                    {formik.touched.lname && formik.errors.lname ? (<div style={{color:"red"}}>{formik.errors.lname}</div>) : null}
                </div>
            </div> */}
            <div className="form-group ">
              <label htmlFor="exampleInputName " className="mb-3">
                User Name
              </label>
              <input
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter user Name"
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div style={{ color: "red" }}>{formik.errors.userName}</div>
              ) : null}
              {/* <input  type="text" name="fname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} className="form-control" id="fname" placeholder="Enter First Name"/> */}
            </div>
            <div className="form-group ">
              <label htmlFor="exampleInputName " className="mb-3">
                Phone
              </label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Phone no"
              />

              {formik.touched.phone && formik.errors.phone ? (
                <div style={{ color: "red" }}>{formik.errors.phone}</div>
              ) : null}
              {/* <input  type="text" name="fname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} className="form-control" id="fname" placeholder="Enter First Name"/> */}
            </div>
            <div className="form-group ">
              <label htmlFor="exampleInputName " className="mb-3">
                Address
              </label>
              <input
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Address"
              />

              {formik.touched.address && formik.errors.address ? (
                <div style={{ color: "red" }}>{formik.errors.address}</div>
              ) : null}
              {/* <input  type="text" name="fname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} className="form-control" id="fname" placeholder="Enter First Name"/> */}
            </div>
            {/* <div className="form-group row">
                <label className="col-sm-2 col-form-label custom-label">User name</label>
                <div className="col-sm-10">
                    <input name='userName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName} type="text" className="form-control" id="username" placeholder="Enter user Name"/>
                    {formik.touched.userName && formik.errors.userName ? (<div style={{color:"red"}}>{formik.errors.userName}</div>) : null}
                </div>
                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label custom-label">Phone </label>
                    <div className="col-sm-10">
                        <input  name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="number" className="form-control" id="phone" placeholder="Enter Phone no"/>
                        {formik.touched.phone && formik.errors.phone ? (<div style={{color:"red"}}>{formik.errors.phone}</div>) : null}
                    </div>
                </div>
                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label custom-label">Address</label>
                    <div className="col-sm-10">
                        <input  name='address' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} type="text" className="form-control" id="address" placeholder="Enter Address"/>
                        {formik.touched.address && formik.errors.address ? (<div style={{color:"red"}}>{formik.errors.address}</div>) : null}
                    </div>
                </div>
            </div> */}

            <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="text-center mt-3 " style={{ color: "red" }}>
          {error}
        </div>
      </>
    </>
  );
}

export default SignUp;

// Way of working signUp
// Intha page la user vanthu submit click panna redux oda reducer call aagitu
// values aa api la update pannitu homepage ku return panni vidrom avalothaan simple
