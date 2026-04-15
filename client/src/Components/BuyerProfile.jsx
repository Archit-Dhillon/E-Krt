
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteWishlist, getWishlist } from "../Store/ActionCreators/WishlistActionCreaters"
import { getCheckout } from "../Store/ActionCreators/CheckoutActionCreaters"
import ProfileComponent from './ProfileComponent'

export default function BuyerProfile() {
    let [user, setUser] = useState({})
    let [order, setOrder] = useState([])
    let [wishlist, setWishlist] = useState([])
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let WishlistStateData = useSelector((state) => state.WishlistStateData)
    let CheckoutStateData = useSelector((state) => state.CheckoutStateData)
    function deleteItem(_id) {
        if (window.confirm("Are Your Sure to Remove that Item from Wishlist", _id)) {
            dispatch(deleteWishlist({ _id: _id }))
            getAPIData()
        }
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

        if (response.status !== 200) {
            navigate("/login")
        }
        else {
            setUser(response.data)


        }
        dispatch(getWishlist())
        if (WishlistStateData.length) {
            setWishlist(WishlistStateData)


        }
        dispatch(getCheckout())
        if (CheckoutStateData.length)
            setOrder(CheckoutStateData)

    }

    useEffect(() => {
        getAPIData()

    }, [WishlistStateData.length, CheckoutStateData.length])
    return (
        <>
            {/* <!-- Single Page Header start -->  */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Buyer Profile</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home  /</Link>
                    </li>

                    <li className="breadcrumb-item active text-white">Buyer</li>
                </ol>
            </div>
            {/* <!-- Single Page Header End --> */}

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-6">
                        {
                            user.pic ?

                                <img src={`/${user.pic}`} height="470px" width="100%" /> :
                                <img src='/img/noimage.png' height="470px" width="100%" />

                        }
                    </div>

                    <div className="col-md-6">
                        <ProfileComponent heading='Buyer Profile' user={user} />
                    </div>
                    {/* //___________________________________________________________________________________________________ */}


                    <div className='text-center m-5'>
                        <h3 className='text-warning'>Wishlist Section</h3>
                    </div>
                    <div className="container-fluid py-5">

                        {
                            wishlist.length ?
                                <div className="container py-5">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Products</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Brand</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Color</th>
                                                    <th scope="col">Size</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    wishlist.map((item, index) => {
                                                        return <tr key={index}>
                                                            <th scope="row" style={{ width: "100px" }}>
                                                                <div className="d-flex align-items-center">
                                                                    <img
                                                                        src={item.pic}
                                                                        className="img-fluid "
                                                                        style={{ width: "120px", height: "120px" }}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <p className="mb-0 mt-4">{item.name}</p>
                                                            </td>
                                                            <td>
                                                                <p className="mb-0 mt-4">{item.brand}</p>
                                                            </td>
                                                            <td>
                                                                <p className="mb-0 mt-4">{item.price}</p>
                                                            </td>
                                                            <td>
                                                                <p className="mb-0 mt-4">{item.color}</p>


                                                            </td>
                                                            <td>
                                                                <p className="mb-0 mt-4">{item.size}</p>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    onClick={() => deleteItem(item._id)} className="btn btn-md rounded-circle bg-light border mt-4">
                                                                    <i className="fa fa-times text-danger"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    })
                                                }




                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                                :
                                <div className="text-center">
                                    <p>No Items in Cart</p>
                                    <Link to="/shop" className="btn btn-primary " >Shop Now</Link>
                                </div>
                        }



                    </div>

                </div>
            </div>
            <h4 className=" text-warning jj">Order items</h4>

            {
                order.length ?
                    order.map((item, index) => {
                        return <div key={index} className="container">

                            <div className="col-md">
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Order Status</th>
                                            <th>Payment Mode</th>
                                            <th>Payment Status</th>
                                            <th>Subtotal</th>
                                            <th>Shipping</th>
                                            <th>Total</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{item._id}</td>
                                            <td>{item.orderstatus}</td>
                                            <td>{item.paymentmode}</td>
                                            <td>{item.paymentstatus}</td>
                                            <td>&#8377;{item.subtotal}</td>
                                            <td>&#8377;{item.shipping}</td>
                                            <td>&#8377;{item.total}</td>
                                            <td>{(new Date(item.date)).toLocaleString()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {
                                item.products.map((item, index) => {
                                    return <div key={index} className="col-md my-3 iii d-flex">

                                        <div className="col-md-4 ">
                                            {
                                                user.pic ?
                                                    <img src={item.pic} height="285px" width="100%" alt="" /> :
                                                    <img src='/img/noimage.png' height="285px" width="100%" alt="" />
                                            }
                                        </div>

                                        <div className="col-md-8 ">
                                            <table className='table table-bordered'>
                                                <tbody>
                                                    <tr>
                                                        <th>Name</th>
                                                        <td>{item.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Brand</th>
                                                        <td>{item.brand}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Color</th>
                                                        <td>{item.color}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Size</th>
                                                        <td>{item.size}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Price</th>
                                                        <td>&#8377;{item.price}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Qty</th>
                                                        <td>&#8377;{item.qty}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total</th>
                                                        <td>&#8377;{item.total}</td>
                                                    </tr>

                                                </tbody>
                                            </table></div>
                                    </div>

                                })
                            }

                        </div>

                    })

                    : <div className='text-center'>
                        <p>No order History Found</p>
                    </div>
            }






        </>
    )
}

