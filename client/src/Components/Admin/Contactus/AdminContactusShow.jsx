import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactus,
  getContactus,
  updateContactus,
} from "../../../Store/ActionCreators/ContactusActionCreaters";

export default function AdminContactus() {


  let [data, setData] = useState([]);
  let { _id } = useParams()
  let dispatch = useDispatch();
  let navigate = useNavigate()
  let ContactusStateData = useSelector((state) => state.ContactusStateData);
  async function goback(_id) {

    navigate("/admin/contactus")

  }
  function updateItem() {
    dispatch(updateContactus({ ...data, active: false }))
    setData((old) => {
      return {
        ...old,
        'active': false
      }
    })
  }

  async function getAPIData() {
    dispatch(getContactus());
    if (ContactusStateData.length) setData(ContactusStateData.find((x) => x._id === _id));
  }

  useEffect(() => {
    getAPIData();
  }, [ContactusStateData.length]);


  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact Us</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">Contact Us</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="cointaner-fluide">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-9 ">
            <h5 className="text-dark  rad text-center mt-2  p-2">
              Contact Us

            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{data._id}</td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <td>{data.subject}</td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <td>{data.message}</td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <td>{new Date().toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th>ID</th>
                    <td>{data.active ? "Active" : "Inactive"}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      {data.active ?
                        <button className="btn btn-primary text-dark w-100" onClick={updateItem}>Update</button> :
                        <button className="btn btn-danger texr-dark w-100" onClick={goback}>Contact</button>
                      }</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
