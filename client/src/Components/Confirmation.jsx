import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmation() {
    return (
        <>
            {/* <!-- Single Page Header start --> */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Order Placed</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home  /</Link>
                    </li>

                    <li className="breadcrumb-item active text-white">Confirm Payment</li>
                </ol>
            </div>
            {/* <!-- Single Page Header End --> */}
            <div className="container-fluid banner bancol my-5">
                <div className="container py-5">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="py-4">
                                <h6 className="display-4 text-white">Thank You for Shopping with Us</h6>
                                <h1 className="display-5 ">Your Order has Been Confirmed</h1>

                                <p className="fw-normal display-4 text-dark mb-4">
                                    You can Track Your Order in <Link className='track' to={"/profile"}>Track Here</Link >
                                </p>

                                <Link
                                    to="/shop"
                                    className="banner-btn btn border-2 border-white bc btn-primary rounded-pill text-dark py-3 px-5"
                                >
                                    Shop More
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img
                                    src="/img/baner-2.png"
                                    className="img-fluid w-100 vv rounded"
                                    alt=""
                                />
                                {/* <div
                                    className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        top: "0",
                                        left: "0",
                                    }}
                                >

                                    {/* <div className="d-flex flex-column">
                                        <span className="h2 mb-0">Hot</span>
                                        <span className="h4 text-muted mb-0">Deals</span>
                                    </div> 
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
