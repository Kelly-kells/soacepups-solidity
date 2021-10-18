import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Web3Context } from "../contexts/Web3Context";

export default function Header() {
  const {account, connect, disconnect} = React.useContext(Web3Context)

  const connectWeb3 = async () => {
    await connect()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            {account ? "Wallet Connected" : "Connect Wallet" }
          </Typography>

          {account ? (
            <Button color="inherit" onClick={() => disconnect()}>
              Logout
            </Button>

          ) : (

            <Button color="inherit" onClick={() => connectWeb3()}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
