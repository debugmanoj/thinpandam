import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Navbar() {
  let { id } = useParams();
  let navigate = useNavigate();
  let CustomerList = useSelector((state) => state.Cart);
  let total = 0;
  {
    CustomerList.map((val, i) => {
      if (val.isClicked) {
        total = total + 1;
      }
    });
  }

  let handleChange = () => {
    // console.log(total);
    navigate(`/Cart/${id}`);
  };
  // console.log(CustomerList);
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand">Thin Pandam</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item  ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => navigate(`/profile/${id}`)}
                >
                  Profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link"></a>
              </li>
              {/* <li className='nav-item'><a  className="btn btn-outline-dark text-black"><i className="bi-cart-fill me-1"></i>Whislist <span  className="badge bg-dark text-white ms-1 rounded-pill" >{0}</span></a></li> */}
              {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" >All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" >Popular Foods</a></li>
                                <li><a className="dropdown-item" >New dishes</a></li>
                            </ul>
                        </li> */}
            </ul>

            <form onClick={handleChange} className="d-flex">
              <a className="btn btn-outline-dark text-black">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {total}
                </span>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
