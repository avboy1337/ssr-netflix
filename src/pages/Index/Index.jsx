import React, { useState, useEffect, useCallback } from "react";
// import { connect } from "react-redux";
// import * as actions from "../../store/actions";

// import Search from "../Search/Search";
// import ResultsFilter from "../../components/ResultsFilter/ResultsFilter";
// import ResultsSort from "../../components/ResultsSort/ResultsSort";
// import ResultsCount from "../../components/ResultsCount/ResultsCount";
// import Movies from "../../components/Movies/Movies";
// import Modal from "../../components/UI/Modal/Modal";
// import MovieDetails from "../../components/MovieDetails/MovieDetails";
// import NoMovie from "../../components/NoMovie/NoMovie";
// import AddMovie from "../../components/AddMovie/AddMovie";
// import EditMovie from "../../components/EditMovie/EditMovie";
// import DeleteMovie from "../../components/DeleteMovie/DeleteMovie";
// import Message from "../../components/Message/Message";
// import axiosInstance from "../../axiosInstance";
import { useParams, useLocation, withRouter } from "react-router-dom";

import styles from "./Index.css";

const Index = () => {
  const [moviesCounter, setMoviesCounter] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState();
  const [isDotsClicked, setIsDotsClicked] = useState(false);
  /*
  useEffect(
    () => {
      setMoviesCounter(filteredMovies.length);
    },
    [filteredMovies]
  );

  useEffect(
    () => {
      onSortSelected(sortMovies(filteredMovies));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [sortType]
  );

  useEffect(
    () => {
      onSortSelected(sortMovies(movies));
      handleFilterOnClick(activeFilter);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [movies]
  );

  useEffect(
    () => {
      if (isMovieOpened) {
        history.push(`${location.pathname}?movie=${movieOpened?.id}`);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [movieOpened]
  );
  */

  // const { searchQuery } = useParams();

  // const useQuery = () => new URLSearchParams(useLocation().search);
  // const query = useQuery();
  // const genre = query.get("genre");
  // const sortBy = query.get("sortBy");
  // const movie = query.get("movie");

  /*
  useEffect(() => {
    if (movie) {
        handleMovieOpen(parseInt(movie));
    }
    if (sortBy === 'asc') {
        onSortTypeChanged('release-date-asc');
    } else if (sortBy === 'desc') {
        onSortTypeChanged('release-date-desc');
    }
    if (genre) {
        handleFilterOnClick(genre.charAt(0).toUpperCase() + genre.slice(1));
    }
}, []);
*/

  /* 
const sortMovies = (movies) => {
  let sortedMovies = [...movies].sort(
      (movieOne, movieTwo) =>
          (new Date(movieOne.release_date)) - (new Date(movieTwo.release_date))
  );
  if (sortType === 'release-date-desc') {
      sortedMovies = sortedMovies.reverse();
  }
  return sortedMovies;
};
*/

  /* 
const handleFilterOnClick = (filterToUse) => {
  onFilterChanged(filterToUse);

  if (filterToUse === 'All') {
      onFilterSelected(sortMovies(movies));
  } else {
      const newMoviesList = movies.filter((el) => {
          const genresArray = Object.keys(el.genres).map((key) => el.genres[key]);
          return genresArray.includes(filterToUse) ? el : null;
      });
      onFilterSelected(sortMovies(newMoviesList));
  }
};
*/

  /* 
const handleSortOnClick = useCallback((currentDirection) => {
  if (currentDirection === 'release-date-desc') {
      history.push(`${location.pathname}?sortBy=asc`);
      onSortTypeChanged('release-date-asc');
  } else {
      history.push(`${location.pathname}?sortBy=desc`);
      onSortTypeChanged('release-date-desc');
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
*/

  /*
const handleModalClose = () => {
  onSetModal(false);
  setIsDotsClicked(false);
};
*/

  /* 
const handleModalOpen = (actionType, movieId?) => {
  if (movieId) {
      const selectedMovie = filteredMovies.find((el: { id }) => el.id === movieId);
      setSelectedMovie(selectedMovie);
  }
  onSetModal(actionType);
  // eslint-disable-next-line react-hooks/exhaustive-deps
};
*/

  /* 
const handleDotsClick = (movieId) => {
  setIsDotsClicked(movieId.toString());
};
*/

  /* 
const handleMovieOpen = async (movieId) => {
  let selectedMovie;
  try {
      const result = await axiosInstance.get(`/movies/${movieId}`);
      selectedMovie = result.data;
      onMovieOpened(true, selectedMovie);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
      console.log(error);
  }
};
*/

  /* 
const handleDeleteMovie = (e) => {
  onMovieDeleted(selectedMovie.id, movies, filteredMovies, isMovieOpened, movieOpened);
};
*/

  /* 
let modalChildren = null;
switch (modal) {
  case 'addMovie':
      modalChildren = <AddMovie onClick={handleModalClose} />;
      break;
  case 'editMovie':
      modalChildren = <EditMovie selectedMovie={selectedMovie} onClick={handleModalClose} />;
      break;
  case 'deleteMovie':
      modalChildren = <DeleteMovie closeOnClick={handleModalClose} buttonOnClick={handleDeleteMovie} />;
      break;
  case 'deleteMovieSuccess':
      modalChildren = (
          <Message
              closeOnClick={handleModalClose}
              icon="✓"
              title="Congratulations!"
              message="The movie has been deleted successfully"
          />
      );
      break;
  case 'addMovieSuccess':
      modalChildren = (
          <Message
              closeOnClick={handleModalClose}
              icon="✓"
              title="Congratulations!"
              message="The movie has been added to database successfully"
          />
      );
      break;
  case 'editMovieSuccess':
      modalChildren = (
          <Message
              closeOnClick={handleModalClose}
              icon="✓"
              title="Congratulations!"
              message="The movie has been edited successfully"
          />
      );
      break;
  case 'errorCRUD':
      modalChildren = (
          <Message
              closeOnClick={handleModalClose}
              icon="✕"
              title="Something went wrong!"
              message="Please try again later!"
          />
      );
      break;
}
*/

  /*
let availableMovies;
if (filteredMovies.length === 0) {
  availableMovies = <NoMovie />;
} else {
  availableMovies = (
      <>
          <ResultsCount number={moviesCounter} />
          <Movies
              movies={filteredMovies}
              buttonOnClick={(actionType, id) => handleModalOpen(actionType, id)}
              closeOnClick={() => setIsDotsClicked(!isDotsClicked)}
              dotsOnClick={(movieId) => handleDotsClick(movieId)}
              movieOnClick={(movieId) => handleMovieOpen(movieId)}
              isDotsClicked={isDotsClicked}
          />
      </>
  );
}
*/
  return (
    <React.Fragment>
      <h2 className={styles.title}>Home Page</h2>
      {/* isMovieOpened ? (
        <MovieDetails data={movieOpened} onClick={() => onMovieOpened(false)} />
    ) : (
        <Search
            onClick={(actionType) => handleModalOpen(actionType)}
            searchQuery={searchQuery}
            history={history}
        />
    )}
    <div className={styles.indexWrapper}>
        <div className={styles.resultModifiers}>
            <ResultsFilter
                onClick={(filterToUse) => handleFilterOnClick(filterToUse)}
                activeFilter={activeFilter}
            />
            <ResultsSort
                styleType={sortType}
                onClick={(currentDirection) => handleSortOnClick(currentDirection)}
            />
        </div>
        {availableMovies}
    </div>
    {modal ? <Modal onClick={handleModalClose}>{modalChildren}</Modal> : null */}
    </React.Fragment>
  );
};

export default Index;
