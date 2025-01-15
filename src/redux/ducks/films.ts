import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { Film } from 'types/films';

export const UPDATE_FILMS_LIST_REQUEST = 'films/UPDATE_FILMS_LIST_REQUEST';
export const UPDATE_FILMS_LIST_SUCCESS = 'films/UPDATE_FILMS_LIST_SUCCESS';
export const UPDATE_FILMS_LIST_ERROR = 'films/UPDATE_FILMS_LIST_ERROR';
export const SET_CURRENT_FILM = 'films/SET_CURRENT_FILM';
export const GET_FILMS_FROM_SERVER = 'films/GET_FILMS_FROM_SERVER';

interface InitialState {
  filmsList: Film[];
  currentFilm: null | string;
  loader: boolean;
  error: null | Error;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: InitialState = {
  filmsList: [],
  currentFilm: null,
  loader: false,
  error: null,
};

export default function reducer(state = initialState, action: Action) {
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

export function updateFilmsListSuccess(data: Film[]) {
  return { type: UPDATE_FILMS_LIST_SUCCESS, payload: data };
}

export function updateFilmsListError(error: null | unknown = null) {
  return { type: UPDATE_FILMS_LIST_ERROR, payload: error };
}

export function setCurrentFilm(data: string | null = null) {
  return { type: SET_CURRENT_FILM, payload: data };
}

export function getFilmsFromServer() {
  return { type: GET_FILMS_FROM_SERVER };
}

export function* getFilmsSaga(): SagaIterator {
  try {
    yield put(updateFilmsListRequest());
    const response = yield call(fetch, 'https://demo3637811.mockable.io/showtimes');
    const payload = yield call([response, 'json']);

    yield put(updateFilmsListSuccess(payload));
  } catch (error) {
    yield put(updateFilmsListError(error));
  }
}
