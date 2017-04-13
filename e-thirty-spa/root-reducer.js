import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as toastr } from 'react-redux-toastr';
import userReducer from './reducers/user-reducer';
import entitiesReducer from './reducers/entities-reducer';

const rootReducer = combineReducers({
  routing,
  toastr,
  user: userReducer,
  entities: entitiesReducer,
});

export default rootReducer;
