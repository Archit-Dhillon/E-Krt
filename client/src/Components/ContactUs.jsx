import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addContactus } from "../Store/ActionCreators/ContactusActionCreaters"

export default function ContactUs() {
  let dispatch = useDispatch()
  let [show, setShow] = useState(false)

  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  function getInputData(e) {
    let { name, value } = e.target

    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })

  }
  function postData(e) {
    e.preventDefault()
    dispatch(addContactus({ ...data, data: new Date, status: "Active" }))
    setShow(true)
    setData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }



  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Contact</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div

                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="text-primary">Get in touch</h1>
                  <p className="mb-4">
                    Just Contact Us.
                  </p>
                </div>
              </div>

              <div className="col-lg-7">
                {
                  show ?
                    <p className="text-danger">Thanks to Contact Us. Our Team Will Contact You Soon</p> : ""
                }
                <form action="" onSubmit={postData} className="">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Your Name"
                      onChange={getInputData}
                      value={data.name}
                      name="name"
                    />

                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Enter Your Email"
                      onChange={getInputData}
                      value={data.email}
                      name="email"
                    />

                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Subject"
                      onChange={getInputData}
                      value={data.subject}
                      name="subject"
                    />

                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-100 form-control border-0 py-3 mb-4"
                      placeholder="Phone"
                      onChange={getInputData}
                      value={data.phone}
                      name="phone"
                    />

                  </div>
                  <div className="mb-3">
                    <textarea
                      className="w-100 form-control border-0 mb-4"
                      rows="5"
                      cols="10"
                      placeholder="Your Message"
                      onChange={getInputData}
                      value={data.message}
                      name="message"
                    ></textarea>

                  </div>
                  <button
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Address</h4>
                    <p className="mb-2">Giugliano in Campania, Metropolitan City of Naples, Italy</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <a href="mailto:arr521792@gmail.com">
                    <div className="d-flex">
                      <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                      <h4>Mail Us</h4>
                    </div>
                    <div>

                      <p className="mb-2">Ekrt@.gmail.inc</p>
                    </div>
                  </a>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <a href="telto:(+012) 3456 7890">
                    <div className="d-flex">
                      <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                      <h4>Telephone</h4>
                    </div>
                    <div>

                      <p className="mb-2">(+012) 3456 7890</p>
                    </div>
                  </a>
                </div>

              </div>
              <div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe width="100%" height="500" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Via%20Spasaro%20Terra%20D'Attico,%2080014%20Giugliano%20in%20Campania%20NA,%20Italy+(EKrt)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* <!-- Contact End --></div> */}
    </>
  );
}
