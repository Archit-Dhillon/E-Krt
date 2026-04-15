export async function addRecord(payload) {
  let response = await fetch("/api/subcategory", {
    // we use proxy at the place of http://localhost:8000/ it is use in ""package.json"" file

    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": localStorage.getItem("token")

    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
export async function getRecord() {
  let response = await fetch("/api/subcategory", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
}
export async function updateRecord(payload) {
  let response = await fetch("/api/subcategory/" + payload._id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "Authorization": localStorage.getItem("token")

    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}
export async function deleteRecord(payload) {
  let response = await fetch("/api/subcategory/" + payload._id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": localStorage.getItem("token")

    },
  });
  return response.json();
}
