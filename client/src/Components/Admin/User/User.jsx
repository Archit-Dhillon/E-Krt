import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';



export default function User() {
  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone no.',
      width: 100,
      editable: true,
    },


    {
      field: 'role',
      headerName: 'Role',
      width: 100,
      editable: true,
    },


    {
      field: 'delete',
      headerName: 'Delete',

      width: 100,
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


  async function getAPIData() {

    //__________________________________________________________________________________________________________________________________________________________________
    let response = await fetch("/api/user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Authorization": localStorage.getItem("token")

      },
    });
    response = await response.json();
    //
    //we can delete this part from hear kyoke hum na iss ka lya Store banaya h
    // or ya method store m likha h "**is ke jagha aan data dispatch ke help sa
    //FUNCTION  call kr langa**"" or
    //huma data lana ka lya apna action creater ko imporgt karna padaga

    //__________________________________________________________________________________________________________________________________________________________________
    if (response)
      setData(response.data)
  }

  useEffect(() => {
    getAPIData();
  }, []); //huma useEffect ma aab dependency lagani padagi kyo ke iss sa dependency diya bina ya sirf ek bar call hoga islya dependency laga danga jitne bar state change ho ya unte bar update ho jaay

  // kyo ke huma delete karna ka bad fir sa data to call
  // karna padaga is lya get apidata naam ka function bna lya
  //or get data ko get api data m call kr dya to apna aap he phali bar
  // or fir delete hona ka bad be getAPIDAta function ke madad sa data call ho jayga

  async function deleteItem(_id) {
    if (window.confirm("Are You Sure to Delete that Item")) {

      // dispatch(deleteBrand({ id: id }));
      //__________________________________________________________________________________________________________________________________________________________________

      let response = await fetch("http://localhost:8000/api/User/" + _id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "Authorization": localStorage.getItem("token")

        },
      });
      response = await response.json();

      //***JIS TRAHA UPER KYA H SAMA ASS* */
      //__________________________________________________________________________________________________________________________________________________________________

      getAPIData();
    }
  }

  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Admin</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">User</li>
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
              User

            </h5>
            <div className="table-responsive">

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
