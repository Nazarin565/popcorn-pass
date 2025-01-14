export const UPDATE_FILMS_LIST = 'films/UPDATE_FILMS_LIST';
export const SET_CURRENT_FILM = 'films/SET_CURRENT_FILM';
export const GET_FILMS_FROM_SERVER = 'films/GET_FILMS_FROM_SERVER';

const initialState = {
  filmsList: [],
  currentFilm: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FILMS_LIST:
      return {
        ...state,
        filmsList: action.payload,
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

export function updateFilmsList(data) {
  return { type: UPDATE_FILMS_LIST, payload: data };
}

export function setCurrentFilm(data) {
  return { type: SET_CURRENT_FILM, payload: data };
}

export function getFilmsFromServer() {
  return { type: GET_FILMS_FROM_SERVER };
}
