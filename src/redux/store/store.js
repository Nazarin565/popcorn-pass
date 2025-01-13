import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import films, { GET_FILMS, getFilmsSaga } from './slices/filmsSlice';
import seats, { GET_SEATS, getSeatsSaga } from './slices/seatsSlice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_FILMS, getFilmsSaga);
  yield takeEvery(GET_SEATS, getSeatsSaga);
}

export const store = configureStore({
  reducer: {
    films,
    seats,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(sagas);
