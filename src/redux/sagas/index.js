import { put, takeEvery } from 'redux-saga/effects';

import {
  GET_FILMS_FROM_SERVER,
  updateFilmsListError,
  updateFilmsListRequest,
  updateFilmsListSuccess
} from '../modules/films';
import { 
  GET_SEATS_FROM_SERVER,
  updateSeatsError, 
  updateSeatsRequest, 
  updateSeatsSuccess 
} from '../modules/seats';

export function* getFilmsSaga() {
  try {
    yield put(updateFilmsListRequest());
    const payload = yield fetch('https://demo3637811.mockable.io/showtimes').then((response) => response.json());
    yield put(updateFilmsListSuccess(payload));
  } catch (error) {
    yield put(updateFilmsListError(error));
  }
}

export function* getSeatsSaga() {
  try {
    yield put(updateSeatsRequest());
    const payload = yield fetch('https://demo3637811.mockable.io/seats').then((response) => response.json());
    yield put(updateSeatsSuccess(payload));
  } catch (error) {
    yield put(updateSeatsError(error));
  }
}

export function* watchClickSaga() {
  yield takeEvery(GET_FILMS_FROM_SERVER, getFilmsSaga);
  yield takeEvery(GET_SEATS_FROM_SERVER, getSeatsSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
