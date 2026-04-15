export async function addRecord(payload) {
  let response = await fetch("/api/testimonial", {

    // we use proxy at the place of http://localhost:8000/ it is use in ""package.json"" file

    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token")

    },
    body: payload
  });
  return await response.json();

}
export async function getRecord() {
  let response = await fetch("/api/testimonial", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
}


export async function updateRecord(payload) {

  let response = await fetch("/api/testimonial/" + payload.get("_id"), {
    method: "PUT",
    headers: {
      "Authorization": localStorage.getItem("token")

    },
    body: payload
  });
  return await response.json();
}


export async function deleteRecord(payload) {
  let response = await fetch("/api/testimonial/" + payload._id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": localStorage.getItem("token")

    },
  });
  return response.json();
}
