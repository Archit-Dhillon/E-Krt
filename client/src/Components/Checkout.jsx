import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../Store/ActionCreators/CartActionCreaters"
import { addCheckout } from "../Store/ActionCreators/CheckoutActionCreaters"

export default function Checkout() {
  let [user, setUser] = useState({})
  let [cart, setCart] = useState([])
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [subtotal, setSubtotal] = useState(0)
  let [shipping, setShipping] = useState(0)
  let [total, setTotal] = useState(0)
  let [mode, setMode] = useState("COD")
  let CartStateData = useSelector((state) => state.CartStateData)

  function placeOrder() {
    var item = {
      userid: localStorage.getItem("userid"),
      orderstatus: "Order is Placed",
      paymentstatus: "Pending",
      paymentmode: mode,
      subtotal: subtotal,
      shipping: shipping,
      total: total,
      date: new Date(),
      products: cart
    }
    dispatch(addCheckout(item))
    for (let item of cart) {
      dispatch(deleteCart({ _id: item._id }))
    }

    if (mode === "COD") {
      navigate("/confirmation")
    } else
      navigate("/payment/-1")

  }


  async function getAPIData() {
    let response = await fetch("/api/user/" + localStorage.getItem("userid"), {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": localStorage.getItem("token")

      }
    })
    response = await response.json()
    if (response) {
      setUser(response.data)
    }
    else {
      navigate("/login")

    }
    dispatch(getCart())
    if (CartStateData.length) {
      let carts = CartStateData.filter((x) => x.userid === localStorage.getItem("userid"))
      setCart(carts)
      let subtotal = 0
      let shipping = 0
      let total = 0

      for (let item of carts) {
        subtotal = subtotal + item.total
      }
      if (subtotal > 0 && subtotal < 1000)
        shipping = 150

      total = subtotal + shipping
      setSubtotal(subtotal)
      setShipping(shipping)
      setTotal(total)

    }
  }
  useEffect(() => {
    getAPIData()
  }, [CartStateData.length])
  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Checkout</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">Checkout</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}

      {/* <!-- Checkout Page Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <ProfileComponent heading='Buyer Profile' user={user} />


              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <h4 className="bg-danger text-light jj">Cart items</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>


                      {cart.map((item, index) => {
                        console.log(item.name)
                        return <tr key={index}>
                          <th scope="row">
                            <div className="d-flex align-items-center mt-2">
                              <img
                                src={`/${item.pic}`}
                                className="img-fluid rounded-circle"
                                style={{ width: "90px", height: "90px" }}
                                alt=""
                              />
                            </div>
                          </th>
                          <td className="py-5">{item.name}</td>
                          <td className="py-5">&#8377;{item.price}</td>
                          <td className="py-5">{item.qty}</td>
                          <td className="py-5">&#8377;{item.total}</td>
                        </tr>
                      })

                      }

                    </tbody>
                  </table>
                </div>

                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">

                      <h2 className="form-check-label" htmlFor="Payments-1">
                        Check Payments :  <span className="text-warning"> {subtotal}</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">

                      <h2 className="form-check-label" htmlFor="Payments-1">
                        Shipping :  <span className="text-warning"> {shipping}</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">

                      <h2 className="form-check-label" htmlFor="Payments-1">
                        Total :  <span className="text-danger"> {total}</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3 d-flex flex-row">

                      <h2 className="form-check-label ww" htmlFor="Payments-1">
                        Payment Mode :
                      </h2>
                      <select name="mode" onChange={(e) => setMode(e.target.value)} className="form-select" id="">
                        <option value="COD">Cash on Delivery</option>
                        <option value="Net Banking">Net Banking/Card/UPI</option>
                      </select>
                    </div>
                  </div>
                </div>


                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button
                    type="button"
                    onClick={placeOrder}
                    className="btn border-secondary py-2 px-3 text-uppercase w-100 text-primary"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Checkout Page End --> */}
    </>
  );
}
