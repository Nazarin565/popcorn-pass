export const UPDATE_SEATS_REQUEST = 'seats/UPDATE_SEATS_REQUEST';
export const UPDATE_SEATS_SUCCESS = 'seats/UPDATE_SEATS_SUCCESS';
export const UPDATE_SEATS_ERROR = 'seats/UPDATE_SEATS_ERROR';
export const GET_SEATS_FROM_SERVER = 'seats/GET_SEATS_FROM_SERVER';

const initialState = {
  seats: [],
  loader: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SEATS_REQUEST:
      return {
        ...state,
        loader: true,
        error: null,
      };

    case UPDATE_SEATS_SUCCESS:
      return {
        ...state,
        seats: action.payload,
        loader: false,
      };

    case UPDATE_SEATS_ERROR:
      return {
        ...state,
        error: action.payload,
        loader: false,
      };

    default:
      return state;
  }
}

export function updateSeatsRequest() {
  return {
    type: UPDATE_SEATS_REQUEST,
  };
}

export function updateSeatsSuccess(data) {
  return {
    type: UPDATE_SEATS_SUCCESS,
    payload: data,
  };
}

export function updateSeatsError(error) {
  return {
    type: UPDATE_SEATS_ERROR,
    payload: error,
  };
}

export function getSeatsFromServer() {
  return {
    type: GET_SEATS_FROM_SERVER,
  };
}
