import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_BANNER1,
  ADD_BANNER1_RED,
  DELETE_BANNER1,
  DELETE_BANNER1_RED,
  GET_BANNER1,
  GET_BANNER1_RED,
  UPDATE_BANNER1,
  UPDATE_BANNER1_RED,
} from "../Constants";
import {
  addRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/Banner1Service";

function* addSaga(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_BANNER1_RED, payload: response.data });

}
function* getSaga() {
  let response = yield getRecord();
  yield put({ type: GET_BANNER1_RED, payload: response.data });
}
function* updateSaga(action) {
  let response = yield updateRecord(action.payload);
  yield put({ type: UPDATE_BANNER1_RED, payload: response.data });

}
function* deleteSaga(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_BANNER1_RED, payload: action.payload });
}
///***  yield yad rakhta h ke phala jitna function chal chuka h uss sa bad chala h*** */
export default function* banner1Saga() {
  yield takeEvery(ADD_BANNER1, addSaga);
  yield takeEvery(GET_BANNER1, getSaga);
  yield takeEvery(UPDATE_BANNER1, updateSaga);
  yield takeEvery(DELETE_BANNER1, deleteSaga);
}
