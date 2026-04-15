import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import formValidationChecker from './ValidationCheckers/formValidationChecker'

export default function Signup() {
    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        cpassword: "",
    })
    let [errorMessages, setErrorMessage] = useState("")
    let [show, setShow] = useState(false)


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

    async function postData(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
            let item = {
                name: data.name,
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password,
                role: data.role,
                address: "",
                pin: "",
                city: "",
                state: "",
                pic: ""
            }
            let response = await fetch("/api/user", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(item)
            })
            // console.log(data)
            response = await response.json()
            if (response.status === 200)
                navigate("/login")
            else {
                setShow(true)
                setErrorMessage(response.message)
            }
        }
        else {
            setShow(true)
            setErrorMessage("Password and Confirm Password Doesn't Matched!!!!")
        }

    }
    return (
        <>
            {/* <!-- Single Page Header start --> */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Signup</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home  /</Link>
                    </li>

                    <li className="breadcrumb-item active text-white">Signup</li>
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
                                    <h3>Register</h3>
                                </div>
                                {
                                    show ? <p className='text-danger text-center p-2'>{errorMessages}</p> : ""
                                }
                                <form onSubmit={postData} >
                                    <div className="form-group first">
                                        <input type="text" name="name" onChange={getInputData} placeholder='Name' className='form-control3' />

                                    </div>

                                    <div className="form-group first">
                                        <input type="text" name="username" onChange={getInputData} placeholder='User Name' className='form-control3' />

                                    </div>

                                    <div className="form-group first">
                                        <input type="email" name="email" onChange={getInputData} placeholder='Email Address' className='form-control3' />

                                    </div>


                                    <div className="form-group first">
                                        <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' className='form-control3' />

                                    </div>


                                    <div className="form-group first">
                                        <input type="text" name="role" onChange={getInputData} placeholder='Role' className='form-control3' />

                                    </div>




                                    <div className="form-group">
                                        <input type="password" name="password" onChange={getInputData} placeholder='Password' className='form-control3' />

                                    </div>



                                    <div className="form-group last mb-3">
                                        <input type="password" name="cpassword" onChange={getInputData} placeholder='Confirm Password' className='form-control3' />


                                    </div>

                                    <div className="mb-3">
                                        <div className="btn-group w-100">
                                            <button type="submit" className='btn btn-block btn-primary  nbtn'>Register</button>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="btn-group w-100">
                                            <Link to="/login" className='btn btn-success nbtn '>Login</Link>
                                        </div>
                                    </div>





                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
        </>
    )
}
