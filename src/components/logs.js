import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Logs({ tokenData }) {
  return (
    <Grid container justifyContent="flex-start" style={{ padding: "0px 3rem" }}>
      <Grid
        item
        xs={12}
        justifyContent="flex-start"
        style={{ display: "flex", justifyContent: "start" }}
      >
        <Typography variant="h6" component="h6">
          Adventure Logs
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "2rem",
        }}
      >
        <Typography variant="div" component="div">
          {""}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "2rem",
        }}
      >
        <Typography variant="div" component="div">
          {""}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "2rem",
        }}
      >
        <Typography variant="div" component="div">
          {``}
        </Typography>
      </Grid>
    </Grid>
  );
}
