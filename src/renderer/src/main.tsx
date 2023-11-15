import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import VidaMenu from "vida-menu";
import HowToPage from "./components/howToPage";
import KnowMorePage from "./components/knowMorePage";
import setup from "../setup.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <VidaMenu setup={setup}>
        <App></App>
        <HowToPage></HowToPage>
        <KnowMorePage></KnowMorePage>
      </VidaMenu>
    </>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
