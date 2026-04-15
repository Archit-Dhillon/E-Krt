export async function addRecord(payload) {
  let response = await fetch("/api/product", {
    // we use proxy at the place of http://localhost:8000/ it is use in ""package.json"" file

    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token")

    },
    body: payload
  });
  return await response.json();
  //__________________________________________________________________________
  //*****Connect With Real Server****** */
  // export async function addRecord(payload) { 
  //   let response = await fetch("/api/product", {
  //     // we use proxy at the place of http://localhost:8000/ it is use in ""package.json"" file

  //     method: "POST",
  //     headers: {
  //       
  //     },
  //     body:payload
  //   });
  //   return await response.json();

  //__________________________________________________________________________

}
export async function getRecord() {
  let response = await fetch("/api/product", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
}


export async function updateRecord(payload) {
  let response = await fetch("/api/product/" + payload.get("_id"), {
    method: "PUT",
    headers: {
      "Authorization": localStorage.getItem("token")

    },
    body: payload
  });
  return await response.json();
}

//__________________________________________________________________________
//*****Connect With Real Server****** */


//  export async function updateRecord(payload) {
//   let response = await fetch("/api/product/" + payload.id, {
//     method: "PUT",
//     headers: {
//     
//     },
//     body: payload
//   });
//   return await response.json();
// }

//__________________________________________________________________________

export async function deleteRecord(payload) {
  let response = await fetch("/api/product/" + payload._id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": localStorage.getItem("token")

    },
  });
  return response.json();
}
