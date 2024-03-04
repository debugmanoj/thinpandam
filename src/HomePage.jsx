import React from "react";
import logo from "../images/Logo.svg";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <div className="HomePageBody">
        <div class="header">
          <h1 class="title">
            {/* <div className='img-fluid'>
            <img src={logo} alt="" />
          </div> */}
            <span class="title-main">Thin Pandam </span>
            <span class="title-sub">We Deliver With 😊</span>
          </h1>
        </div>
        <div class="ContentBody">
          <span class="ContentBodyTitle">Dont Waste Time </span>
          <span class="ContentBodyTitleSecond">Just Order And Feel </span>
        </div>
        <div class="Transfer">
          <div>
            <a
              onClick={() => navigate("/signIn")}
              class="btn btn-small btn-light"
            >
              Sign In
            </a>
          </div>
          <div>
            <a
              onClick={() => navigate("/signUp")}
              class="btn btn-small btn-light"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
