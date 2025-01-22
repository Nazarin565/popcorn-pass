import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { takeEvery } from 'redux-saga/effects';

import films, { GET_FILMS_FROM_SERVER, getFilmsSaga, InitialFilmsState } from './ducks/films';
import seats, { GET_SEATS_FROM_SERVER, getSeatsSaga, InitialSeatsState } from './ducks/seats';

const sagaMiddleware = createSagaMiddleware();

export function* sagas() {
  yield takeEvery(GET_FILMS_FROM_SERVER, getFilmsSaga);
  yield takeEvery(GET_SEATS_FROM_SERVER, getSeatsSaga);
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

interface GlobalState {
  films: InitialFilmsState;
  seats: InitialSeatsState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  films,
  seats,
});

export const store = createStore<GlobalState, any>(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
