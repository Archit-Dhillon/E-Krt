import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

import { useDispatch, useSelector } from "react-redux";
import {
  deleteSubcategory,
  getSubcategory,
} from "../../../Store/ActionCreators/SubcategoryActionCreaters";

export default function Subcategory() {
  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      sortable: false,
      renderCell: ({ row }) => <Link
        to={`/admin/subcategory/updatesubcategory/${row._id}`}
      >
        <i className="fa fa-edit text-success"></i>
      </Link>
    },
    {
      field: 'delete',
      headerName: 'Delete',

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
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData);
  function deleteItem(_id) {
    if (window.confirm("Are You Sure to Delete that Item")) {

      dispatch(deleteSubcategory({ _id: _id }));
      getAPIData();
    }
  }

  function getAPIData() {
    dispatch(getSubcategory());
    if (SubcategoryStateData.length) {
      setData(SubcategoryStateData)
    }
  }

  useEffect(() => {
    getAPIData();
  }, [SubcategoryStateData.length]); //huma useEffect ma aab dependency lagani padagi kyo ke iss sa dependency diya bina ya sirf ek bar call hoga islya dependency laga danga jitne bar state change ho ya unte bar update ho jaay




  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Subcategory</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">Subcategory</li>
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
              Subcategory
              <Link to="/admin/subcategory/createsubcategory">
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
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>
                          <Link
                            to={`/admin/subcategory/updatesubcategory/${item._id}`}
                          >
                            <i className="fa fa-edit text-success"></i>
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => deleteItem(item._id)}
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
