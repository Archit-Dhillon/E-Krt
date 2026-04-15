import { ADD_BANNER1, DELETE_BANNER1, GET_BANNER1, UPDATE_BANNER1 } from "../Constants";

export function addBanner1(data) {
  return {
    type: ADD_BANNER1,
    payload: data,
  };
}
export function getBanner1() {
  return {
    type: GET_BANNER1,
  };
}
export function updateBanner1(data) {
  return {
    type: UPDATE_BANNER1,
    payload: data,
  };
}
export function deleteBanner1(data) {
  return {
    type: DELETE_BANNER1,
    payload: data,
  };
}
