import { Box } from "@mui/material";
import { DateCalendarStyled, Header, MainContainer } from "./App.styles";
import ChooseDate from "./components/ChooseDate";
import ChooseFilm from "./components/ChooseFilm";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import { Outlet, useSearchParams } from "react-router";

function App() {
  const chooseFilmRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const today = dayjs().format("MMMM D");
  const [date, setDate] = useState(
    dayjs(`${searchParams.get("date") || today}, ${dayjs().year()}`)
  );

  const handleChangeDay = (newDate) => {
    setDate(newDate);
    const formattedDate = newDate.format("MMMM D");

    if (formattedDate === today) {
      searchParams.delete("date");
    } else {
      searchParams.set("date", formattedDate);
    }
    setSearchParams(searchParams);
    scrollToChooseFilm();
  };

  const handleSetToday = () => setDate(dayjs());

  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 30
  );

  const scrollToChooseFilm = () => {
    if (chooseFilmRef.current) {
      chooseFilmRef.current.scrollIntoView();
    }
  };

  return (
    <MainContainer>
      <Header>
        <ChooseDate
          handleSetToday={handleSetToday}
          scrollToChooseFilm={scrollToChooseFilm}
        />
        <DateCalendarStyled
          views={["day"]}
          minDate={dayjs()}
          maxDate={dayjs(maxDate)}
          value={date}
          onChange={(newDate) => handleChangeDay(newDate)}
        />
      </Header>

      <Outlet />

      <Box flex={1} display={"flex"} ref={chooseFilmRef}>
        <ChooseFilm />
      </Box>
    </MainContainer>
  );
}

export default App;
