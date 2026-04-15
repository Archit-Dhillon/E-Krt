import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import formValidationChecker from "../../ValidationCheckers/formValidationChecker"

import {
  addTestimonial,
  getTestimonial,
} from "../../../Store/ActionCreators/TestimonialActionCreaters";

export default function CreateTestimonial() {
  let [data, setData] = useState({
    name: "",
    profession: "",
    star: "",
    pic: "",
    message: "",
  });

  let [errorMessages, setErrorMessage] = useState({
    name: "Name Field Must Required",
    profession: "Profession Field Must Required",
    star: "Star Field Must Required",
    pic: "Pic Field Must Required",
    message: "Message Field Must Required",

  })
  let [show, setShow] = useState(false)

  let navigate = useNavigate();
  let dispatch = useDispatch();


  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);
  function getInputData(e) {
    var { name, value } = e.target
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: formValidationChecker(e)
      }
    })
    setShow(false)
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  function getInputFiles(e) {
    var { name, files } = e.target
    if (name === "pic") {
      setErrorMessage((old) => {
        return {
          ...old,
          [name]: ""
        }
      })
    }
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



      var formData = new FormData()
      formData.append("name", data.name)
      formData.append("profession", data.profession)
      formData.append("star", data.star)
      formData.append("pic", data.pic)
      formData.append("message", data.message)

      dispatch(addTestimonial(formData))
      navigate("/admin/testimonial/testimonial");
    }
    else
      setShow(true)
  }
  async function getAPIDAta() {
    dispatch(getTestimonial());
  }
  useEffect(() => {
    getAPIDAta();
  }, [TestimonialStateData.length]);

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6"> Testimonial</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item ">
            <a href="/admin/testimonial/testimonial">Testimonial</a>
          </li>
          <li className="breadcrumb-item active text-white">Create Testimonial</li>
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
              Create Testimonial
            </h5>
            <form action="" onSubmit={postData}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={getInputData}
                  />
                  {show ? <p className="text-danger">{errorMessages.name}</p> : ""}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Profession<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="profession"
                    className="form-control"
                    placeholder="Profession"
                    onChange={getInputData}
                  />
                  {show ? <p className="text-danger">{errorMessages.profession}</p> : ""}
                </div>
              </div>



              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Star<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="star"
                    className="form-control"
                    placeholder="Star"
                    onChange={getInputData}
                  />
                  {show ? <p className="text-danger">{errorMessages.star}</p> : ""}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Pic<span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    name="pic"
                    className="form-control"
                    placeholder="Pic"
                    onChange={getInputFiles}
                  />
                  {show ? <p className="text-danger">{errorMessages.pic}</p> : ""}
                </div>
              </div>






              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Message<span className="text-danger">*</span>
                  </label>
                  <textarea className="form-control" onChange={getInputData} name="message" placeholder="Message" id="" cols="10" rows="10" width="100%"></textarea>

                  {show ? <p className="text-danger">{errorMessages.message}</p> : ""}
                </div>

              </div>





              <div className="mb-3">

                <button
                  type="submit"
                  className="ggg text-dark ms-6 mt-3 p-1 fw-bold bn "
                >
                  Add Testimonial
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
