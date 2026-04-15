import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../Store/ActionCreators/ProductActionCreaters"
import Testimonial from "./Testimonial";
import ProductSlider from "./ProductSlider";

export default function Home() {
  let [allProducts, setAllProducts] = useState([])
  let [femaleProducts, setFemaleProducts] = useState([])
  let [kidsProducts, setKidsProducts] = useState([])
  let [maleProducts, setMaleProducts] = useState([])
  let [search, setSearch] = useState("")


  let dispatch = useDispatch()
  let ProductStateData = useSelector((state) => state.ProductStateData)

  function getAPIData() {
    dispatch(getProduct())
    if (ProductStateData.length) {
      setAllProducts(ProductStateData.slice(0, 9))
      setMaleProducts(ProductStateData.filter((x) => x.maincategory === "Male").slice(0, 9))
      setFemaleProducts(ProductStateData.filter((x) => x.maincategory === "Female").slice(0, 9))
      setKidsProducts(ProductStateData.filter((x) => x.maincategory === "Kids").slice(0, 9))

    }
  }

  function postSearch(e) {
    e.preventDefault()
    let ch = search ? search.toLocaleLowerCase() : "";
    console.log("search:", ch);
    setAllProducts(ProductStateData.filter((x) => {
      console.log("x:", x);
      console.log("name:", x.name);
      console.log("maincategory:", x.maincategory);
      console.log("subcategory:", x.subcategory);
      console.log("brand:", x.brand);
      console.log("color:", x.color);
      console.log("size:", x.size);
      console.log("description:", x.description);
      return (
        x.name.toLocaleLowerCase().includes(ch) ||
        x.maincategory.toLocaleLowerCase() === ch ||
        x.subcategory.toLocaleLowerCase() === ch ||
        x.brand.toLocaleLowerCase() === ch ||
        x.color.toLocaleLowerCase() === ch ||
        x.size.toLocaleLowerCase() === ch ||
        x.description.toLocaleLowerCase().includes(ch)
      );
    }));
  }

  useEffect(() => {
    getAPIData()
  }, [ProductStateData.length])











  let [suggestions, setSuggestions] = useState([]);
  function updateSuggestions(input) {
    let ch = input.toLocaleLowerCase();
    let suggestions = ProductStateData.filter((x) => {
      return (
        x.name.toLocaleLowerCase().includes(ch) ||
        x.maincategory.toLocaleLowerCase().includes(ch) ||
        x.subcategory.toLocaleLowerCase().includes(ch) ||
        x.brand.toLocaleLowerCase().includes(ch) ||
        x.color.toLocaleLowerCase().includes(ch) ||
        x.size.toLocaleLowerCase().includes(ch) ||
        x.description.toLocaleLowerCase().includes(ch)
      );
    });
    setSuggestions(suggestions.slice(0, 5)); // Limit suggestions to 5 items for example
  }
  function selectSuggestion(suggestion) {
    setSearch(suggestion.name); // Update search input with selected suggestion
    setSuggestions([]); // Clear suggestions
    // Optionally, you can trigger the search or other action here
  }










  return (
    <>
      <div className="container">

      </div>







      {/* <!-- Hero Start --> */}

      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-12 col-lg-7">
              <h4 className="mb-3 text-secondary">Get Upto 60-90% Discount on Latest Fashion </h4>
              <h1 className="mb-5 display-3 text-primary">
                Top Brand  - Pepe,Levi's more....
              </h1>

              <div>

                {/* Render suggestions */}

                {/* Render search results */}
                <div>
                  {allProducts.map((product, index) => (
                    <div key={index}>{/* Render each product here */}</div>
                  ))}
                </div>
              </div>



            </div>
            <div className="col-md-12 col-lg-5">
              <div
                id="carouselId"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active rounded">
                    <img
                      src="/img/hero-img-1.jpg"
                      className="img-fluid w-100 h-100 bg-secondary rounded"
                      alt="First slide"
                    />
                    <Link to="/shop?mc=Male" className="btn px-4 py-2 text-white rounded">
                      Shop
                    </Link>
                  </div>
                  <div className="carousel-item  rounded">
                    <img
                      src="/img/hero-img-2.jpg"
                      className="img-fluid w-100 h-100 bg-secondary rounded"
                      alt="Third slide"
                    />
                    <Link to="/shop?mc=Kid's" className="btn px-4 py-2 text-white rounded">
                      Shop
                    </Link>
                  </div>
                  <div className="carousel-item rounded">
                    <img
                      src="/img/hero-img-3.jpeg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Second slide"
                    />
                    <Link to="/shop?mc=Female" className="btn px-4 py-2 text-white rounded">
                      Shop
                    </Link>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* serach start */}


      <div className="position-relative mx-auto d-flex">
        <input
          type="search"
          className="form-control border-2 border-secondary  bbb w-75 py-3 px-4 rounded-pill"
          name="name"
          placeholder="Search"
          aria-describedby="search-icon-1"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            updateSuggestions(e.target.value);
          }}
        />
        <span
          id="search-icon-1"
          onClick={postSearch}
          className="position-relative btn btn-primary border-2 border-secondary py-3 px-4 rounded-pill text-white h-1"
        >
          <i className="fa fa-search"></i>
        </span>
      </div>


      {/* search end  */}

      {/* <!-- Fruits Shop Start--> */}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Latest Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Male
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Female
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Kid's
                      </span>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">

                <div className="row g-4">


                  {
                    allProducts.map((item, index) => {
                      return <div key={index} className="col-md-6 col-lg-4 col-xl-3" >
                        <Link to={`/product/${item._id}`}>
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={item.pic1}
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
                                to={`/product/${item._id}`}
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>

                    })
                  }


                </div>
              </div>

              <div id="tab-2" className="tab-pane fade show p-0 active">
                <div className="row g-4">


                  {
                    maleProducts.map((item, index) => {
                      return <div key={index} className="col-md-6 col-lg-4 col-xl-3" >
                        <Link to={`/product/${item._id}`}>

                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={item.pic1}
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
                                to={`/product/${item._id}`}
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>

                    })
                  }


                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0 active">
                <div className="row g-4">


                  {
                    femaleProducts.map((item, index) => {
                      return <div key={index} className="col-md-6 col-lg-4 col-xl-3" >
                        <Link to={`/product/${item._id}`}>

                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={item.pic1}
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
                                to={`/product/${item._id}`}
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>

                    })
                  }


                </div>
              </div>
              <div id="tab-4" className="tab-pane fade show p-0 active">
                <div className="row g-4">


                  {
                    kidsProducts.map((item, index) => {
                      return <div key={index} className="col-md-6 col-lg-4 col-xl-3" >
                        <Link to={item._id}>

                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={item.pic1}
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
                                to={`/product/${item._id}`}
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>

                    })
                  }


                </div>
              </div>




            </div>
          </div>
        </div>
      </div >
      {/* <!-- Fruits Shop End--> */}


      <ProductSlider data={allProducts} title="Our Popular Products" />

      {/* <!-- Banner Section Start--> */}
      <div className="container-fluid banner bg-danger my-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="py-4">
                <h1 className="display-3 text-white">New Summer Collection</h1>
                <p className="fw-normal display-3 text-dark mb-4">
                  Shop here
                </p>
                {/* <p className="mb-4 text-dark">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p> */}
                <Link
                  to="/shop"
                  className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                >
                  BUY
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="/img/baner-1.png"
                  className="img-fluid w-100 rounded"
                  alt=""
                />
                <div
                  className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                  style={{
                    width: "140px",
                    height: "140px",
                    top: "0",
                    left: "0",
                  }}
                >

                  <div className="d-flex flex-column">
                    <span className="h2 mb-0">Hot</span>
                    <span className="h4 text-muted mb-0">Deals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner Section End --> */}
      {/* <!-- Featurs Section Start --> */}
      <div className="container-fluid featurs ">
        <div className="container ">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-car-side fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over &#8377;1000</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-user-shield fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Security Payment</h5>
                  <p className="mb-0">100% security payment</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-exchange-alt fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>7 Day Return</h5>
                  <p className="mb-0">30 day money guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fa fa-phone-alt fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>24/7 Support</h5>
                  <p className="mb-0">Support every time fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Featurs Section End --> */}

      {/* <!-- Featurs Start --> */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-secondary rounded card">
                  <img
                    src="/img/featur-1.jpg"
                    className="img-fluid rounded-top w-100"
                    style={{ height: "300px" }}

                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded">
                      <h5 className="text-white">Best Deals</h5>
                      <h3 className="mb-0">upto 20-70% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-dark rounded card">
                  <img
                    src="/img/featur-2.jpg"
                    className="img-fluid rounded-top  w-100"
                    style={{ height: "300px" }}
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-light text-center p-4 rounded">
                      <h5 className="text-primary">Latest Products</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-primary rounded border border-primary">
                  <img
                    src="/img/featur-3.jpg"
                    className="img-fluid rounded-top w-100"
                    style={{ height: "300px" }}
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-secondary text-center p-4 rounded">
                      <h5 className="text-white">Top Brands</h5>
                      <h3 className="mb-0">7 Days Return</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Featurs End --> */}


      {/* <!-- Bestsaler Product Start --> */}
      {/* <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-4">Bestseller Products</h1>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="/img/best-product-1.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="/img/best-product-2.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="/img/best-product-3.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="/img/best-product-4.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="/img/best-product-5.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="/img/best-product-6.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="/img/fruite-item-1.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="/img/fruite-item-2.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="/img/fruite-item-3.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="/img/fruite-item-4.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-2">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Bestsaler Product End --> */}

      {/* <SearchSugestion /> */}

      {/* <!-- Fact Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>satisfied customers</h4>
                  <h1>1963</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>quality of service</h4>
                  <h1>99%</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>quality certificates</h4>
                  <h1>33</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>Available Products</h4>
                  <h1>789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fact Start --> */}

      {/* <!-- Tastimonial Start --> */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <Testimonial breadcrumb={false} />
        </div>
      </div>
      {/* <!-- Tastimonial End --> */}
    </>
  );
}
