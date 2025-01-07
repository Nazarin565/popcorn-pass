import { Box } from "@mui/material";
import { DateCalendarStyled, Header, MainContainer } from "./App.styles";
import ChooseDate from "./components/ChooseDate";
import ChooseFilm from "./components/ChooseFilm";
import dayjs from "dayjs";

function App() {
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
        />
      </Header>
      <Box flex={1} display={"flex"}>
        <ChooseFilm />
      </Box>
    </MainContainer>
  );
}

export default App;
