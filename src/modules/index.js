import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { usersReduces, usersSaga } from "./users";
import moviesReducer from "./reducers/movies";
import filterAndSortReducer from "./reducers/filterAndSort";

function* rootSaga() {
  yield all([usersSaga()]);
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  filterAndSort: filterAndSortReducer
});

export { rootReducer, rootSaga };
