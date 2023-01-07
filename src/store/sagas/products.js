import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { get_products, get_products_success } from '../actions/products'
import { API } from '../../config'

function* handleGetProducts (action) {
  const res = yield axios.get(`${API}/products`, {
    params: action.payload
  })
  yield put(get_products_success({
    sortBy: action.payload.sortBy,
    products: res.data
  }))
}

export default function* productsSaga () {
  yield takeEvery(get_products, handleGetProducts)
}
