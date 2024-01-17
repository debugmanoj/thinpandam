import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate=useNavigate();
    let CustomerList=useSelector(state=>state.Cart)
    let total=0;
    {
        CustomerList.map((val,i)=>{
            if(val.isClicked){
               total=total+1
            }
 
            
        })}

        let handleChange=()=>{
            
            
            navigate("/Cart")
        }
    // console.log(CustomerList);
  return <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Thin Pandam</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="Profile.html">Profile</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!"></a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Foods</a></li>
                                <li><a className="dropdown-item" href="#!">New dishes</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form onClick={handleChange}  className="d-flex">
                        <a   className="btn btn-outline-dark" >
                            <i className="bi-cart-fill me-1"></i>
                            Cart
   
                            <span  className="badge bg-dark text-white ms-1 rounded-pill" >{total}</span>
                        </a>
                    </form>
                </div>
            </div>
        </nav>
  </>
}

export default Navbar