import { createAction, createSlice } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';

const initialState = {
  seats: [],
};

export function* getSeatsSaga() {
  try {
    const payload = yield fetch('https://demo3637811.mockable.io/seats').then((response) => response.json());
    yield put(updateSeats(payload));
  } catch (error) {
    console.error(error);
  }
}

export const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    updateSeats: (state, action = []) => {
      state.seats = action.payload;
    },
  },
});

export const GET_SEATS = 'seats/getSeats';
export const getSeats = createAction(GET_SEATS);

export const { updateSeats } = seatsSlice.actions;
export default seatsSlice.reducer;
