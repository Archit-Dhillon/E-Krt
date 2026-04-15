import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import formValidationChecker from './ValidationCheckers/formValidationChecker'

export default function UpdateProfile() {
    let [data, setData] = useState({
        name: "",
        phone: "",
        address: "",
        pin: "",
        city: "",
        state: "",
        pic: ""
    })

    let navigate = useNavigate()


    function getInputData(e) {
        let { name, value } = e.target

        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getInputFile(e) {
        let { name, files } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: files[0]
            }
        })
    }


    async function postData(e) {
        e.preventDefault();
        var formData = new FormData()
        formData.append("name", data.name)
        formData.append("phone", data.phone)
        formData.append("address", data.address)
        formData.append("pin", data.pin)
        formData.append("city", data.city)
        formData.append("state", data.state)
        formData.append("pic", data.pic)

        let response = await fetch("/api/user/" + localStorage.getItem("userid"), {
            method: "put",
            headers: {
                "Authorization": localStorage.getItem("token"),
            },
            body: formData
        }
        )
        response = await response.json()
        if (data.role === "Admin")
            navigate("/admin")
        else
            navigate("/buyerprofile")
    }



    async function getAPIData() {
        let response = await fetch("/api/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json",
                "Authorization": localStorage.getItem("token")

            }
        })
        response = await response.json()
        if (response.status = 200) {
            setData(response.data)
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
                <h1 className="text-center text-white display-6">Profile</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home  /</Link>
                    </li>

                    <li className="breadcrumb-item active text-white">Profile</li>
                </ol>
            </div>
            {/* <!-- Single Page Header End --> */}
            <div className="d-lg-flex half">
                <div className="bg order-1 order-md-2" style={{ backgroundImage: "url('img/bg_1.jpg')" }}></div>
                <div className="contents order-2 order-md-1">

                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7">
                                <div className="mb-4">
                                    <h3>Update Your Profile</h3>
                                </div>

                                <form onSubmit={postData} >
                                    <div className="form-group first">
                                        <input type="text" name="name" onChange={getInputData} placeholder='Name' className='form-control3' value={data.name ?? ""} />

                                    </div>


                                    <div className="form-group first">
                                        <input type="email" name="email" onChange={getInputData} placeholder='Email Address' className='form-control3' value={data.email ?? ""} />

                                    </div>


                                    <div className="form-group first">
                                        <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' className='form-control3' value={data.phone ?? ""} />

                                    </div>


                                    <div className="form-group first">
                                        <input type="text" name="role" onChange={getInputData} placeholder='Role' className='form-control3' value={data.role ?? ""} />

                                    </div>
                                    <div className="form-group first">
                                        <input type="text" name="address" onChange={getInputData} placeholder='Address' className='form-control3' value={data.address ?? ""} />

                                    </div>
                                    <div className="form-group first">
                                        <input type="text" name="pin" onChange={getInputData} placeholder='Pin Code' className='form-control3' value={data.pin ?? ""} />

                                    </div><div className="form-group first">
                                        <input type="text" name="city" onChange={getInputData} placeholder='City' className='form-control3' value={data.city ?? ""} />

                                    </div><div className="form-group first">
                                        <input type="text" name="state" onChange={getInputData} placeholder='State' className='form-control3' value={data.state ?? ""} />

                                    </div>




                                    <div className="form-group">
                                        <input type="file" name='pic' onChange={getInputFile} className='form-control3' />

                                    </div>



                                    <div className="mb-3">
                                        <div className="btn-group w-100">
                                            <button type="submit" className='btn btn-block btn-primary  nbtn'>Update</button>
                                        </div>
                                    </div>






                                </form>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /> */}
            {/* <br /><br /><br /><br /><br /><br /> */}
        </>
    )
}
