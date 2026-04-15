import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../Store/ActionCreators/TestimonialActionCreaters"


export default function Testimonial(test) {
  let [data, setData] = useState([])
  let dispatch = useDispatch()
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData)

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


  function getAPIData() {
    dispatch(getTestimonial())
    if (TestimonialStateData.length)
      setData(TestimonialStateData)
  }

  useEffect(() => {
    getAPIData()
  }, [TestimonialStateData.length])

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      {test.breadcrumb == false ? "" : <div className="container-fluid page-header py-">
        <h1 className="text-center text-white display-6">Testimonial</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">Testimonial</li>
        </ol>
      </div>}
      {/* <!-- Single Page Header End --> */}

      {/* <!-- Start Testimonial Slider --> */}
      <div className="testimonial-section">
        <div className="container">


          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">

                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                  <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                </div>

                <OwlCarousel className='owl-theme' {...options}>


                  {
                    data.map((item, index) => {
                      return <div key={index} className="item">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 mx-auto">

                            <div className="testimonial-block text-center">
                              <blockquote className="mb-5">
                                <p>&ldquo;{item.message}&rdquo;</p>
                              </blockquote>

                              <div className="author-info">
                                <div className="author-pic">
                                  <img src={item.pic} alt="Maria Jones" className="timg " />
                                </div>
                                <h3 className="font-weight-bold">{item.name}</h3>
                                <span className="position d-block mb-3">{item.profession}</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    })

                  }


                </OwlCarousel>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Testimonial Slider --> */}




    </>
  );
}
