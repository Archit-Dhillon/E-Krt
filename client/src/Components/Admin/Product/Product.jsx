import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
} from "../../../Store/ActionCreators/ProductActionCreaters";

export default function Product() {
  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 250, editable: true, },
    { field: 'maincategory', headerName: 'Mainategory', width: 100, editable: true, },

    { field: 'subcategory', headerName: 'Subcategory', width: 150, editable: true, },

    { field: 'brand', headerName: 'Brand', width: 150, editable: true, },

    { field: 'color', headerName: 'Color', width: 100, editable: true, },

    { field: 'size', headerName: 'Size', width: 100, editable: true, },

    { field: 'baseprice', headerName: 'Baseprice', width: 100, editable: true, renderCell: ({ row }) => <del className="text-danger">&#8377;{row.baseprice}</del> },
    { field: 'discount', headerName: 'Discount', width: 100, editable: true, renderCell: ({ row }) => <sup className="text-success">&#8377;{row.discount}% off</sup> },

    { field: 'finalprice', headerName: 'Finalprice', width: 100, editable: true, renderCell: ({ row }) => <p className="text-warning">&#8377;{row.finalprice}</p> },

    { field: 'stock', headerName: 'Stock', width: 150, editable: true, },

    {
      field: 'pic1', headerName: 'Picture', width: 80, editable: true, renderCell: ({ row }) => <a href={`/${row.pic1}`} target="_blank" rel="nonreference">
        <img src={`/${row.pic1}`} height="80px" width="80px" alt="" />
      </a>
    },

    {
      field: 'pic2', headerName: 'Picture', width: 80, editable: true, renderCell: ({ row }) => <a href={`/${row.pic2}`} target="_blank" rel="nonreference">
        <img src={`/${row.pic2}`} height="80px" width="80px" alt="" />
      </a>
    },
    {
      field: 'pic3', headerName: 'Picture', width: 80, editable: true, renderCell: ({ row }) => <a href={`/${row.pic3}`} target="_blank" rel="nonreference">
        <img src={`/${row.pic3}`} height="80px" width="80px" alt="" />
      </a>
    },
    {
      field: 'pic4', headerName: 'Picture', width: 80, editable: true, renderCell: ({ row }) => <a href={`/${row.pic4}`} target="_blank" rel="nonreference">
        <img src={`/${row.pic4}`} height="80px" width="80px" alt="" />
      </a>
    },


    {
      field: 'edit',
      headerName: '',
      width: 150,
      sortable: false,
      renderCell: ({ row }) => <Link to={`/admin/product/updateproduct/${row._id}`}>
        <i className="fa fa-edit text-success"></i>
      </Link>
    },
    {
      field: 'delete',
      headerName: '',

      width: 110,
      sortable: false,
      renderCell: ({ row }) => <button
        className="btn"
        onClick={() => deleteItem(row._id)}
      >
        <i className="fa fa-trash text-danger"></i>
      </button>
    },

  ];

  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  let ProductStateData = useSelector((state) => state.ProductStateData);
  //now we have to fetch data from store. for fetch data we use useSelector hook
  //we get data if we have data BUT there is no data in state it is empty
  async function getAPIData() {
    dispatch(getProduct());
    //__________________________________________________________________________________________________________________________________________________________________
    // let response = await fetch("http://localhost:8000/product", {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
    // response = await response.json();
    //
    //we can delete this part from hear kyoke hum na iss ka lya Store banaya h
    // or ya method store m likha h "**is ke jagha aan data dispatch ke help sa
    //FUNCTION  call kr langa**"" or
    //huma data lana ka lya apna action creater ko imporgt karna padaga
    //__________________________________________________________________________________________________________________________________________________________________
    if (ProductStateData.length) setData(ProductStateData);
  }

  useEffect(() => {
    getAPIData();
  }, [ProductStateData.length]); //huma useEffect ma aab dependency lagani padagi kyo ke iss sa dependency diya bina ya sirf ek bar call hoga islya dependency laga danga jitne bar state change ho ya unte bar update ho jaay

  // kyo ke huma delete karna ka bad fir sa data to call
  // karna padaga is lya get apidata naam ka function bna lya
  //or get data ko get api data m call kr dya to apna aap he phali bar
  // or fir delete hona ka bad be getAPIDAta function ke madad sa data call ho jayga

  async function deleteItem(_id) {
    if (window.confirm("Are You Sure to Delete that Item")) {

      dispatch(deleteProduct({ _id: _id }));
      //__________________________________________________________________________________________________________________________________________________________________

      // let response = await fetch("http://localhost:8000/product/" + id, {
      //   method: "DELETE",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      // });
      // response.json();

      //***JIS TRAHA UPER KYA H SAMA ASS* */
      //__________________________________________________________________________________________________________________________________________________________________

      getAPIData();
    }
  }

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Product</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">Product</li>
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
              Product
              <Link to="/admin/product/createproduct">
                <i className="fa fa-plus text-light float-end"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              {/* <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Category(MC/SC/BR)</th>
                    <th>Price/F-Price/ Discount</th>
                    <th>Color/Size</th>
                    <th>Stock</th>
                    <th>Picture</th>
                    <th>Picture</th>
                    <th>Picture</th>
                    <th>Picture</th>

                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.maincategory}/ {item.subcategory}/ {item.brand}</td>
                        <td className="text-warning"><del className="text-danger">&#8377;{item.baseprice}</del> &emsp;&#8377;{item.finalprice}<br /><sup className="text-success">{item.discount}% off</sup></td>
                        <td>{item.color}/{item.size}</td>
                        <td>{item.stock}</td>
                        <td>
                          <a href={item.pic1}`} target="_blank" rel="nonreference">
                            <img src={item.pic1}`} height="80px" width="80px" alt="" />
                          </a>
                        </td>
                        <td>
                          <a href={`/products-img/${item.pic1}`} target="_blank" rel="nonreference">
                            <img src={`/products-img/${item.pic1}`} height="80px" width="80px" alt="" />
                          </a>
                        </td>
                        <td>
                          <a href={`/products-img/${item.pic1}`} target="_blank" rel="nonreference">
                            <img src={`/products-img/${item.pic1}`} height="80px" width="80px" alt="" />
                          </a>
                        </td>
                        <td>
                          <a href={`/products-img/${item.pic1}`} target="_blank" rel="nonreference">
                            <img src={`/products-img/${item.pic1}`} height="80px" width="80px" alt="" />
                          </a>
                        </td>

                        <td>
                          <Link to={`/admin/product/updateproduct/${item.id}`}>
                            <i className="fa fa-edit text-success"></i>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => deleteItem(item.id)}
                          >
                            <i className="fa fa-trash text-danger"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}
              <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row._id}

                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection={false}
                disableRowSelectionOnClick
              />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
