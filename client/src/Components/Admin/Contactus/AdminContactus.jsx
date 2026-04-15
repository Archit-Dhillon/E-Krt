import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactus,
  getContactus,
} from "../../../Store/ActionCreators/ContactusActionCreaters";

export default function AdminContactus() {
  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'email', headerName: 'Email', width: 220 },
    { field: 'phone', headerName: 'Phone', width: 100 },
    { field: 'active', headerName: 'Status', width: 100, renderCell: (({ row }) => row.active ? "Active" : "Inactive") },
    { field: 'subject', headerName: 'Subject', width: 150 },
    { field: 'message', headerName: 'Message', width: 250 },
    { field: 'show', headerName: 'Show', sortable: false, renderCell: ({ row }) => <Link to={`/admin/contactus/show/${row._id}`}><i className='fa fa-eye text-primary'></i></Link> },

    {
      field: 'delete',
      headerName: 'Delete',
      width: 110,
      sortable: false,
      renderCell: ({ row }) => {
        if (!row.active) {
          return <button
            className="btn"
            onClick={() => deleteItem(row._id)}
          >
            <i className="fa fa-trash text-danger"></i>
          </button>
        }
      }
    },

  ];

  let [data, setData] = useState([]);
  let dispatch = useDispatch();
  let ContactusStateData = useSelector((state) => state.ContactusStateData);

  async function getAPIData() {
    dispatch(getContactus());
    if (ContactusStateData.length) setData(ContactusStateData);
    console.log(ContactusStateData)
  }

  useEffect(() => {
    getAPIData();
  }, [ContactusStateData.length]);

  async function deleteItem(_id) {
    if (window.confirm("Are You Sure to Delete that Item")) {

      dispatch(deleteContactus({ _id: _id }));
      getAPIData();
    }
  }

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contactus</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">Contactus</li>
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
              Contactus
              <Link to="/admin/Contactus/createContactus">
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
                          <Link to={`/admin/Contactus/updateContactus/${item.id}`}>
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
      </div>
    </>
  );
}
