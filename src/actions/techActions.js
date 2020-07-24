// TECH ACTIONS
///////////////

import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from './types';

// SET LOADING
//////////////

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// GET TECHS
////////////

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    // make request
    const res = await fetch('/techs');
    const data = await res.json();

    // dispatch to reducer and change state
    dispatch({
      type: GET_TECHS,
      payload: data,
    });

    // error handling
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// ADD TECH
///////////

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    // make request
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    // dispatch to reducer and change state
    dispatch({
      type: ADD_TECH,
      payload: data,
    });

    // error handling
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};

// DELETE TECH
//////////////

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    // make request
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    // dispatch to reducer and change state
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};
