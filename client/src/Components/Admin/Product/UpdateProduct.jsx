import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { getProduct, updateProduct } from "../../../Store/ActionCreators/ProductActionCreaters";
import { getMaincategory } from "../../../Store/ActionCreators/MaincategoryActionCreaters";
import { getSubcategory } from "../../../Store/ActionCreators/SubcategoryActionCreaters";
import { getBrand } from "../../../Store/ActionCreators/BrandActionCreaters";
import formValidationChecker from "../../ValidationCheckers/formValidationChecker"





//____________________________________________________________________________________________________________
export default function UpdateProduct() {
  const editorRef = useRef(null);
  let [maincategory, setMaincategory] = useState([])
  let [subcategory, setSubcategory] = useState([])
  let [brand, setBrand] = useState([])

  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    baseprice: 0,
    discount: 0,
    finalprice: 0,
    stock: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
  });
  let [errorMessages, setErrorMessage] = useState({
    name: "",
    color: "",
    size: "",
    baseprice: "",
    discount: "",

  })
  let [show, setShow] = useState(false)

  let { _id } = useParams()
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData);
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);
  let ProductStateData = useSelector((state) => state.ProductStateData);

  function getInputData(e) {
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: formValidationChecker(e)
      }
    })
    let { name, value } = e.target;

    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function getInputFile(e) {
    let { name, files } = e.target;

    setData((old) => {
      return {
        ...old,
        [name]: files[0]
      }
    })
  }
  async function postData(e) {
    e.preventDefault();
    if (!(Object.keys(errorMessages).find((x) => errorMessages[x] && errorMessages[x].length !== ""))) {
      let fp = Math.round(data.baseprice - (data.baseprice * data.discount) / 100);
      var formData = new FormData()
      formData.append("_id", _id)
      formData.append("name", data.name)
      formData.append("maincategory", data.maincategory)
      formData.append("subcategory", data.subcategory)
      formData.append("brand", data.brand)
      formData.append("color", data.color)
      formData.append("size", data.size)
      formData.append("baseprice", parseInt(data.baseprice))
      formData.append("discount", parseInt(data.discount))
      formData.append("description", editorRef.current.getContent())
      formData.append("finalprice", fp)
      formData.append("stock", data.stock)
      formData.append("pic1", data.pic1)
      formData.append("pic2", data.pic2)
      formData.append("pic3", data.pic3)
      formData.append("pic4", data.pic4)

      console.log(formData)
      dispatch(updateProduct(formData))
      navigate("/admin/product/product");
    }
    else
      setShow(true)
  }
  function getAPIData() {
    dispatch(getProduct())
    dispatch(getMaincategory())
    dispatch(getSubcategory())
    dispatch(getBrand())
    dispatch(getBrand())
    if (MaincategoryStateData.length)
      setMaincategory(MaincategoryStateData)
    if (SubcategoryStateData.length)
      setSubcategory(SubcategoryStateData)
    if (BrandStateData.length)
      setBrand(BrandStateData)

    if (ProductStateData.length) {
      let item = ProductStateData.find((x) => x._id === _id)
      if (item)
        setData({ ...item })
    }
  }
  useEffect(() => {
    getAPIData();
  }, [
    MaincategoryStateData.length,
    SubcategoryStateData.length,
    BrandStateData.length
  ]);

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6"> Product</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item ">
            <a href="/admin/product/product">Product</a>
          </li>
          <li className="breadcrumb-item active text-white">Update Product</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="cointaner-fluide">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-9 ">
            <h5 className="text-dark  rad  text-center mt-2  p-2">
              Update Product
            </h5>
            <form action="" onSubmit={postData}>
              <div className="mb-3">
                <label htmlFor="">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  // required
                  type="text"
                  name="name"
                  value={data.name}
                  className="form-control"
                  placeholder="Product Name"
                  onChange={getInputData}
                />
                {show ? <p className="text-danger">{errorMessages.name}</p> : ""}
              </div>
              <div className="row">
                <div className="mb-3 col-sm-6 col-12 mb-3">
                  <label htmlFor="">
                    Maincategory<span className="text-danger">*</span>
                  </label>
                  <select
                    name="maincategory"
                    onChange={getInputData}
                    className="form-select"
                    id=""
                    value={data.maincategory}

                  >
                    {maincategory.map((item, index) => {
                      return <option key={index}>{item.name}</option>;
                    })}
                  </select>
                </div>

                <div className="mb-3 col-sm-6 col-12 mb-3">
                  <label htmlFor="">
                    Subcategory<span className="text-danger">*</span>
                  </label>
                  <select
                    name="subcategory"
                    onChange={getInputData}
                    value={data.subcategory}
                    className="form-select"
                    id=""
                  >
                    {subcategory.map((item, index) => {
                      return <option key={index}>{item.name}</option>;
                    })}
                  </select>
                </div>

                <div className="mb-3 col-sm-6 col-12 mb-3">
                  <label htmlFor="">
                    Brand<span className="text-danger">*</span>
                  </label>
                  <select
                    name="brand"
                    onChange={getInputData}
                    value={data.brand}
                    className="form-select"
                    id=""

                  >
                    {brand.map((item, index) => {
                      return <option key={index}>{item.name}</option>;
                    })}
                  </select>
                </div>

                <div className="mb-3 col-sm-6 col-12 mb-3">
                  <label htmlFor="">
                    Stock<span className="text-danger">*</span>
                  </label>
                  <select
                    name="stock"
                    onChange={getInputData}
                    className="form-select"
                    id=""
                    value={data.stock}
                  >
                    <option>In Stock</option>
                    <option>Out of Stock</option>

                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Color<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={data.color}
                    className="form-control"
                    placeholder="Color"
                    onChange={getInputData}
                  />

                  {show ? <p className="text-danger">{errorMessages.color}</p> : ""}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Size<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="size"
                    value={data.size}
                    className="form-control"
                    placeholder="Size"
                    onChange={getInputData}
                  />
                  {show ? <p className="text-danger">{errorMessages.size}</p> : ""}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Baseprice<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    name="baseprice"
                    value={data.baseprice}
                    className="form-control"
                    placeholder="Baseprice"
                    onChange={getInputData}
                  />
                  {show ? <p className="text-danger">{errorMessages.baseprice}</p> : ""}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Discount<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="discount"
                    className="form-control"
                    value={data.discount}
                    placeholder="Discount"
                    onChange={getInputData}
                  />
                  {show ? <p className="text-danger">{errorMessages.discount}</p> : ""}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="">Description</label>
                <Editor
                  apiKey="bhujpxfq38znvz6mry8dgy5bnzbyxudgi642yoh3kd3fo1wd"
                  // onInit={getInputData}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  name="description "
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Pic1<span className="text-danger">*</span>
                  </label>
                  <input

                    type="file"
                    name="pic1"
                    className="form-control"
                    onChange={getInputFile}
                  />
                  {show ? <p className='text-danger text-capitalize my-2'>{errorMessages.pic1}</p> : ""}

                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">Pic2</label>
                  <input
                    type="file"
                    name="pic2"
                    className="form-control"
                    onChange={getInputFile}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">Pic3</label>
                  <input
                    type="file"
                    name="pic3"
                    className="form-control"
                    onChange={getInputFile}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">Pic4</label>
                  <input
                    type="file"
                    name="pic4"
                    className="form-control"
                    onChange={getInputFile}
                  />
                </div>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="ggg text-dark ms-6 mt-3 p-1 fw-bold bn "
                >
                  Update Product
                </button>
                &emsp;&emsp;&emsp;
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="bg-dark text-light me-6 mt-3 p-1  fw-bold bn "
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
