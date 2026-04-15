import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="list-group mt-2">
        <Link
          to="/admin"
          className="list-group-item p-2 m-6 bg-danger list-group-item-action  fw-bold"
          aria-current="true"
        >
          {" "}
          Home
          <i className="fa fa-home pl-5 float-end"></i>
        </Link>
        <Link to="/admin/user" className="list-group-item list-group-item-action">
          <i className="fa fa-user float-end" />
          User
        </Link>
        <Link
          to="/admin/maincategory/maincategory"
          className="list-group-item list-group-item-action"
        >
          <i className="fa fa-list float-end" />
          Maincategory
        </Link>
        <Link
          to="/admin/subcategory/subcategory"
          className="list-group-item list-group-item-action"
        >
          <i className="fa fa-list float-end" />
          Subcategory
        </Link>
        <Link
          to="/admin/brand/brand"
          className="list-group-item list-group-item-action"
        >
          <i className="fa fa-list float-end" />
          Brand
        </Link>
        <Link
          to="/admin/product/product"
          className="list-group-item list-group-item-action"
        >
          <i className="fa fa-square float-end" />
          Product
        </Link>
        <Link to="/admin/testimonial/testimonial" className="list-group-item list-group-item-action">
          <i className="fa fa-shopping-cart float-end" />
          Testimonial
        </Link>
        <Link to="/admin/checkout" className="list-group-item list-group-item-action">
          <i className="fa fa-check-square float-end" />
          Checkout
        </Link>

        <Link to="/admin/contactus" className="list-group-item list-group-item-action">
          <i className="fa fa-phone float-end" />
          Contact
        </Link>
        <Link to="/admin/newsletter" className="list-group-item list-group-item-action">
          <i className="fa fa-envelope float-end" />
          Newletter
        </Link>
      </div>
    </>
  );
}
