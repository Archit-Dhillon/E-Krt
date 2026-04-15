import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../Store/ActionCreators/ProductActionCreaters"
import { addCart, getCart } from "../Store/ActionCreators/CartActionCreaters"
import { addWishlist, getWishlist } from "../Store/ActionCreators/WishlistActionCreaters"
import ProductSlider from "../Components/ProductSlider"

export default function ProductDetails() {
  let [product, setProduct] = useState({
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: ""
  })
  let [relatedProducts, setRelatedProducts] = useState([])
  let { _id } = useParams()
  let [qty, setQty] = useState(1)

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let ProductStateData = useSelector((state) => state.ProductStateData)
  let CartStateData = useSelector((state) => state.CartStateData)
  let WishlistStateData = useSelector((state) => state.WishlistStateData)




  function addToCart() {
    var item = CartStateData.find((x) => x.userid === localStorage.getItem("userid") && x.productid === _id)
    if (item) {
      navigate("/cart")
    }
    else {
      item = {
        userid: localStorage.getItem("userid"),
        productid: _id,
        name: product.name,
        brand: product.brand,
        color: product.color,
        size: product.size,
        price: product.finalprice,
        qty: qty,
        total: product.finalprice * qty,
        pic: product.pic1,
      }
      dispatch(addCart(item))

      navigate("/cart")
    }
  }
  function addToWishlist() {
    var item = WishlistStateData.find((x) => x.userid === localStorage.getItem("userid") && x.productid === _id)
    if (item) {
      navigate("/buyerProfile")
    }
    else {
      item = {
        userid: localStorage.getItem("userid"),
        productid: _id,
        name: product.name,
        brand: product.brand,
        color: product.color,
        size: product.size,
        price: product.finalprice,
        pic: product.pic1,
      }
      dispatch(addWishlist(item))
      navigate("/buyerprofile")

    }
  }


  function getAPIData() {
    dispatch(getProduct())
    dispatch(getCart())
    dispatch(getWishlist())
    if (ProductStateData && ProductStateData.length) {
      let item = ProductStateData.find((x) => x._id === _id)
      if (item) {
        setProduct(item)
        setRelatedProducts(ProductStateData.filter((x) => x.maincategory === item.maincategory))
      }
      else {
        navigate("/shop")
      }
    }
  }


  useEffect(() => {
    getAPIData()
  }, [ProductStateData.length, CartStateData.length, WishlistStateData.length])

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop Detail</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop Detail</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}

      {/* <!-- Single Product Start --> */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={`/${product.pic1}`} height="450px" className="d-block w-100" alt="..." />
                      </div>

                      <div className="carousel-item">
                        <img src={`/${product.pic2}`} height="450px" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={`/${product.pic3}`} height="450px" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={`/${product.pic4}`} height="450px" className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div className='d-flex justify-content-between mt-1'>
                    <img src={`/${product.pic1}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                    <img src={`/${product.pic2}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                    <img src={`/${product.pic3}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
                    <img src={`/${product.pic4}`} height="100px" width="24.7%" alt="" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
                    {/* </div> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">{product.name}</h4>
                  <p className="mb-3">Category: {product.maincategory}\{product.subcategory}\{product.brand}</p>
                  <h5 className="fw-bold mb-3"><del className="text-danger">&#8377;{product.baseprice}</del>
                    <sup className="text-success">&#8377;{product.discount}% off</sup>&emsp;<p className="text-warning">&#8377;{product.finalprice}</p>
                  </h5>
                  <div className="d-flex mb-4">
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="mb-4">
                    <span className="sp1">Color:</span> <span className="sp2">{product.color}</span>&emsp;&emsp;
                    <span className="sp1">Size:</span> <span className="sp2">{product.size}</span><br />
                    <span className="sp1">Stock:</span> <span className="sp2">{product.stock === "In Stock" ? "Available" : "Not Available"}</span>
                    {
                      product.stock === "In Stock" ?
                        <>
                          <div className="input-group quantity mb-2" style={{ width: "200px" }}>
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => qty > 1 ? setQty(qty - 1) : ""}>
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <p className='mx-3'>{qty}</p>
                            <div className="input-group-btn">
                              <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => setQty(qty + 1)}>
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>


                          {
                            localStorage.getItem("login") ?
                              <button onClick={addToCart} className="btn border border-primary rounded-pill px-4 py-2 mb-4 text-primary"><span className="material-symbols-outlined me-2">
                                shopping_cart
                              </span> Add to cart</button> :
                              <Link to={"/login"} className="btn border border-primary rounded-pill px-4 py-2 mb-4 text-primary"><span className="material-symbols-outlined">
                                passkey
                              </span>Login</Link>

                          }
                          {/* <button onClick={addToCart} className="btn border border-primary rounded-pill px-4 py-2 mb-4 text-primary"><span className="material-symbols-outlined me-2">
                            shopping_cart
                          </span> Add to cart</button> */}


                        </>
                        : ""
                    }
                    <div className="pb"></div>
                    <button onClick={addToWishlist} className="btn pbf border border-primary rounded-pill px-4 py-2 mt-4 text-warning"><span className="material-symbols-outlined me-2 text-warning">
                      list_alt_add
                    </span> Add to Wishlist</button>

                  </p>

                </div>
                <div className="col-lg-12">
                  <div className="nav nav-tabs mb-3">
                    <h3
                      className="nav-link active border-white border-bottom-0"
                      type="button"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-about"
                      aria-controls="nav-about"
                      aria-selected="true"
                    >
                      Description
                    </h3>

                  </div>
                  <div className="tab-content mb-5">
                    <div
                      className="tab-pane active"
                      aria-labelledby="nav-about-tab"
                    >
                      <p>
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />

                      </p>
                      <div className="px-2">
                        <div className="row g-4">
                          <div className="col-6">
                            <div className="row bg-light align-items-center text-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Type</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">{product.subcategory}</p>
                              </div>
                            </div>
                            <div className="row text-center align-items-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Brand</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">{product.brand}</p>
                              </div>
                            </div>
                            <div className="row bg-light text-center align-items-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Country of Origin</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">India</p>
                              </div>
                            </div>
                            <div className="row text-center align-items-center justify-content-center py-2">
                              <div className="col-6">
                                <p className="mb-0">Quality</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">R-Assured</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission-tab"
                    >
                      <div className="d-flex">
                        <img
                          src="/img/avatar.jpg"
                          className="img-fluid rounded-circle p-3"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                        <div className="">
                          <p className="mb-2" style={{ fontSize: "14px" }}>
                            April 12, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Jason Smith</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <p>
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse ultricies
                            nisi vel quam suscipit{" "}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <img
                          src="/img/avatar.jpg"
                          className="img-fluid rounded-circle p-3"
                          style={{ width: "100px", height: "100px" }}
                          alt=""
                        />
                        <div className="">
                          <p className="mb-2" style={{ fontSize: "14px" }}>
                            April 12, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Sam Peters</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <p className="text-dark">
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse ultricies
                            nisi vel quam suscipit{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="nav-vision" role="tabpanel">
                      <p className="text-dark">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        et tempor sit. Aliqu diam amet diam et eos labore. 3
                      </p>
                      <p className="mb-0">
                        Diam dolor diam ipsum et tempor sit. Aliqu diam amet
                        diam et eos labore. Clita erat ipsum et lorem et sit
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <img
                    src="/img/vegetable-item-6.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="row g-4 fruite">
                <div className="col-lg-12">

                </div>
                <div className="col-lg-12">
                  <h4 className="mb-4">Featured products</h4>
                  <div className="d-flex align-items-center justify-content-start">
                    <div
                      className="rounded"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src="/img/featur-1.jpg"
                        className="img-fluid rounded"
                        alt="Image"
                      />
                    </div>
                    <div>
                      <h6 className="mb-2">Best Deals</h6>

                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star"></i>
                      </div><br />
                      <div className="d-flex mb-2">

                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <div
                      className="rounded"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src="/img/featur-2.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="mb-2">Free Delevery</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star"></i>
                      </div><br />
                      <div className="d-flex mb-2">
                        <h5 className="fw-bold me-2"></h5>

                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-start">
                    <div
                      className="rounded"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src="/img/featur-3.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="mb-2">Top Brands</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star"></i>
                      </div><br />
                      <div className="d-flex mb-2">

                      </div>
                    </div>
                  </div>



                  <div className="d-flex justify-content-center my-4">
                    <a
                      href="#"
                      className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                    >
                      Vew More
                    </a>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="position-relative">
                    <img
                      src="/img/banner-fruits.jpg"
                      className="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div
                      className="position-absolute"
                      style={{
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <h3 className="text-secondary fw-bold">
                        Latest <br /> Summer <br /> Collection
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="fw-bold mb-0">Related products</h1>
          <ProductSlider data={relatedProducts} />
        </div>
      </div >
      {/* <!-- Single Product End -->`    1</div> */}
    </>
  );
}

