import React, { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import Loader from './Loader';

import {
  Wrapper,
  Container,
  ButtonsWrapper,
  StyledButton,
  StyledH5,
  SelectedDate,
  DescriptionWrapper,
  StyledH6,
  FilmDescription,
} from '../styled/ChooseFilm.styles';
import { setCurrentFilm } from '../redux/ducks/films';
import { getSeatsFromServer } from '../redux/ducks/seats';
import { RootState } from 'redux/store';
import { Film } from 'types/films';

const ChooseFilm = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const [initialPreviousLocation] = useState(location);
  const state = location.state;
  const previousLocation = state?.previousLocation || initialPreviousLocation;

  const date = searchParams.get('date') || dayjs().format('MMMM D');

  const dispatch = useDispatch();
  const { loader, filmsList, error } = useSelector((state: RootState) => state.films);

  const handleChooseTime = (selectedTime: string, filmName: string) => {
    searchParams.set('time', selectedTime);
    setSearchParams(searchParams);

    dispatch(setCurrentFilm(filmName));
    dispatch(getSeatsFromServer());

    navigate(
      {
        pathname: 'choose-places',
        search: searchParams.toString(),
      },
      { state: { previousLocation } }
    );
  };

  return (
    <Container id="choose-film">
      <StyledH5>
        In the cinema on <SelectedDate>{date}</SelectedDate>
      </StyledH5>
      {loader && <Loader />}

      {error && !loader && <Typography color="red">{error.message}</Typography>}

      {!loader && !error && !filmsList.length && (
        <Typography color="red">Any films for this day. Try another day!</Typography>
      )}

      {!!filmsList.length &&
        !loader &&
        filmsList.map(({ id, filmName, timeSlots, description, img }: Film) => (
          <Wrapper key={id}>
            <DescriptionWrapper>
              <StyledH6>{filmName}</StyledH6>
              <ButtonsWrapper>
                {timeSlots.map((time: string) => (
                  <StyledButton
                    data-testid="timePickerButton"
                    key={time}
                    onClick={() => handleChooseTime(time, filmName)}
                  >
                    {time}
                  </StyledButton>
                ))}
              </ButtonsWrapper>
              <FilmDescription>{description}</FilmDescription>
            </DescriptionWrapper>
            <img src={img} alt={filmName} width={200} height={300} />
          </Wrapper>
        ))}
    </Container>
  );
};

export default ChooseFilm;
