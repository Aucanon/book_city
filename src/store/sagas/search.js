import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { search_products, search_products_success } from "../actions/search";
import { API } from "../../config";

function* handleSearchProducts (action) {
  const res = yield axios.get(`${API}/products/search`, {
    params: action.payload
  })
  yield put(search_products_success({results: res.data}))
}

export default function* searchSaga () {
  yield takeEvery(search_products, handleSearchProducts)
}
