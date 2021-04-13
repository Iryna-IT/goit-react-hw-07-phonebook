import { createReducer } from '@reduxjs/toolkit';
import { filterContacts as filterAction } from './filter-actions';

const filter = createReducer('', {
  [filterAction]: (_, { payload }) => payload,
});

export default filter;
