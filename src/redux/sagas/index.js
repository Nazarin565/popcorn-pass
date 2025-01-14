import { put, takeEvery } from 'redux-saga/effects';

import { GET_FILMS_FROM_SERVER, updateFilmsList } from '../modules/films';
import { GET_SEATS_FROM_SERVER, updateSeats } from '../modules/seats';

export function* getFilmsSaga() {
  try {
    const payload = yield fetch('https://demo3637811.mockable.io/showtimes').then((response) => response.json());

    yield put(updateFilmsList(payload));
  } catch (error) {
    console.error(error);
  }
}

export function* getSeatsSaga() {
  try {
    const payload = yield fetch('https://demo3637811.mockable.io/seats').then((response) => response.json());
    yield put(updateSeats(payload));
  } catch (error) {
    console.error(error);
  }
}

export function* watchClickSaga() {
  yield takeEvery(GET_FILMS_FROM_SERVER, getFilmsSaga);
  yield takeEvery(GET_SEATS_FROM_SERVER, getSeatsSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
