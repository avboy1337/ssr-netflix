import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: [],
  filteredMovies: [],
  modal: false,
  isMovieOpened: false,
  movieOpened: null
};

const fetchMovies = (state, action) => {
  return {
    ...state,
    movies: action.movies,
    filteredMovies: action.movies,
    error: false
  };
};

const fetchMoviesFailed = (state, action) => {
  return { ...state, modal: "errorCRUD" };
};

const deleteMovie = (state, action) => {
  const newMovies = action.movies.filter(
    el => (el.id !== action.movie ? el : null)
  );
  const newFilteredMovies = action.filteredMovies.filter(
    el => (el.id !== action.movie ? el : null)
  );

  let movieOpenedValue = action.movieOpened;
  let isMovieOpenedValue = action.isMovieOpened;
  if (action.movieOpened && action.movie === action.movieOpened.id) {
    movieOpenedValue = null;
    isMovieOpenedValue = false;
  }

  return {
    ...state,
    movies: newMovies,
    filteredMovies: newFilteredMovies,
    modal: "deleteMovieSuccess",
    isMovieOpened: isMovieOpenedValue,
    movieOpened: movieOpenedValue
  };
};

const deleteMovieFailed = (state, action) => {
  return { ...state, modal: "errorCRUD" };
};

const addMovie = (state, action) => {
  return { ...state, modal: "addMovieSuccess" };
};

const addMovieFailed = (state, action) => {
  return { ...state, modal: "errorCRUD" };
};

const editMovie = (state, action) => {
  const newMovies = action.movies.map((el, index) => {
    if (el.id !== action.editedMovie.id) {
      return el;
    } else {
      return { ...action.movies[index], ...action.editedMovie };
    }
  });

  const newFilteredMovies = action.filteredMovies.map((el, index) => {
    if (el.id !== action.editedMovie.id) {
      return el;
    } else {
      return { ...action.filteredMovies[index], ...action.editedMovie };
    }
  });

  let movieOpenedValue = action.movieOpened;
  if (action.movieOpened && action.editedMovie.id === action.movieOpened.id) {
    movieOpenedValue = { ...action.movieOpened, ...action.editedMovie };
  }

  return {
    ...state,
    movies: newMovies,
    filteredMovies: newFilteredMovies,
    modal: "editMovieSuccess",
    movieOpened: movieOpenedValue
  };
};

const editMovieFailed = (state, action) => {
  return { ...state, modal: "errorCRUD" };
};

const setFilteredMovies = (state, action) => {
  return { ...state, filteredMovies: action.filteredMovies };
};

const setSortedMovies = (state, action) => {
  return { ...state, filteredMovies: action.sortedMovies };
};

const setModal = (state, action) => {
  return { ...state, modal: action.modalType };
};

const setMovieOpened = (state, action) => {
  return {
    ...state,
    isMovieOpened: action.isMovieOpened,
    movieOpened: action.movieOpened
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return fetchMovies(state, action);
    case actionTypes.FETCH_MOVIES_FAILED:
      return fetchMoviesFailed(state, action);
    case actionTypes.DELETE_MOVIE_SUCCESS:
      return deleteMovie(state, action);
    case actionTypes.DELETE_MOVIE_FAILED:
      return deleteMovieFailed(state, action);
    case actionTypes.ADD_MOVIE_SUCCESS:
      return addMovie(state, action);
    case actionTypes.ADD_MOVIE_FAILED:
      return addMovieFailed(state, action);
    case actionTypes.EDIT_MOVIE_SUCCESS:
      return editMovie(state, action);
    case actionTypes.EDIT_MOVIE_FAILED:
      return editMovieFailed(state, action);
    case actionTypes.SET_FILTERED_MOVIES:
      return setFilteredMovies(state, action);
    case actionTypes.SET_SORTED_MOVIES:
      return setSortedMovies(state, action);
    case actionTypes.SET_MODAL:
      return setModal(state, action);
    case actionTypes.SET_MOVIE_OPENED:
      return setMovieOpened(state, action);
    default:
      return state;
  }
};

export default reducer;
