import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

import { useDispatch, useSelector } from "react-redux";
import {
  deleteCheckout,
  getCheckout,
} from "../../../Store/ActionCreators/CheckoutActionCreaters";

export default function AdminCheckout() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'orderstatus', headerName: 'Order Status', width: 120 },
    { field: 'paymentmode', headerName: 'Payment Mode', width: 220 },
    { field: 'paymentstsatus', headerName: 'Payment Status', width: 100 },
    { field: 'subtotal', headerName: 'Subtotal', width: 100, renderCell: (({ row }) => <p>&#8377;{row.subtotal}</p>) },
    { field: 'shipping', headerName: 'Shipping', width: 150, renderCEll: (({ row }) => <p>&#8377;{row.shipping}</p>) },
    { field: 'total', headerName: 'Total', width: 250, renderCEll: (({ row }) => <p>&#8377;{row.total}</p>) },
    { field: 'date', headerName: 'Date', width: 250, renderCEll: (({ row }) => <p>{new Date().toLocaleDateString}</p>) },

    { field: 'show', headerName: 'Show', sortable: false, renderCell: ({ row }) => <Link to={`/admin/checkout/show/${row.id}`}><i className='fa fa-eye text-primary'></i></Link> },
  ];

  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  let CheckoutStateData = useSelector((state) => state.CheckoutStateData);

  async function getAPIData() {
    dispatch(getCheckout());
    if (CheckoutStateData.length) setData(CheckoutStateData);
  }

  useEffect(() => {
    getAPIData();
  }, [CheckoutStateData.length]);

  async function deleteItem(id) {
    if (window.confirm("Are You Sure to Delete that Item")) {

      dispatch(deleteCheckout({ id: id }));
      getAPIData();
    }
  }

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
      <div className="cointaner-fluide">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-9 ">
            <h5 className="text-dark  rad text-center mt-2  p-2">
              Checkout
              <Link to="/admin/Checkout/createCheckout">
                <i className="fa fa-plus text-light float-end"></i>
              </Link>
            </h5>
            <div className="table-responsive">
              {/* <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
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
                        <td>
                          <Link to={`/admin/Checkout/updateCheckout/${item.id}`}>
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
      </div>
    </>
  );
}
