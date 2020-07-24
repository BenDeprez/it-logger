// LOG ACTIONS
//////////////

import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// for clarity (r)
/* 
export const getLogs = () => {
  return async (dispatch) => {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  };
}; 
*/

// GET LOGS
///////////

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    // make request
    const res = await fetch('/logs');
    const data = await res.json();

    // dispatch to reducer and change state
    dispatch({
      type: GET_LOGS,
      payload: data,
    });

    // error handling
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// SET LOADING
//////////////

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
