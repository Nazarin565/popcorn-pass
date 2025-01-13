import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Box, Button, Modal, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import { ChoosenSeatsWrapper, Screen, Seat, SeatsWrapper, StyledBoxModal } from '../styled/ChoosePlaces.styles';
import { setCurrentFilm } from '../redux/store/slices/filmsSlice';
import { updateSeats } from '../redux/store/slices/seatsSlice';

const ChoosePlaces = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get('date') || dayjs().format('MMMM D');
  const selectedTime = searchParams.get('time') || '';

  const dispatch = useDispatch();
  const { currentFilm } = useSelector((state) => state.films);
  const { seats } = useSelector((state) => state.seats);

  useEffect(() => {
    setSelectedSeats([]);

    return () => {
      dispatch(setCurrentFilm(null));
      dispatch(updateSeats([]));
    };
  }, [dispatch]);

  const toogleChooseSeat = (seatId) => {
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
          {seats.map((seat) => {
            const isChosen = selectedSeats.includes(seat.id);

            return (
              <Seat
                key={seat.id}
                isReserved={seat.isReserved}
                isChosen={isChosen}
                onClick={() => toogleChooseSeat(seat.id)}
              >
                {seat.name}
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
