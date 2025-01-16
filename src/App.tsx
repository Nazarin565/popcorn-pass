import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router';
import { Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';

import { ChooseDate, ChooseFilm } from './components';

import { DateCalendarStyled, Header, MainContainer } from './App.styles';
import { getFilmsFromServer } from './redux/ducks/films';

function App() {
  const chooseFilmRef = useRef<null | HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const today = dayjs().format('MMMM D');
  const [date, setDate] = useState(dayjs(`${searchParams.get('date') || today}, ${dayjs().year()}`));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmsFromServer());
  }, [dispatch, date]);

  const handleChangeDay = (newDate: Dayjs) => {
    setDate(newDate);
    const formattedDate = newDate.format('MMMM D');

    if (formattedDate === today) {
      searchParams.delete('date');
    } else {
      searchParams.set('date', formattedDate);
    }
    setSearchParams(searchParams);
    scrollToChooseFilm();
  };

  const handleSetToday = () => setDate(dayjs());

  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 30);

  const scrollToChooseFilm = () => {
    if (chooseFilmRef.current) {
      chooseFilmRef.current.scrollIntoView();
    }
  };

  return (
    <MainContainer>
      <Header container spacing={1.5}>
        <ChooseDate handleSetToday={handleSetToday} scrollToChooseFilm={scrollToChooseFilm} />
        <DateCalendarStyled
          data-testid="calendar"
          views={['day']}
          minDate={dayjs()}
          maxDate={dayjs(maxDate)}
          value={date}
          onChange={(newDate) => handleChangeDay(newDate)}
        />
      </Header>

      <Outlet />

      <Box display={'flex'} flex={1} ref={chooseFilmRef} minHeight={'100%'}>
        <ChooseFilm />
      </Box>
    </MainContainer>
  );
}

export default App;
