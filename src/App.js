import { Box } from "@mui/material";
import { DateCalendarStyled, Header, MainContainer } from "./App.styles";
import ChooseDate from "./components/ChooseDate";
import ChooseFilm from "./components/ChooseFilm";
import dayjs from "dayjs";
import { useState } from "react";
import ChoosePlaces from "./components/ChoosePlaces";

function App() {
  const [openModal, SetOpenModal] = useState("");
  const [date, setDate] = useState(dayjs(Date.now()));

  const handleOpenModal = (time) => SetOpenModal(time);
  const handleCloseModal = () => SetOpenModal("");

  const handleSetToday = () => setDate(dayjs(Date.now()));

  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 30
  );

  const formattedDate = date.format("MMMM D");

  return (
    <MainContainer>
      <Header>
        <ChooseDate handleSetToday={handleSetToday} />
        <DateCalendarStyled
          views={["day"]}
          minDate={dayjs(Date.now())}
          maxDate={dayjs(maxDate)}
          value={date}
          onChange={setDate}
        />
      </Header>

      {openModal && (
        <ChoosePlaces
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          formattedDate={formattedDate}
        />
      )}

      <Box flex={1} display={"flex"}>
        <ChooseFilm
          handleOpenModal={handleOpenModal}
          formattedDate={formattedDate}
        />
      </Box>
    </MainContainer>
  );
}

export default App;
