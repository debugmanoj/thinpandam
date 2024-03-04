import React from "react";
import Navbar from "../CustomerCommon/Navbar";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function Profile() {
  let { id } = useParams();
  let navigate = useNavigate();

  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div
            className="sidebar-heading border-bottom bg-light fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/home/${id}`)}
          >
            Thin pandam
          </div>
          <div className="list-group list-group-flush">
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              onClick={() => navigate(`totalOrderedFood`)}
            >
              Total Ordered Food
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              onClick={() => navigate("EditProfile")}
            >
              Edit Profile
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/home/${id}`)}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`totalOrderedFood`)}
                    >
                      Total Ordered Food
                    </a>
                  </li>

                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("EditProfile")}
                    >
                      Edit Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Outlet />
          {/* <div className="container-fluid">
                    <h1 className="mt-4">Simple Sidebar</h1>
                    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                    <p>
                        Make sure to keep all page content within the
                        <code>#page-content-wrapper</code>
                        . The top navbar is optional, and just for demonstration. Just create an element with the
                        <code>#sidebarToggle</code>
                        ID which will toggle the menu when clicked.
                    </p>
                </div> */}
        </div>
      </div>
    </>
  );
}

export default Profile;
