import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ContractContext } from "../contexts/ContractContext";

export default function Details() {
  const [tokenData] = React.useContext(ContractContext)

  return (
    <Grid container justifyContent="flex-start" style={{ padding: "0px 3rem" }}>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <img
          src="/images/logo512.png"
          alt="logo"
          style={{ height: "50px", width: "50px" }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Typography variant="h6" component="h6">
          Name:
        </Typography>
        <Typography
          variant="strong"
          component="strong"
          style={{
            marginLeft: "1rem",
          }}
        >
          {tokenData?.name}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Level:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.level}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Pets:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.pets}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Battles Won:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.battlesWon}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Health:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.health}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Strength:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.strength}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Defense:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.defense}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",

            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Speed:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.speed}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            Luck:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.luck}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            borderLeft: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="b" component="b">
            XP:
          </Typography>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          xs={12}
          sm={12}
          style={{
            textTransform: "capitalize",
            padding: "5px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="div" component="div">
            {tokenData?.xp}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
