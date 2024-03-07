import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import AxiosService from '../utils/Api';
import AdminApiRoutes from "../utils/AdminApiRoutes"
function AdminAddFood() {
    let  handleSubmit=async(values)=>{
        try {
            let response=await AxiosService.post(`${AdminApiRoutes.addFood.path}`,{values},{
                authenticate:AdminApiRoutes.addFood.authenticate

            }) 
            if(response){
                
            }
        } catch (error) {
            console.log("error");
        }

        
    }

    const formik = useFormik({
        initialValues: {
            foodTitle: "",
            image:"",
            price:"",


        },
        validationSchema: Yup.object().shape({
            foodTitle: Yup.string()
            .required("Enter Food Title"),
            image:Yup.string()
            .required("Enter Image URL"),
            price:Yup.string().required("Enter the price")
            
        }),
        onSubmit: (values) => handleSubmit(values),
      });
  return    <>
  <>
    <>
        <h1 className="text-center blacktext">Add Food</h1>
        <div className="container mt-5 text-center">
          <form id="change" onSubmit={formik.handleSubmit}>
            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                Food Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="foodTitle"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fname}
                  className="form-control"
                  id="foodTitle"
                  placeholder="Enter Food Title"
                />
                {formik.touched.foodTitle && formik.errors.foodTitle ? (
                  <div style={{ color: "red" }}>{formik.errors.foodTitle}</div>
                ) : null}
              </div>
            </div>

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lname}
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Enter Image URL"
                />
                {formik.touched.image && formik.errors.image ? (
                  <div style={{ color: "red" }}>{formik.errors.image}</div>
                ) : null}
              </div>
            </div>
            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label custom-label">
                Price
              </label>
              <div className="col-sm-10">
                <input
                  name="price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lname}
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Enter price"
                />
                {formik.touched.price && formik.errors.price ? (
                  <div style={{ color: "red" }}>{formik.errors.price}</div>
                ) : null}
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
</>
}

export default AdminAddFood