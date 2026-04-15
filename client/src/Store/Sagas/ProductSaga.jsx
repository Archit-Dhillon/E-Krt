import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_RED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_RED,
  GET_PRODUCT,
  GET_PRODUCT_RED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_RED,
} from "../Constants";
import {
  addRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/ProductService";

function* addSaga(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_PRODUCT_RED, payload: response.data });
}
function* getSaga() {
  let response = yield getRecord();
  yield put({ type: GET_PRODUCT_RED, payload: response.data });
}
function* updateSaga(action) {
  let response = yield updateRecord(action.payload);
  yield put({ type: UPDATE_PRODUCT_RED, payload: response.data });
}
function* deleteSaga(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_PRODUCT_RED, payload: action.payload });
}
///***  yield yad rakhta h ke phala jitna function chal chuka h uss sa bad chala h*** */
export default function* productSaga() {
  yield takeEvery(ADD_PRODUCT, addSaga);
  yield takeEvery(GET_PRODUCT, getSaga);
  yield takeEvery(UPDATE_PRODUCT, updateSaga);
  yield takeEvery(DELETE_PRODUCT, deleteSaga);
}
