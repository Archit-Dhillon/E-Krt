import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';


import { useDispatch, useSelector } from "react-redux";
import {
  deleteMaincategory,
  getMaincategory,
} from "../../../Store/ActionCreators/MaincategoryActionCreaters";

export default function Maincategory() {



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
      headerName: '',
      width: 150,
      sortable: false,
      renderCell: ({ row }) => <Link
        to={`/admin/maincategory/updatemaincategory/${row._id}`}
      >
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
  let MaincategoryStateData = useSelector(
    (state) => state.MaincategoryStateData
  );
  //now we have to fetch data from store. for fetch data we use useSelector hook
  //we get data if we have data BUT there is no data in state it is empty
  async function getAPIData() {
    dispatch(getMaincategory());
    //__________________________________________________________________________________________________________________________________________________________________
    // let response = await fetch("http://localhost:8000/maincategory", {
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
    if (MaincategoryStateData.length) setData(MaincategoryStateData);
  }

  useEffect(() => {
    getAPIData();
  }, [MaincategoryStateData.length]); //huma useEffect ma aab dependency lagani padagi kyo ke iss sa dependency diya bina ya sirf ek bar call hoga islya dependency laga danga jitne bar state change ho ya unte bar update ho jaay

  // kyo ke huma delete karna ka bad fir sa data to call
  // karna padaga is lya get apidata naam ka function bna lya
  //or get data ko get api data m call kr dya to apna aap he phali bar
  // or fir delete hona ka bad be getAPIDAta function ke madad sa data call ho jayga

  async function deleteItem(_id) {
    if (window.confirm("Are You Sure to Delete that Item")) {
      dispatch(deleteMaincategory({ _id: _id }));
      //__________________________________________________________________________________________________________________________________________________________________

      // let response = await fetch("http://localhost:8000/maincategory/" + id, {
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
        <h1 className="text-center text-white display-6">Maincategory</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">Maincategory</li>
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
              Maincategory
              <Link to="/admin/maincategory/createmaincategory">
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
                          <Link
                            to={`/admin/maincategory/updatemaincategory/${item.id}`}
                          >
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
