import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Actions
const FETCH_USERS = "users/FETCH";
const FETCH_USER_BY_ID = "users/FETCH_BY_ID";
const UPDATE = "users/UPDATE";
const UPDATE_CURRENT_USER = "users/UPDATE_CURRENT_USER";
const FETCH_MOVIES = "FETCH_MOVIES";
const UPDATE_MOVIES = "UPDATE_MOVIES";

// Action Creators
export const fetchUsers = () => ({
  type: FETCH_USERS
});
export const fetchUserById = userId => ({
  type: FETCH_USER_BY_ID,
  payload: userId
});

export const onFetchMovies = searchQuery => ({
  type: FETCH_MOVIES,
  payload: searchQuery
});

export const updateUsers = users => ({
  type: UPDATE,
  payload: users
});

export const updateCurrentUser = user => ({
  type: UPDATE_CURRENT_USER,
  payload: user
});

export const updateMovies = movies => ({
  type: UPDATE_MOVIES,
  payload: movies
});

// Sagas
export function* fetchUsersAsync() {
  const response = yield call(
    fetch,
    "https://api.github.com/repos/facebook/react/contributors"
  );
  const users = yield response.json();

  yield put(updateUsers(users));
}
export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsersAsync);
}

export function* fetchUserByIdAsync(action) {
  console.log("3");
  const response = yield call(
    fetch,
    `https://api.github.com/users/${action.payload}/repos`
  );
  const user = yield response.json();

  yield put(updateCurrentUser(user));
}
export function* watchFetchUserById() {
  console.log("1");
  yield takeLatest(FETCH_USER_BY_ID, fetchUserByIdAsync);
}

export function* onFetchMoviesAsync(action) {
  console.log("M-3");
  const response = yield call(
    fetch,
    `http://localhost:4000/movies?search=${
      action.payload
    }&searchBy=title&limit=200`
  );
  const movies = yield response.json();

  yield put(updateMovies(movies));
}

export function* watchOnFetchMovies() {
  console.log("M-1");
  yield takeLatest(FETCH_MOVIES, onFetchMoviesAsync);
}

// Users Saga
export function* usersSaga() {
  yield all([watchFetchUsers(), watchFetchUserById(), watchOnFetchMovies()]);
}

// Initial state
const INITIAL_STATE = {
  loading: false,
  items: []
};

// Reducer
export const usersReduces = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_USERS:
    case FETCH_USER_BY_ID:
      console.log("2");
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIES:
      console.log("M-2");
      return {
        ...state,
        loading: true
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        loading: false,
        current: action.payload
      };
    case UPDATE_MOVIES:
      console.log(action.payload);
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};
