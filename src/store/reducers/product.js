import { handleActions } from "redux-actions";
import { get_product_by_id_success } from "../actions/product";

const initState = {}

const productReducer = handleActions({
  [get_product_by_id_success]: (state, action) => action.payload
}, initState)

export default productReducer
