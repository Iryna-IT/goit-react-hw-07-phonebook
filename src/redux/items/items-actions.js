import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('items/addContact', newContact => ({
  payload: newContact,
}));

const deleteContact = createAction('items/deleteContact', contactId => ({
  payload: contactId,
}));

export default {
  addContact,
  deleteContact,
};
