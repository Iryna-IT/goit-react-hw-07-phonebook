import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.loading;
const getExistContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getContactsListToShow = createSelector(
  [getExistContacts, getFilter],
  (items, filter) => {
    if (filter === '') {
      return items;
    } else {
      return items.filter(item =>
        item.name.toUpperCase().includes(filter.toUpperCase()),
      );
    }
  },
);

export default { getLoading, getExistContacts, getContactsListToShow };
