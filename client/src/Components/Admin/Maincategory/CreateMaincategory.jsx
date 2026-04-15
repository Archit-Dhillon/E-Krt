import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMaincategory,
  getMaincategory,
} from "../../../Store/ActionCreators/MaincategoryActionCreaters";

export default function CreateMaincategory() {
  let name = useRef("");
  let [message, setMessage] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
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

      // let response = await fetch("http://localhost:8000/maincategory", {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });
      // response = await response.json();
      //_________________________________________________________________________________________________________________________________________________________________________

      var item = MaincategoryStateData.find(
        (x) => x.name === name.current
      );
      if (item) {
        setMessage("Field Already Exist");
      } else {
        dispatch(addMaincategory({ name: name.current }));
        //_________________________________________________________________________________________________________________________________________________________________________
        // response = await fetch("http://localhost:8000/maincategory", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({ name: name.current }),
        // });

        // response = await response.json();
        //_________________________________________________________________________________________________________________________________________________________________________

        navigate("/admin/maincategory/maincategory");
      }
    }
  }
  async function getAPIDAta() {
    dispatch(getMaincategory());
  }
  useEffect(() => {
    getAPIDAta();
  }, [MaincategoryStateData.length]);

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">
          Maincategory
        </h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item ">
            <a href="/admin/maincategory/maincategory">Maincategory</a>
          </li>
          <li className="breadcrumb-item active text-white">
            Create Maincategory
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
              Create Maincategory
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
                  placeholder="Maincategory Name"
                  onChange={getInputData}
                />
                {message ? <p className="text-danger">{message}</p> : ""}
                <button
                  type="submit"
                  className="ggg text-dark ms-6 mt-3 p-1 fw-bold bn "
                >
                  Add MainCategory
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
