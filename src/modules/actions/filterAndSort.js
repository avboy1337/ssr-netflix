import * as actionTypes from "./actionTypes";

export const setActiveFilter = activeFilter => {
  return {
    type: actionTypes.SET_ACTIVE_FILTER,
    activeFilter
  };
};

export const setSortType = sortType => {
  return {
    type: actionTypes.SET_SORT_TYPE,
    sortType
  };
};
