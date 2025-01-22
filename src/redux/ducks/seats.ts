import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { SeatType } from 'types/seats';

export const UPDATE_SEATS_REQUEST = 'seats/UPDATE_SEATS_REQUEST';
export const UPDATE_SEATS_SUCCESS = 'seats/UPDATE_SEATS_SUCCESS';
export const UPDATE_SEATS_ERROR = 'seats/UPDATE_SEATS_ERROR';
export const GET_SEATS_FROM_SERVER = 'seats/GET_SEATS_FROM_SERVER';

export interface InitialSeatsState {
  seats: SeatType[];
  loader: boolean;
  error: null | Error;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: InitialSeatsState = {
  seats: [],
  loader: false,
  error: null,
};

export default function reducer(state = initialState, action: Action) {
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

export function updateSeatsSuccess(data: SeatType[]) {
  return {
    type: UPDATE_SEATS_SUCCESS,
    payload: data,
  };
}

export function updateSeatsError(error: null | unknown = null) {
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

export function* getSeatsSaga(): SagaIterator {
  try {
    yield put(updateSeatsRequest());
    const response = yield call(fetch, 'https://demo3637811.mockable.io/seats');
    const payload = yield call([response, 'json']);

    yield put(updateSeatsSuccess(payload));
  } catch (error) {
    yield put(updateSeatsError(error));
  }
}
