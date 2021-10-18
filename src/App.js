import React from "react";
import Header from "./components/header";
import { Grid } from "@mui/material";
import Form from "./components/tokenForm";
import Logs from "./components/logs";
import Details from "./components/details";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Grid container style={{ marginTop: "6rem", padding: "0px 5px" }}>
        <Grid item xs={12} md={6} lg={5}>
          <Form />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Logs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Details />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
