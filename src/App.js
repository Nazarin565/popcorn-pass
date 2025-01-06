import { ChooseDate } from "./components/ChooseDate";
import { ChooseFilm } from "./components/ChooseFilm";
import { MainContainer } from "./components/MainContainer/style";

function App() {
  return (
    <MainContainer>
      <ChooseDate />
      <ChooseFilm />
    </MainContainer>
  );
}

export default App;
