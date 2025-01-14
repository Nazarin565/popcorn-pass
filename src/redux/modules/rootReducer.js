import { combineReducers } from 'redux';

import films from './films';
import seats from './seats';

export default combineReducers({
  films,
  seats,
});
