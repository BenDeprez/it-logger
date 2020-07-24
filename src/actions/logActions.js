// LOG ACTIONS
//////////////

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from './types';

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

// SET LOADING
//////////////

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

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

// ADD LOGS
///////////

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    // make request
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json;

    // dispatch to reducer and change state
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

// DELETE LOGS
//////////////
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    // make request
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    // dispatch to reducer and change state
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};
