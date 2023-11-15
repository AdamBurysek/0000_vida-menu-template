import "./App.css";

function App(props: any) {
  // This function hide or show Vida Menu
  function handleShowUiClick() {
    props.setGameStarts(!props.gameStarts);
  }

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "grey",
        width: "1920px",
        height: "1080px",
      }}
    >
      <div className="button-container">
        {/* This button show actual language. 
        "cz" is for Czech
        "en" for English
        "de" for German */}
        <button
          className="test-button"
          disabled
        >
          Actual Language: {props.language}
        </button>
        {/* This button show if user is active or not.  */}
        <button
          className="test-button"
          disabled
          style={{ backgroundColor: props.isActive ? "green" : "red" }}
        >
          User is Active
        </button>
        {/* This button hide or show Vida Menu  */}
        <button
          className="test-button"
          onClick={handleShowUiClick}
        >
          Show/Hide UI
        </button>
      </div>
    </div>
  );
}

export default App;
