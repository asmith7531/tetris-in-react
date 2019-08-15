import React from "react";
import Fab from "@material-ui/core/Fab";

const StartButton = ({ callback }) => (
  <Fab variant="extended" color="primary" aria-label="add">
    Start Game
  </Fab>
);

export default StartButton;
