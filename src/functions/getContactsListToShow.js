const getContactsListToShow = (items, filter) => {
  if (filter === '') {
    return items;
  } else {
    return items.filter(item =>
      item.name.toUpperCase().includes(filter.toUpperCase()),
    );
  }
};

export default getContactsListToShow;
