import { combineReducers } from "redux";
import { createStore } from "redux";

import { NumberManage } from "./NumberManage";


const reducer = combineReducers({
  NumberManage
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
