import React, { Component } from "react";
import Stage from "./stage";
import Display from "./display";
import StartButton from "./startButton";
import Container from "@material-ui/core/Container";

export default class tetris extends Component {
  render() {
    return (
      <>
        <Container>
          <Display text="Score:" />
          <Display text="Rows:" />
          <Display text="Level:" />
        </Container>
        <Stage />
        <StartButton />
      </>
    );
  }
}
