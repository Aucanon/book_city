import { applyMiddleware, createStore } from "redux"
import createRootReducer from "./reducers"
import { createBrowserHistory } from 'history'
import { routerMiddleware } from "connected-react-router"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./sagas/rootSaga"
import { composeWithDevTools } from "redux-devtools-extension"

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store