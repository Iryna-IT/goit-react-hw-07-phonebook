import { combineReducers } from 'redux';

import itemsReducer from '../redux/items/items-reducers';
import filterReducer from '../redux/filter/filter-reducers';

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
