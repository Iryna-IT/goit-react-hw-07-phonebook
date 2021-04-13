import { createReducer } from '@reduxjs/toolkit';
import itemsActions from './items-actions';

const items = createReducer([], {
  [itemsActions.addContact]: (state, { payload }) => [payload, ...state],
  [itemsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default items;
