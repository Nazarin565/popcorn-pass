import { put } from 'redux-saga/effects';

export const UPDATE_FILMS_LIST_REQUEST = 'films/UPDATE_FILMS_LIST_REQUEST';
export const UPDATE_FILMS_LIST_SUCCESS = 'films/UPDATE_FILMS_LIST_SUCCESS';
export const UPDATE_FILMS_LIST_ERROR = 'films/UPDATE_FILMS_LIST_ERROR';
export const SET_CURRENT_FILM = 'films/SET_CURRENT_FILM';
export const GET_FILMS_FROM_SERVER = 'films/GET_FILMS_FROM_SERVER';

const initialState = {
  filmsList: [],
  currentFilm: null,
  loader: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FILMS_LIST_REQUEST:
      return {
        ...state,
        loader: true,
        error: null,
      };

    case UPDATE_FILMS_LIST_SUCCESS:
      return {
        ...state,
        filmsList: action.payload,
        loader: false,
      };

    case UPDATE_FILMS_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loader: false,
      };

    case SET_CURRENT_FILM:
      return {
        ...state,
        currentFilm: action.payload,
      };

    default:
      return state;
  }
}

export function updateFilmsListRequest() {
  return { type: UPDATE_FILMS_LIST_REQUEST };
}

export function updateFilmsListSuccess(data) {
  return { type: UPDATE_FILMS_LIST_SUCCESS, payload: data };
}

export function updateFilmsListError(error = null) {
  return { type: UPDATE_FILMS_LIST_ERROR, payload: error };
}

export function setCurrentFilm(data) {
  return { type: SET_CURRENT_FILM, payload: data };
}

export function getFilmsFromServer() {
  return { type: GET_FILMS_FROM_SERVER };
}

export function* getFilmsSaga() {
  try {
    yield put(updateFilmsListRequest());
    const payload = yield fetch('https://demo3637811.mockable.io/showtimes').then((response) => response.json());
    yield put(updateFilmsListSuccess(payload));
  } catch (error) {
    yield put(updateFilmsListError(error));
  }
}
