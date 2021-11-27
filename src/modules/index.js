import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { usersReduces, usersSaga } from "./users";
import moviesReducer from "./reducers/movies";
import filterAndSortReducer from "./reducers/filterAndSort";

function* rootSaga() {
  yield all([usersSaga()]);
}

const rootReducer = combineReducers({
  users: usersReduces
});

export { rootReducer, rootSaga };
