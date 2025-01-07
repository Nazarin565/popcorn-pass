import { MainContainer } from "./App.styles";
import ChooseDate from "./components/ChooseDate";
import ChooseFilm from "./components/ChooseFilm";

function App() {
  return (
    <MainContainer>
      <ChooseDate />
      <ChooseFilm />
    </MainContainer>
  );
}

export default App;
