import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrand,
  updateBrand,
} from "../../../Store/ActionCreators/BrandActionCreaters";

export default function UpdateBrand() {
  let [name, setName] = useState("");
  let { _id } = useParams();
  let [message, setMessage] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let BrandStateData = useSelector((state) => state.BrandStateData);

  function getInputData(e) {
    setMessage("");
    setName(e.target.value);
  }
  async function postData(e) {
    e.preventDefault();
    if (name.length == 0) {
      setMessage("Field Name Must Required");
    }
    else if (name.length < 3 || name.length > 15) {
      setMessage(
        "Field Name Must Be Grater Then or Equal to 3 or Smaller Then or Equal to 15"
      );
    }
    else {
      //__________________________________________________________________________________________________________________________________________________________________
      // let response = await fetch("http://localhost:8000/brand", {
      //   method: "GET",                          //**is GET method ka use sirf post karta samay data ko
      //   headers: {
      //                                          //**ya check karna ka lya he ke vo phala sa exist an
      //     "content-type": "application/json", //**kar rha ho
      //   },
      // });
      // response = await response.json();
      //__________________________________________________________________________________________________________________________________________________________________

      var item = BrandStateData.find((x) => x.name === name);
      if (item) {
        setMessage("Field Already Exist");
      } else {
        dispatch(updateBrand({ _id: _id, name: name }));
        // response = await fetch("http://localhost:8000/brand/" + id, {
        //   method: "PUT",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({ name: name, id: id }),
        // });
        // response = await response.json();
        // if (response)
        navigate("/admin/brand/brand");
      }
    }
  }
  async function getAPIData() {
    dispatch(getBrand());
    if (BrandStateData.length) {
      let item = BrandStateData.find((x) => x._id === _id);
      if (item) setName(item.name);
    }
  }
  useEffect(() => {
    getAPIData();
  }, [BrandStateData.length]);
  //use effect ka intamal iss lya kra gya h kyoki input ma  muza data show be karna h
  //

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6"> Brand</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="/admin/brand/brand">Brand</a>
          </li>
          <li className="breadcrumb-item active text-white">Update Brand</li>
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
              Update Brand
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
                  placeholder="Brand Name"
                  value={name}
                  onChange={getInputData}
                />
                {message ? <p className="text-danger">{message}</p> : ""}
                <button
                  type="submit"
                  className="ggg text-dark ms-6 mt-3 p-1 fw-bold bn "
                >
                  Add Brand
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
