// See for mo details: https://github.com/erikras/ducks-modular-redux

import { createReducer, createAction } from "@reduxjs/toolkit";

// Actions
export const loadWidgets = createAction("components/ExampleComponent/LOAD");
export const createWidget = createAction("components/ExampleComponent/CREATE");
export const updateWidget = createAction("components/ExampleComponent/UPDATE");
export const removeWidget = createAction("components/ExampleComponent/REMOVE");

const initialSate = {};

// Reducer
const reducer = createReducer(initialSate, {
  [loadWidgets]: (state, action) => {}, //eslint-disable-line
  [createWidget]: (state, action) => {}, //eslint-disable-line
});

export default reducer;

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget() {
  //   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
}
