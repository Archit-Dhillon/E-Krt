import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_CONTACTUS,
  ADD_CONTACTUS_RED,
  DELETE_CONTACTUS,
  DELETE_CONTACTUS_RED,
  GET_CONTACTUS,
  GET_CONTACTUS_RED,
  UPDATE_CONTACTUS,
  UPDATE_CONTACTUS_RED,
} from "../Constants";
import {
  addRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/ContactusService";

function* addSaga(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_CONTACTUS_RED, payload: response.data });
}
function* getSaga() {
  let response = yield getRecord();
  yield put({ type: GET_CONTACTUS_RED, payload: response.data });
}
function* updateSaga(action) {
  yield updateRecord(action.payload);
  yield put({ type: UPDATE_CONTACTUS_RED, payload: action.payload });
}
function* deleteSaga(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_CONTACTUS_RED, payload: action.payload });
}
///***  yield yad rakhta h ke phala jitna function chal chuka h uss sa bad chala h*** */
export default function* contactusSaga() {
  yield takeEvery(ADD_CONTACTUS, addSaga);
  yield takeEvery(GET_CONTACTUS, getSaga);
  yield takeEvery(UPDATE_CONTACTUS, updateSaga);
  yield takeEvery(DELETE_CONTACTUS, deleteSaga);
}
