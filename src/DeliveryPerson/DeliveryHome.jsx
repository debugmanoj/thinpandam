import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import AxiosService from "../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import DeliveryItem from "./DeliveryItem";
import deliveryApi from "../utils/DeliveryApiRoutes";

function DeliveryHome() {
  let { id } = useParams();
  let navigate = useNavigate();

  let handleBid = () => {
    navigate(`/DeliveryBid/${id}`);
  };
  let [customerdetails, setCustomerdetails] = useState();
  let [month, setMonth] = useState();
  // let {customerData,deliveryData}=useSelector(state=>state.deliveryHomeList)
  let [pendingCustomer, setPendingCustomer] = useState();
  // const { monthlyEarn = 0, annualEarn = 0, PendingCustomer = 0,notification=0, lname=null,fname=null } = deliveryData || {};
  // const {fname: customerFirstName=null,lname: customerLastName=null,phone=null}=customerData || {};

  //     let customerData=HomeList.customerData;
  //    let deliveryData= HomeList.deliveryData;
  // console.log(deliveryData.monthlyEarn);
  let card_data = [
    {
      id: 0,
      title: "EARNINGS (MONTHLY)",
      monthEarn: month,
      borderDesign: "border-left-primary",
      icon: "fas fa-calendar fa-2x text-gray-300",
    },
    {
      id: 1,
      title: "EARNINGS (ANNUAL)",
      monthEarn: 0,
      borderDesign: "border-left-success",
      icon: "fas  fa-indian-rupee-sign",
    },
    {
      id: 2,
      title: "PENDING CUSTOMER",
      monthEarn: pendingCustomer,
      borderDesign: "border-left-warning shadow",
      icon: "fas fa-comments fa-2x text-gray-300",
    },
  ];

  let dispatch = useDispatch();

  //Getiing customer Datas

  const fetchApi = async () => {
    try {
      let res = await AxiosService.get(
        `${deliveryApi.deliveryDetails.path}/${id}`,
        {
          authenticate: deliveryApi.deliveryDetails.authenticate,
        }
      );
      if (res.status == 200) {
        setPendingCustomer(res.data.PendingCustomer);
        setMonth(res.data.monthlyEarn);
      }

      // let res = await AxiosService.get(`delivery/${id}`)
      // if(res.status===200)
      // {
      //     let customer_data = null;

      //     if (res.data.customerId != null) {
      //         customer_data = await fetchCustomerApi(res.data.customerId);
      //     }

      //     // monthEarn=res.data.monthlyEarn
      //     // annualEarn=res.data.annualEarn
      //     // pendingCustomer=res.data.PendingCustomer

      //     let payload={deliveryData:res.data,customerData:customer_data}
      //     dispatch(handleNewData(payload))
      //     // console.log(res.data.customerId);

      //     // HomeList=res.data
      //   //  navigator? setnavigateToggle(true) :"Enter the data"
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-text mx-3">Thin Pandam</div>
          </a>
          <hr className="sidebar-divider my-0" />
          <hr className="sidebar-divider" />

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>Edit Profile</span>
            </a>
            {/* <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div> */}
          </li>

          <li className="nav-item">
            <Link
              to="takeCustomerBid"
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="fa-solid fa-person"></i>
              <span>Take Customers Bid</span>
            </Link>

            {/* <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <a className="collapse-item" href="utilities-color.html">Colors</a>
                <a className="collapse-item" href="utilities-border.html">Borders</a>
                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                <a className="collapse-item" href="utilities-other.html">Other</a>
            </div>
        </div> */}
          </li>
          <li className="nav-item">
            <Link
              to="myCustomer"
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fa-solid fa-spinner"></i>
              <span>Pending Customers</span>
            </Link>

            {/* <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <a className="collapse-item" >Colors</a>
                <a className="collapse-item" >Borders</a>
                <a className="collapse-item" >Animations</a>
                <a className="collapse-item" >Other</a>
            </div>
        </div> */}
          </li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>

                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell fa-fw"></i>

                    <span className="badge badge-danger badge-counter">0</span>
                  </a>

                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <a className="dropdown-item d-flex align-items-center">
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 12, 2019
                        </div>
                        <span className="font-weight-bold">
                          A new monthly report is ready to download!
                        </span>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <div className="mr-3">
                        <div className="icon-circle bg-success">
                          <i className="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 7, 2019
                        </div>
                        $290.29 has been deposited into your account!
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">
                          December 2, 2019
                        </div>
                        Spending Alert: We've noticed unusually high spending
                        for your account.
                      </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500">
                      Show All Alerts
                    </a>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Manoj Kumar
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png"
                    />
                  </a>

                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="container-fluid">
              <div className="row">
                {card_data.map((val, i) => {
                  return <DeliveryItem val={val} key={i} />;
                })}

                <Outlet />

                {/* Table compoentn */}
                {/* <div className="table-responsive">
                  <table className='table'>
                    <thead>
                        <tr>
                        
                        <th>Customer Name</th>
                        
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                        
                       {
                            customerdetails&&customerdetails.map((e,i)=>{

                                return <tr key={i}>
                                    <td>{e.fname} {e.lname}</td>
                                    <td>
                                    <button onClick={()=>navigate(`/DeliveryBid/${id}`)} className='btn btn-primary' >Take Bid</button>
                                    </td>
                                </tr>
                            })
                       }
                    </tbody>
              
              

                </table>
                </div> */}
                {/* <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Earnings (Monthly)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">Rs 200</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

      
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas  fa-indian-rupee-sign"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Customer</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4"></div>

                <div className="col-lg-6 mb-4"></div>
              </div>
            </div>

            {/* <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">HEllo</div>
                <div className="col-xl-3 col-md-6 mb-4">BYe</div>
            </div>
        </div> */}
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Thin Pandam@2024</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <a className="scroll-to-top rounded">
        <i className="fas fa-angle-up"></i>
      </a>

      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryHome;
