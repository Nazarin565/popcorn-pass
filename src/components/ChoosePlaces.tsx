import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Box, Button, Modal, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './Loader';

import { ChoosenSeatsWrapper, Screen, Seat, SeatsWrapper, StyledBoxModal } from '../styled/ChoosePlaces.styles';
import { setCurrentFilm } from '../redux/ducks/films';
import { updateSeatsSuccess } from '../redux/ducks/seats';
import { RootState } from 'redux/store';
import { SeatType } from 'types/seats';

const ChoosePlaces = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get('date') || dayjs().format('MMMM D');
  const selectedTime = searchParams.get('time') || '';

  const dispatch = useDispatch();
  const { currentFilm } = useSelector((state: RootState) => state.films);
  const { seats, loader, error } = useSelector((state: RootState) => state.seats);

  useEffect(() => {
    if (!currentFilm) {
      navigate('/');
    }
    setSelectedSeats([]);

    return () => {
      dispatch(setCurrentFilm(null));
      dispatch(updateSeatsSuccess([]));
    };
  }, [dispatch, currentFilm, navigate]);

  const toogleChooseSeat = (seatId: string) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      }
      return [...prev, seatId];
    });
  };

  const handleFinishOrder = () => {
    alert('Success!');
    navigate('/');
  };

  const handleCloseModal = () => {
    searchParams.delete('time');

    navigate({
      pathname: '/',
      search: searchParams.toString(),
    });
  };

  return (
    <Modal open={true} onClose={handleCloseModal}>
      <StyledBoxModal>
        <Typography variant="h5" textAlign={'center'}>
          {currentFilm} on {selectedDate}, {selectedTime}
        </Typography>
        <Screen>Screen</Screen>
        <SeatsWrapper>
          {loader && <Loader />}

          {error && !seats.length && (
            <Typography data-testid="fetchError" color="red">
              {error.message}
            </Typography>
          )}

          {!!seats.length &&
            !loader &&
            !error &&
            seats.map(({ id, name, isReserved }: SeatType) => {
              const isChosen = selectedSeats.includes(id);

              return (
                <Seat
                  data-testid="seatButton"
                  key={id}
                  isReserved={isReserved}
                  isChosen={isChosen}
                  onClick={() => toogleChooseSeat(id)}
                >
                  {name}
                </Seat>
              );
            })}
        </SeatsWrapper>

        {!!selectedSeats.length && (
          <Box border={1} p={1}>
            <Typography textAlign={'center'}>Your order:</Typography>

            <ChoosenSeatsWrapper>
              {selectedSeats.map((seat) => (
                <Typography key={seat} sx={{ border: 1, p: 1 }}>
                  Seat {seat}
                </Typography>
              ))}
            </ChoosenSeatsWrapper>
          </Box>
        )}

        <Button variant="contained" disabled={!selectedSeats.length} onClick={handleFinishOrder}>
          Reserve
        </Button>
      </StyledBoxModal>
    </Modal>
  );
};

export default ChoosePlaces;
