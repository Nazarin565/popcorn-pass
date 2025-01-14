export const UPDATE_SEATS = 'seats/UPDATE_SEATS';
export const GET_SEATS_FROM_SERVER = 'seats/GET_SEATS_FROM_SERVER';

const initialState = {
  seats: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SEATS:
      return {
        ...state,
        seats: action.payload,
      };

    default:
      return state;
  }
}

export function updateSeats(data) {
  return {
    type: UPDATE_SEATS,
    payload: data,
  };
}

export function getSeatsFromServer() {
  return {
    type: GET_SEATS_FROM_SERVER,
  };
}
