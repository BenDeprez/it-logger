// LOG ACTIONS
//////////////

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
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
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
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
    const data = await res.json();

    // dispatch to reducer and change state
    dispatch({
      type: ADD_LOG,
      payload: data,
    });

    // error handling
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
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
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

// SET CURRENT
//////////////

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// CLEAR CURRENT
//////////////

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// UPDATE LOG
/////////////

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    // make request
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    // dispatch to reducer and change state
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });

    // error handling
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

// SEARCH LOGS
//////////////

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    // make request
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    // dispatch to reducer and change state
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });

    // error handling
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};
