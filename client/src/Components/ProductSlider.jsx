import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

export default function ProductSlider(ps) {
    let options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ["Prev", "Next"],
        responsive: {
            0: {
                items: 1
            },
            720: {
                items: 2
            },
            1000: {
                items: 3
            },
            1920: {
                items: 4
            },
        }
    }
    return (
        <div className="container-fluid vesitable py-5">
            <div className="container">
                <h1 className="mb-0 text-center">{ps.title}</h1>

                <OwlCarousel className='owl-theme' {...options}>
                    {
                        ps.data.map((item, index) => {
                            return <div key={index} className="  " >
                                <div className="rounded position-relative fruite-item">
                                    <div className="fruite-img">
                                        <img
                                            src={`/${item.pic1}`}
                                            style={{ height: "250px", width: "100%" }}
                                            className="img-fluid w-100 rounded-top"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                        style={{ top: "10px", left: "10px" }}
                                    >
                                        {item.maincategory}/{item.subcategory}/{item.brand}
                                    </div>
                                    <div className="p-3 border border-secondary border-top-0 rounded-bottom">
                                        <h5>{item.name}</h5>
                                        <p>
                                            Size:{item.size}&emsp;Color:{item.color}<br />Available:<span className="text-success">{item.stock}</span>

                                        </p>
                                        <div className="  text-center flex-lg-wrap">
                                            <p className="text-dark fs-5 fw-bold mb-0">
                                                <del className="text-danger">&#8377;{item.baseprice}</del>
                                                <sup className="text-success">&emsp;{item.discount}% off</sup>
                                                <p className="text-warning ">&#8377;{item.finalprice}</p>
                                            </p>

                                        </div>
                                        <Link
                                            to={`/product/${item.id}`}
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                        >
                                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                            Add to cart
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        })
                    }

                </OwlCarousel>

            </div>
        </div>
    )
}

