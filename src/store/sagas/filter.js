import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { filter_products, filter_products_success } from '../actions/filter'
import { API } from '../../config'

function* handleFilterProducts (action) {
  const res = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(filter_products_success({skip: action.payload.skip, ...res.data}))
}

export default function* filterSaga () {
  yield takeEvery(filter_products, handleFilterProducts)
}
