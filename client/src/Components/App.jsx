import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";
import Error from "./Error";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ContactUs from "./ContactUs";
import Testimonial from "./Testimonial";
import AdminHome from "./Admin/AdminHome";
import Faq from "./Faq";
import Terms from "./Terms";
import Return from "./Return";
import Private from "./Private";
import Maincategory from "./Admin/Maincategory/Maincategory";
import CreateMaincategory from "./Admin/Maincategory/CreateMaincategory";
import UpdateMaincategory from "./Admin/Maincategory/UpdateMaincategory";

import Subcategory from "./Admin/Subcategory/Subcategory";
import CreateSubcategory from "./Admin/Subcategory/CreateSubcategory";
import UpdateSubcategory from "./Admin/Subcategory/UpdateSubcategory";

import Brand from "./Admin/Brand/Brand";
import CreateBrand from "./Admin/Brand/CreateBrand";
import UpdateBrand from "./Admin/Brand/UpdateBrand";

import Product from "./Admin/Product/Product";
import CreateProduct from "./Admin/Product/CreateProduct";
import UpdateProduct from "./Admin/Product/UpdateProduct";

import AdminTestimonial from "./Admin/Testimonial/Testimonial";
import CreateTestimonial from "./Admin/Testimonial/CreateTestimonial";
import UpdateTestimonial from "./Admin/Testimonial/UpdateTestimonial";
import Login from "./Login";
import Signup from "./Signup";
import BuyerProfile from "./BuyerProfile";
import UpdateProfile from "./UpdateProfile";
import User from "./Admin/User/User";
import Confirmation from "./Confirmation";
import AdminContactus from "./Admin/Contactus/AdminContactus";
import AdminContactusShow from "./Admin/Contactus/AdminContactusShow"
import Newsletter from "./Admin/Newsletter/Newsletter";
import AdminCheckout from "./Admin/Checkout/AdminCheckout";
import AdminCheckoutShow from "./Admin/Checkout/AdminCheckoutShow";
import ForgetPassword1 from "./ForgetPasssword1";
import ForgetPassword2 from "./ForgetPassword2";
import ForgetPassword3 from "./ForgetPassword3";
import Payment from "./Payment";




export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:_id" element={<ProductDetails />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/*" element={<Error />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/faq" element={<Faq />} />
          <Route path="/term" element={<Terms />} />
          <Route path="/return" element={<Return />} />
          <Route path="/private" element={<Private />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/update" element={<UpdateProfile />} />
          <Route path="/forget-password-1" element={<ForgetPassword1 />} />
          <Route path="/forget-password-2" element={<ForgetPassword2 />} />
          <Route path="/forget-password-3" element={<ForgetPassword3 />} />


          {
            localStorage.getItem("login") && localStorage.getItem("role") === "Buyer" ?
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/buyerprofile" element={<BuyerProfile />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/payment/:_id" element={<Payment />} />

              </> : ""
          }

          {
            localStorage.getItem("login") && localStorage.getItem("role") === "Admin" ?
              <>
                <Route path="/admin" element={<AdminHome />} />

                {/* Maincategory */}
                < Route path="/admin/maincategory/maincategory" element={<Maincategory />} />
                <Route
                  path="/admin/maincategory/createmaincategory"
                  element={<CreateMaincategory />}
                />
                <Route
                  path="/admin/maincategory/updatemaincategory/:_id"
                  element={<UpdateMaincategory />}
                />
                {/* Subcategory */}
                <Route
                  path="/admin/subcategory/subcategory"
                  element={<Subcategory />}
                />
                <Route
                  path="/admin/subcategory/createsubcategory"
                  element={<CreateSubcategory />}
                />
                <Route
                  path="/admin/subcategory/updatesubcategory/:_id"
                  element={<UpdateSubcategory />}
                />
                {/* Brand */}
                <Route path="/admin/brand/brand" element={<Brand />} />
                <Route path="/admin/brand/createbrand" element={<CreateBrand />} />
                <Route
                  path="/admin/brand/updatebrand/:_id"
                  element={<UpdateBrand />}
                />
                {/* Product */}
                <Route path="/admin/product/product" element={<Product />} />
                <Route
                  path="/admin/product/createproduct"
                  element={<CreateProduct />}
                />
                <Route
                  path="/admin/product/updateproduct/:_id"
                  element={<UpdateProduct />}
                />
                {/* Testimonial */}
                <Route path="/admin/testimonial/testimonial" element={<AdminTestimonial />} />
                <Route
                  path="/admin/testimonial/createtestimonial"
                  element={<CreateTestimonial />}
                />
                <Route
                  path="/admin/testimonial/updatetestimonial/:_id"
                  element={<UpdateTestimonial />}
                />
                {/*Admin Users */}
                <Route path="/admin/user" element={<User />} />
                {/*Admin  Contactus */}
                <Route path="/admin/contactus" element={<AdminContactus />} />
                <Route path="/admin/contactus/show/:_id" element={<AdminContactusShow />} />

                {/*Admin  Contactus */}
                <Route path="/admin/checkout" element={<AdminCheckout />} />
                <Route path="/admin/checkout/show/:_id" element={<AdminCheckoutShow />} />



                {/*Admin Newsletter */}
                <Route path="/admin/newsletter" element={<Newsletter />} />

              </> : ""
          }

        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  );
}
