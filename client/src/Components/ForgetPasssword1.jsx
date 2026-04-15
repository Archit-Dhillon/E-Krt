import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgetPassword1() {
    let [data, setData] = useState({
        username: "",
    })
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
        e.preventDefault();
        let response = await fetch("/api/user/forget-password-1", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ username: data.username })
        })
        response = await response.json()
        if (response.status === 200) {
            localStorage.setItem("password-reset-username", data.username)
            navigate("/forget-password-2")
        }

        else
            setShow(true)
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

                    <li className="breadcrumb-item active text-white">Login</li>
                </ol>
            </div>
            {/* <!-- Single Page Header End --> */}
            <div className="img js-fullheight h" style={{ backgroundImage: "url('img/bg.jpg')" }}>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section"></h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4">
                                <div className="login-wrap p-0">
                                    <Link to="/signup">
                                        <button className="mb-4 text-center btn-nn form-control1">Have an account?</button>
                                    </Link>
                                    {
                                        show ? <p className='text-danger'>Invalid Username</p> : ""
                                    }
                                    <form onSubmit={postData} className="signin-form">
                                        <div className="form-group1">
                                            <input type="text" className="form-control1" placeholder="Username" name="username"
                                                onChange={getInputData} />
                                        </div>

                                        <div className="form-group1">
                                            <button type="submit" className="form-control1 btn btn-new btn-primary submit px-3">Send OTP</button>

                                        </div>
                                        <div className="form-group1">
                                            <Link to="/login">
                                                <button className="rrrr form-control1 btn btn-new btn-primary submit px-3">Login</button>
                                            </Link>
                                        </div>
                                        <div className="form-group1 d-md-flex">


                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
