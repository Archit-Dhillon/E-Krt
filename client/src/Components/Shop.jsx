import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../Store/ActionCreators/ProductActionCreaters";
import { getMaincategory } from "../Store/ActionCreators/MaincategoryActionCreaters";
import { getSubcategory } from "../Store/ActionCreators/SubcategoryActionCreaters";
import { getBrand } from "../Store/ActionCreators/BrandActionCreaters";



export default function Shop() {

  let [min, setMin] = useState(0)
  let [max, setMax] = useState(1000)
  let [products, setProducts] = useState([])
  let [search, setSearch] = useState("")
  let [flag, setFlag] = useState(false)
  let [filter, setFilter] = useState({
    mc: "",
    sc: "",
    br: ""
  })
  let dispatch = useDispatch()
  let ProductStateData = useSelector((state) => state.ProductStateData)
  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
  let BrandStateData = useSelector((state) => state.BrandStateData)

  function categoryFilter(mc = "", sc = "", br = "", min = -1, max = -1) {
    let data = []
    setFilter({ mc: mc, sc: sc, br: br })
    if (mc === "" && sc === "" && br === "")
      data = ProductStateData
    else if (mc !== "" && sc === "" && br === "")
      data = ProductStateData.filter((x) => x.maincategory === mc)
    else if (mc === "" && sc !== "" && br === "")
      data = ProductStateData.filter((x) => x.subcategory === sc)
    else if (mc === "" && sc === "" && br !== "")
      data = ProductStateData.filter((x) => x.brand === br)
    else if (mc !== "" && sc !== "" && br === "")
      data = ProductStateData.filter((x) => x.maincategory === mc && x.subcategory === sc)
    else if (mc === "" && sc !== "" && br !== "")
      data = ProductStateData.filter((x) => x.subcategory === sc && x.brand === br)
    else if (mc !== "" && sc === "" && br !== "")
      data = ProductStateData.filter((x) => x.maincategory === mc && x.brand === br)
    else if (mc !== "" && sc !== "" && br !== "")
      data = ProductStateData.filter((x) => x.maincategory === mc && x.subcategory === sc && x.brand === br)
    if (min === -1 && max === -1) {
      setProducts(data)
    }
    else
      setProducts(data.filter((x) => x.finalprice >= min && x.finalprice <= max))

  }
  function sortfilter(e) {
    let value = e.target.value
    if (value === "1")
      products.sort((x, y) => y._id.localeCompare(x._id))
    else if (value === "2")
      products.sort((x, y) => y.finalprice - x.finalprice)
    else
      products.sort((x, y) => x.finalprice - y.finalprice)

    setFlag(!flag)
  }



  function postSearch(e) {
    e.preventDefault()
    let ch = search ? search.toLocaleLowerCase() : "";
    console.log("search:", ch);
    setProducts(ProductStateData.filter((x) => {
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

  function applyPriceFilter() {
    categoryFilter(filter.mc, filter.sc, filter.br, min, max)
  }


  function getAPIData() {
    dispatch(getProduct())
    dispatch(getMaincategory())
    dispatch(getSubcategory())
    dispatch(getBrand())
    if (ProductStateData.length) {
      if (typeof window !== "undefined" && window.location.search.split("=")[1]) {
        categoryFilter(window.location.search.split("=")[1])
      }
      else {
        setProducts(ProductStateData)
      }
    }
  }


  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length, SubcategoryStateData.length, BrandStateData.length, ProductStateData.length])

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}

      {/* <!-- Fruits Shop Start--> */}
      <div className="container-fluid fruite ">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-lg-9">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-2"
                      name="name"
                      placeholder="Search"
                      aria-describedby="search-icon-1"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <span id="search-icon-1" onClick={postSearch} className="input-group-text p-6">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="bg-light ps-3 py-1 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                      onChange={sortfilter}
                    >
                      <option value="1">Latest</option>
                      <option value="2">Price: High to Low</option>
                      <option value="3">Price:Low to High</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Maincategories</h4>
                        <div className="list-group">
                          <button className="list-group-item list-group-item-action" onClick={() => categoryFilter("", filter.sc, filter.br)} >All</button>
                          {
                            MaincategoryStateData.map((item, index) => <button key={index} className="list-group-item list-group-item-action" onClick={() => categoryFilter(item.name, filter.sc, filter.br)} >{item.name}</button>)
                          }
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Subcategories</h4>

                        <div className="list-group">
                          <button className="list-group-item list-group-item-action" onClick={() => categoryFilter(filter.mc, "", filter.br)} >All</button>
                          {
                            SubcategoryStateData.map((item, index) => <button key={index} className="list-group-item list-group-item-action" onClick={() => categoryFilter(filter.mc, item.name, filter.br)} >{item.name}</button>)
                          }
                        </div>                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Brand</h4>
                        <div className="list-group">
                          <button className="list-group-item list-group-item-action" onClick={() => categoryFilter(filter.mc, filter.sc, "")} >All</button>
                          {
                            BrandStateData.map((item, index) => <button key={index} className="list-group-item list-group-item-action" onClick={() => categoryFilter(filter.mc, filter.sc, item.name)}>{item.name}</button>)
                          }
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Price</h4>
                        <div className="d-flex mb-3">
                          <input type="number" name="min" value={min} onChange={(e) => setMin(e.target.value)} className="form-control" placeholder="Min Price" />
                          <input type="number" name="max" value={max} onChange={(e) => setMax(e.target.value)} className="form-control" placeholder="Max Price" />

                        </div>
                        <button className="btn btn-primary w-100" onClick={applyPriceFilter} >Apply Filter</button>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <h4 className="mb-3">Featured products</h4>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
                          style={{ width: "100px", height: "100px" }}
                        >
                          <img
                            src="/img/featur-1.jpg"
                            className="img-fluid rounded"
                            alt=""
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
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
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
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-start">
                        <div
                          className="rounded me-4"
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
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">2.99 $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              4.11 $
                            </h5>
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
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center ">



                    {
                      products.map((item, index) => {
                        return <div key={index} className="col-md-6 col-lg-4 col-xl-4" >
                          <Link
                            to={`/product/${item._id}`}
                          // className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
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
                                <div className="flex-lg-wrap">
                                  <p className="text-dark fs-5 fw-bold mb-0">
                                    <del className="text-danger ma1">&#8377;{item.baseprice}</del>
                                    <sup className="text-success ">&emsp;{item.discount}% off</sup>
                                    <p className="text-warning ma3 ">&#8377;{item.finalprice}</p>
                                  </p>

                                </div>

                                <Link
                                  to={`/product/${item._id}`}
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                                  Detail
                                </Link>
                              </div>
                            </div>
                          </Link>
                        </div>

                      })
                    }


                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          &laquo;
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          &raquo;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* <!-- Fruits Shop End--> */}
    </>
  );
}
