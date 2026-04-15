import { ADD_CONTACTUS, DELETE_CONTACTUS, GET_CONTACTUS, UPDATE_CONTACTUS } from "../Constants";

export function addContactus(data) {
  return {
    type: ADD_CONTACTUS,
    payload: data,
  };
}
export function getContactus() {
  return {
    type: GET_CONTACTUS,
  };
}
export function updateContactus(data) {
  return {
    type: UPDATE_CONTACTUS,
    payload: data,
  };
}
export function deleteContactus(data) {
  return {
    type: DELETE_CONTACTUS,
    payload: data,
  };
}
