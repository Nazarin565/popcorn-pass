import React, { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';

import {
  Wrapper,
  Container,
  ButtonsWrapper,
  StyledButton,
  StyledH5,
  CurrentDate,
  DescriptionWrapper,
  StyledH6,
  FilmDescription,
} from '../styled/ChooseFilm.styles';
import { setCurrentFilm } from '../redux/modules/films';
import { getSeatsFromServer } from '../redux/modules/seats';

const ChooseFilm = ({ filmsList }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const date = searchParams.get('date') || dayjs().format('MMMM D');

  const location = useLocation();
  const [initialPreviousLocation] = useState(location);
  const state = location.state;
  const previousLocation = state?.previousLocation || initialPreviousLocation;

  const dispatch = useDispatch();

  const handleChooseTime = (selectedTime, filmName) => {
    searchParams.set('time', selectedTime);
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
        In the cinema on <CurrentDate>{date}</CurrentDate>
      </StyledH5>
      {filmsList.length ? (
        filmsList.map(({ id, filmName, timeSlots, description, img }) => (
          <Wrapper key={id}>
            <DescriptionWrapper>
              <StyledH6>{filmName}</StyledH6>
              <ButtonsWrapper>
                {timeSlots.map((time) => (
                  <StyledButton key={time} onClick={() => handleChooseTime(time, filmName)}>
                    {time}
                  </StyledButton>
                ))}
              </ButtonsWrapper>
              <FilmDescription>{description}</FilmDescription>
            </DescriptionWrapper>
            <img src={img} alt={filmName} width={200} height={300} />
          </Wrapper>
        ))
      ) : (
        <Typography color="red">Any films for this day. Try another day!</Typography>
      )}
    </Container>
  );
};

export default ChooseFilm;
