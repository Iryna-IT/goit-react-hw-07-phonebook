import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('filter/filterContacts', filter => ({
  payload: filter,
}));
