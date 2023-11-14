import VidaMenu from "./components/vidaMenu";
import Game from "./game/Game";
import HowToPage from "./gameInfo/howToPage";
import KnowMorePage from "./gameInfo/knowMorePage";

function App() {
  return (
    <>
      <VidaMenu>
        <Game></Game>
        <HowToPage></HowToPage>
        <KnowMorePage></KnowMorePage>
      </VidaMenu>
    </>
  );
}

export default App;
