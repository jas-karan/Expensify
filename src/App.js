import React, { useEffect, useRef } from 'react';
import './App.css';
import Details from "./components/Details";
import { Grid } from "@material-ui/core";
import Main from "./components/Main";
import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

function App() {
  const speechState = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div className="app">

      <Grid container spacing={0} alignItems="center" justify="center"
        style={{ height: '100vh' }}>

        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item sx={12} sm={5}>
          <Main />
        </Grid>
        <Grid item sx={12} sm={3}>
          <Details title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>

    </div>
  );
}

export default App;
