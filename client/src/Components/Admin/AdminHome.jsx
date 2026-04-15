import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from "./Sidebar";

export default function AdminHome() {
  let [user, setUser] = useState({})
  let navigate = useNavigate()
  async function getAPIData() {
    let response = await fetch("/api/user/" + localStorage.getItem("userid"), {
      method: "get",
      headers: {
        "content-type": "application/json",
        "Authorization": localStorage.getItem("token")

      }
    })
    response = await response.json()
    if (response.status === 200) {
      setUser(response.data)
    }
    else {
      navigate("/login")

    }
  }
  useEffect(() => {
    getAPIData()
  }, [])

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">Admin</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="cointaner-fluide">
        <h5 className="text-light bg-danger text-center mt-2  p-2">
          Admin Section
        </h5>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                {
                  user.pic ?
                    < img src={user.pic} height="470px" width="100%" alt='user' /> :
                    <img src='/img/noimage.png' height="470px" width="100%" alt='user' />

                }
              </div>
              <div className="col-lg-6">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>Username</th>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>Phone no.</th>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <th>Role</th>
                      <td>{user.role}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{user.address}</td>
                    </tr>
                    <tr>
                      <th>Pin Code</th>
                      <td>{user.pin}</td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>{user.city}</td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>{user.state}</td>
                    </tr>

                    <tr>
                      <td className='up' colSpan={2}><Link style={{ color: "black" }} to="/profile/update">Update Profile</Link></td>


                    </tr>

                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
