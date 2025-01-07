import { Box } from "@mui/material";
import { DateCalendarStyled, Header, MainContainer } from "./App.styles";
import ChooseDate from "./components/ChooseDate";
import ChooseFilm from "./components/ChooseFilm";
import dayjs from "dayjs";
import { useState } from "react";
import ChoosePlaces from "./components/ChoosePlaces";

function App() {
  const [openModal, SetOpenModal] = useState("");

  const handleOpenModal = (time) => SetOpenModal(time);
  const handleCloseModal = () => SetOpenModal("");

  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 30
  );

  return (
    <MainContainer>
      <Header>
        <ChooseDate />
        <DateCalendarStyled
          views={["day"]}
          defaultValue={dayjs(Date.now())}
          minDate={dayjs(Date.now())}
          maxDate={dayjs(maxDate)}
          value={dayjs(Date.now())}
        />
      </Header>

      {openModal && (
        <ChoosePlaces
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />
      )}

      <Box flex={1} display={"flex"}>
        <ChooseFilm handleOpenModal={handleOpenModal} />
      </Box>
    </MainContainer>
  );
}

export default App;
