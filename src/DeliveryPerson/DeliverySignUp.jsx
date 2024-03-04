import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import AxiosService from "../utils/Api";
import deliveryApi from "../utils/DeliveryApiRoutes";
function DeliverySignUp() {
  let navigate = useNavigate();

  //Calling reducer function and adding to API
  let handleSubmit = async (values) => {
    values.role = "delivery";

    try {
      let result = await AxiosService.post(
        `${deliveryApi.createDeliveryUser.path}`,
        values
      );
      if (result.status == 200) {
        navigate("/ThankYou");
      }
    } catch (error) {
      console.log(error);
    }
    // dispatch(DeliveryhandleAdd(values));
    // navigate("/DeliverySignIn");
    // dispatch(DeliveryhandleAdd(values))
    // dispatch(handleAddUser(values));
    // return navigate("/Thinpandam");
  };

  //Form works

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      userName: "",
      phone: "",
      address: "",
      rating: 0,
      monthlyEarn: 0,
      annualEarn: 0,
      PendingCustomer: 0,
      notification: 0,
      isClicked: false,
      customerId: null,
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
    onSubmit: (values) => handleSubmit(values),
    // let a=dispatch(handleAddUser(values))
    // console.log(a);
  });

  return (
    <>
      <>
        <h1 className="text-center">Thin Pandam</h1>
        <div className="container mt-5 text-center">
          <form id="change" onSubmit={formik.handleSubmit}>
            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                Fname
              </label>
              <div className="col-sm-10">
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
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                Lname
              </label>
              <div className="col-sm-10">
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
              </div>
            </div>
            {/* <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                Profile image
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  accept=".png, .jpeg"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "profile",
                      event.currentTarget.files[0]
                    );
                  }}
                  className="form-control"
                  onBlur={formik.handleBlur}
                />

                {formik.touched.profile && formik.errors.profile ? (
                  <div style={{ color: "red" }}>{formik.errors.profile}</div>
                ) : null}
              </div>
            </div> */}
            {/* <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                Aadhar Card
              </label>
              <div className="col-sm-10">
                
                <input
                  type="file"
                  id="aadhar"
                  name="aadhar"
                  accept=".png, .jpeg"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "aadhar",
                      event.currentTarget.files[0]
                    );
                  }}
                  className="form-control"
                  onBlur={formik.handleBlur}
                />

                {formik.touched.aadhar && formik.errors.aadhar ? (
                  <div style={{ color: "red" }}>{formik.errors.aadhar}</div>
                ) : null}
              </div>
            </div> */}
            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                User name
              </label>
              <div className="col-sm-10">
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
              </div>
              <div className="form-group row mt-3 mb-3">
                <label className="col-sm-2 col-form-label custom-label">
                  Phone{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Phone no"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div style={{ color: "red" }}>{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label custom-label">
                  Address
                </label>
                <div className="col-sm-10">
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
                </div>
              </div>
            </div>

            <div className="form-group row  mb-3">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    </>
  );
}

export default DeliverySignUp;

// Way of working signUp
// Intha page la user vanthu submit click panna redux oda reducer call aagitu
// values aa api la update pannitu homepage ku return panni vidrom avalothaan simple
