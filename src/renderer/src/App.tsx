import VidaMenu from "vida-npm-test";
import Game from "./game/Game";
import HowToPage from "./gameInfo/howToPage";
import KnowMorePage from "./gameInfo/knowMorePage";
// import VidaMenu from "./components/vidaMenu";
import setup from "../setup.json";

function App() {
  return (
    <>
      <VidaMenu
        section={setup.section}
        exhibitionName={setup.label}
      >
        <Game></Game>
        <HowToPage></HowToPage>
        <KnowMorePage></KnowMorePage>
      </VidaMenu>
      {/* <VidaMenu>
        <Game></Game>
        <HowToPage></HowToPage>
        <KnowMorePage></KnowMorePage>
      </VidaMenu> */}
    </>
  );
}

export default App;
