import { takeEvery, put } from 'redux-saga/effects'
import { get_product_by_id, get_product_by_id_success } from '../actions/product'
import { API } from '../../config'
import axios from 'axios'


function* handleProductById (action) {
  const res = yield axios.get(`${API}/product/${action.payload.productId}`)
  yield put(get_product_by_id_success(res.data))
}

export default function* productSaga () {
  yield takeEvery(get_product_by_id, handleProductById)
}
