import * as actionTypes from "./actionTypes";
import axiosInstance from "../../axiosInstance";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export const fetchMovies = searchQuery => {
  return async dispatch => {
    try {
      const result = await axiosInstance.get(
        `/movies?search=${searchQuery}&searchBy=title&limit=200`
      );
      await dispatch(fetchMoviesSuccess(result.data.data));
    } catch (error) {
      dispatch(fetchMoviesFailed());
    }
  };
};

export const fetchMoviesSuccess = result => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    movies: result
  };
};

export const fetchMoviesFailed = () => {
  return {
    type: actionTypes.FETCH_MOVIES_FAILED
  };
};

export const deleteMovie = (
  movie,
  movies,
  filteredMovies,
  isMovieOpened,
  movieOpened
) => {
  return async dispatch => {
    try {
      await axiosInstance.delete(`/movies/${movie}`);
      await dispatch(
        deleteMovieSuccess(
          movie,
          movies,
          filteredMovies,
          isMovieOpened,
          movieOpened
        )
      );
    } catch (error) {
      dispatch(deleteMovieFailed());
    }
  };
};

export const deleteMovieSuccess = (
  movie,
  movies,
  filteredMovies,
  isMovieOpened,
  movieOpened
) => {
  return {
    type: actionTypes.DELETE_MOVIE_SUCCESS,
    movie,
    movies,
    filteredMovies,
    isMovieOpened,
    movieOpened
  };
};

export const deleteMovieFailed = () => {
  return {
    type: actionTypes.DELETE_MOVIE_FAILED
  };
};

export const addMovie = movie => {
  return async dispatch => {
    try {
      await axiosInstance.post(`/movies`, { ...movie });
      await dispatch(addMovieSuccess());
    } catch (error) {
      dispatch(addMovieFailed());
    }
  };
};

export const addMovieSuccess = () => {
  return {
    type: actionTypes.ADD_MOVIE_SUCCESS
  };
};

export const addMovieFailed = () => {
  return {
    type: actionTypes.ADD_MOVIE_FAILED
  };
};

export const editMovie = (editedMovie, movies, filteredMovies, movieOpened) => {
  return async dispatch => {
    try {
      await axiosInstance.put(`/movies`, { ...editedMovie });
      await dispatch(
        editMovieSuccess(editedMovie, movies, filteredMovies, movieOpened)
      );
    } catch (error) {
      dispatch(editMovieFailed());
    }
  };
};

export const editMovieSuccess = (
  editedMovie,
  movies,
  filteredMovies,
  movieOpened
) => {
  return {
    type: actionTypes.EDIT_MOVIE_SUCCESS,
    editedMovie,
    movies,
    filteredMovies,
    movieOpened
  };
};

export const editMovieFailed = () => {
  return {
    type: actionTypes.EDIT_MOVIE_FAILED
  };
};

export const setFilteredMovies = filteredMovies => {
  return {
    type: actionTypes.SET_FILTERED_MOVIES,
    filteredMovies
  };
};

export const setSortedMovies = sortedMovies => {
  return {
    type: actionTypes.SET_SORTED_MOVIES,
    sortedMovies
  };
};

export const setModal = modalType => {
  return {
    type: actionTypes.SET_MODAL,
    modalType
  };
};

export const setMovieOpened = (isMovieOpened, movieOpened) => {
  return {
    type: actionTypes.SET_MOVIE_OPENED,
    isMovieOpened,
    movieOpened
  };
};
