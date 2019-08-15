import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "./components/AppBar/appBar";
import Tetris from "./components/Tetris/tetris";
import "./App.css";

function App() {
  return (
    <>
      <AppBar className="App" />
      <Container max-width="xl" />
      <Container max-width="sm">
        <Tetris />
      </Container>
    </>
  );
}

export default App;
