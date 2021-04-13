import { combineReducers } from 'redux';

import itemsReducers from '../redux/items/items-reducers';
import filterReducer from '../redux/filter/filter-reducers';

export default combineReducers({
  items: itemsReducers.items,
  filter: filterReducer,
  loading: itemsReducers.loading,
  error: itemsReducers.error,
});
