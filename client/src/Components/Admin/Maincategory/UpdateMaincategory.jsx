
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMaincategory,
  updateMaincategory,
} from "../../../Store/ActionCreators/MaincategoryActionCreaters";
import maincategorySaga from "../../../Store/Sagas/MaincategorySaga";

export default function UpdateMaincategory() {
  let [name, setName] = useState("");
  let { _id } = useParams();
  let [message, setMessage] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );

  function getInputData(e) {
    setMessage("");
    setName(e.target.value);
  }
  async function postData(e) {
    e.preventDefault();
    if (name.length == 0) {
      setMessage("Field Name Must Required");
    } else if (name.length < 3 || name.length > 15) {
      setMessage(
        "Field Name Must Be Grater Then or Equal to 3 or Smaller Then or Equal to 15"
      );
    } else {

      var item = MaincategoryStateData.find((x) => x.name === name);
      if (item) {
        setMessage("Field Already Exist");
      } else {
        dispatch(updateMaincategory({ _id: _id, name: name }));
        console.log(_id, name)

        navigate("/admin/maincategory/maincategory");
      }
    }
  }
  async function getAPIData() {
    dispatch(getMaincategory());
    if (MaincategoryStateData.length) {
      console.log(MaincategoryStateData)
      let item = MaincategoryStateData.find((x) => x._id == _id);
      if (item) setName(item.name);
      console.log("i am item", item)
      console.log("i am id", _id)

    }
  }
  useEffect(() => {
    getAPIData();
  }, [MaincategoryStateData.length]);
  //use effect ka intamal iss lya kra gya h kyoki input ma  muza data show be karna h
  //

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
            Update Maincategory
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
              Update Maincategory
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
                  value={name}
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
