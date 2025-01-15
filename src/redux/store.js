import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects';

import films, { GET_FILMS_FROM_SERVER, getFilmsSaga } from './ducks/films';
import seats, { GET_SEATS_FROM_SERVER, getSeatsSaga } from './ducks/seats';

const sagaMiddleware = createSagaMiddleware();

export function* sagas() {
  yield takeEvery(GET_FILMS_FROM_SERVER, getFilmsSaga);
  yield takeEvery(GET_SEATS_FROM_SERVER, getSeatsSaga);
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  films,
  seats,
})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

