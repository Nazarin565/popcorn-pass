import { createAction, createSlice } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';

const initialState = {
  filmsList: [],
  currentFilm: null,
};

export function* getFilmsSaga() {
  try {
    const payload = yield fetch('https://demo3637811.mockable.io/showtimes').then((response) => response.json());

    yield put(updateFilmsList(payload));
  } catch (error) {
    console.error(error);
  }
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    updateFilmsList: (state, action = []) => {
      state.filmsList = action.payload;
    },
    setCurrentFilm: (state, action = null) => {
      state.currentFilm = action.payload;
    },
  },
});

export const GET_FILMS = 'films/getFilms';
export const getFilms = createAction(GET_FILMS);

export const { updateFilmsList, setCurrentFilm } = filmsSlice.actions;
export default filmsSlice.reducer;
