import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
      {/* <!-- Navbar start --> */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-danger d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
                <a href="#" className="text-white">
                  123 Street, New York
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="mailto:arr521792@gmail.com" className="text-white">
                  E-Krt@email.com
                </a>
              </small>
              <small className="me-3">
                &emsp;&emsp;
                <i className="fa fa-phone me-2 text-secondary"></i>
                <a href="tel:9898979695" className="text-white">
                  9898979695
                </a>
              </small>
            </div>
            {/* <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </a>
            </div> */}
          </div>
        </div>
        <div className="container bb n1 ">
          <nav className="navbar navbar-light  navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <h1 className="text-dark display-6">E-krt</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse bb navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto ">
                <div className="d-flex m-3 me-0 mm">

                  <button
                    className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search text-primary"></i>
                  </button>


                </div></div>

              <div className="navbar-nav mx-auto">


                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/shop" className="nav-item nav-link">
                  Shop
                </Link>

                {
                  localStorage.getItem("role") === "Buyer" ?
                    <Link to="/contactus" className="nav-item nav-link">
                      Contact
                    </Link> : ""}

                {
                  localStorage.getItem("role") === "Admin" ?
                    <Link to="/admin" className="nav-item nav-link">
                      Admin
                    </Link> : ""
                }


              </div>
              <div className="d-flex m-3 me-0">
                {/* <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary"></i>
                </button> */}
                <div className="navbar-nav mx-auto">
                  {
                    localStorage.getItem("login") ?
                      <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{localStorage.getItem("name")}</a>
                        <div className="dropdown-menu m-0 rounded-0">
                          {localStorage.getItem("role") === "Buyer" ?
                            <>
                              <Link to="/buyerprofile" className="dropdown-item">Profile</Link>
                              <Link to="/cart" className="dropdown-item">Cart</Link>
                              <Link to="/checkout" className="dropdown-item">Checkout</Link>
                            </> :
                            <Link to="/admin" className="dropdown-item">Profile</Link>}
                          <button className="dropdown-item" onClick={logout}>Logout</button>
                        </div>
                      </div> :
                      <Link to="/login" className="nav-item nav-link">Login</Link>
                  }
                </div>

              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}

      {/* <!-- Modal Search Start --> */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Search End --> */}
    </>
  );
}
