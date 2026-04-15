import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addSubcategory,
  getSubcategory,
} from "../../../Store/ActionCreators/SubcategoryActionCreaters";

export default function CreateSubcategory() {
  let name = useRef("");
  let [message, setMessage] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  function getInputData(e) {
    setMessage("");
    name.current = e.target.value;
  }
  async function postData(e) {
    e.preventDefault();
    if (name.current == 0) {
      setMessage("Field Name Must Required");
    } else if (name.current.length < 3) {
      setMessage("Field Name Must Be Grater Then or Equal to 3");
    } else if (name.current.length > 15) {
      setMessage("Field Name Must Be Grater Then or Equal to 15");
    } else {
      //_________________________________________________________________________________________________________________________________________________________________________

      // let response = await fetch("http://localhost:8000/subcategory", {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });
      // response = await response.json();
      //_________________________________________________________________________________________________________________________________________________________________________

      var item = SubcategoryStateData.find(
        (x) => x.name === name.current
      );
      if (item) {
        setMessage("Field Already Exist");
      } else {
        dispatch(addSubcategory({ name: name.current }));
        //_________________________________________________________________________________________________________________________________________________________________________
        // response = await fetch("http://localhost:8000/subcategory", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({ name: name.current }),
        // });
        // response = await response.json();
        //_________________________________________________________________________________________________________________________________________________________________________

        navigate("/admin/subcategory/subcategory");
      }
    }
  }
  async function getAPIDAta() {
    dispatch(getSubcategory());
  }
  useEffect(() => {
    getAPIDAta();
  }, [SubcategoryStateData.length]);

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6"> Subcategory</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item ">
            <a href="/admin/subcategory/subcategory">Subcategory</a>
          </li>
          <li className="breadcrumb-item active text-white">
            Create Subcategory
          </li>
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
              Create Subcategory
            </h5>
            <form action="" onSubmit={postData}>
              <div className="mb-3">
                <label htmlFor="">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Subcategory Name"
                  onChange={getInputData}
                />
                {message ? <p className="text-danger">{message}</p> : ""}
                <button
                  type="submit"
                  className="ggg text-dark ms-6 mt-3 p-1 fw-bold bn "
                >
                  Add SubCategory
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
