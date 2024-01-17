import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import AxiosService from "../utils/Api";
import * as Yup from 'yup';
import { useSelector,useDispatch } from 'react-redux';
import { handleAddUser,handleSignIn } from '../Customer redux/CustomerList';

// below which indicate Checking the API data with user typed value 
let isUser=(APIdata,userValue)=>{

  let {userName,phone}=userValue;
  let result=false
  APIdata.map((val)=>{
      if(val.userName===userName && val.phone.toString()===phone){
          result=true
      }

  })
  return result
  
}


//Caling the API to fetch the data

const handleSignIns=async(values,setnavigateToggle)=>{

  try {
      let res = await AxiosService.get('/signUp')
      if(res.status===200)
      {
          let a=res.data
         let navigator= isUser(a,values)
  
         navigator?setnavigateToggle(false):"Enter the data"
      }
   } catch (error) {
      console.log(error)
   }
}


//Sign In component Start
function Signin() {
  let navigate=useNavigate();
  //Navigate tool appaarama setNavigateTool vanthu home kum sign In page kum differ aaaga use aaguthu

  
  let [navigatetoggle,setnavigateToggle]=useState(true)

  

// navigateSignup vanthu Signup page ku poga

  let [navigateSignup,setnavigateSignUp]=useState(true)
  


  let handleSubmit=async(values)=>{
    
  handleSignIns(values,setnavigateToggle)
  }
  // let signInResult = useSelector((state) => state.CustomerList.signInResult);
  // console.log(signInResult);
    const formik=useFormik({
        initialValues:{
            userName:"",
            phone:"",
        },
        validationSchema:Yup.object().shape({
          userName:Yup.string().required("Enter the username"),
          phone:Yup.string().required("Enter the mobile number").matches(/^\d{10}$/,'Enter a valid mobile number'),
        }),
        onSubmit:(values)=>handleSubmit(values),

    })
    // let handleLink=()=>{
    //   setnavigateToggle(false)
    // }
    let handleClick=()=>{
      setnavigateSignUp(false);
    }
  return <>
  {navigateSignup?<>
    <h1 className="text-center">Thin Pandam</h1>
  <div className="container w-25 p-3 text-center ">
    <div className="color">
      <form   onSubmit={formik.handleSubmit} id="reseting" className="formOwn">
        <h6>😊 Hi </h6>
        <label htmlFor="username">User name</label>
        <input  name="userName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName} id="username"  type="text" placeholder="Thindpandam" />
        {formik.touched.userName && formik.errors.userName ? (<div style={{color:"red"}}>{formik.errors.userName}</div>) : null}
        <label htmlFor="phone">Phone</label>
        <input name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}  id="phone" type="text" placeholder="9456781234" />
        {formik.touched.phone&&formik.errors.phone?(<div style={{color:"red"}}>{formik.errors.phone}</div>):null}
        {navigatetoggle?(
        <div><button  type="submit" className="btn btn-dark">
            Sign in
          </button></div>)
          :       
           navigate("/home")
        }
{/* <Link   to="/home" id="changepage" className="text-center">
          <button type="submit" className="btn btn-dark">
            Sign in
          </button> </Link>*/}
        <p>
          Not registered Yet ? {" "}
          <span>
            <Link onClick={handleClick} to="signUP" >Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  </div>
  
  </>: <div>
            <Outlet/>
          </div>}
 
 
</>
  
  
}

export default Signin