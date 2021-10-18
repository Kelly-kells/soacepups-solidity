import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { ContractContext } from "../contexts/ContractContext.js";

export default function Form() {
  const [selectedToken, setSelectedToken, owedTokens] = React.useState("0");

  const [, contractMethods] = React.useContext(ContractContext)
  const { getTokenDetails, getOwedTokens, nameToken, minterc20, adventureUp, petToken, burnToken, levelUptoken } = contractMethods

  const handleChangeToken = (e) => {
    const id = e.target.value
    getTokenDetails(id)
    setSelectedToken(id);
  };

  const handleName = async () => {
    const input = document.querySelector('#tokenName')
    nameToken(input.value)
  }

  const handleClaim = async () => {
    const input = document.querySelector('#tokenId')
    minterc20(input.value)
  }

  const handleAdventure = () => {
    const input = document.querySelector('#tokenId')
    adventureUp(input.value)
  }
  
  const handleBurnToken = () => {
    const input = document.querySelector('#tokenId')
    burnToken(input.value)
  }
  
  const handleLevelUp = () => {
    const input = document.querySelector('#tokenId')
    levelUptoken(input.value)
  }
  
  const handlePetToken = () => {
    const input = document.querySelector('#tokenId')
    petToken(input.value)
  }

  const handleViewTokens = () => {
    const input = document.querySelector('#tokenId')
    owedTokens = getOwedTokens(input.value)
  }
  
  return (
    <Box style={{ padding: "5px" }}>
      <FormControl fullWidth>
          <TextField
            id="tokenId"
            label="Input Token ID Here"
            variant="outlined"
            fullWidth
            style={{ marginTop: "10px" }}
            onChange={handleChangeToken}
          />
      </FormControl>
      <Grid container style={{ alignItems: "center" }}>
        <Grid item xs={10}>
          <TextField
            id="tokenName"
            label="Name Token"
            variant="outlined"
            fullWidth
            style={{ marginTop: "10px" }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
	    onClick={handleName}
          >
            Call
          </Button>
        </Grid>
      </Grid>

      <Grid container style={{ alignItems: "center" }}>
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            value={owedTokens}
            variant="outlined"
            fullWidth
            style={{ marginTop: "10px" }}
            disabled
          />
        </Grid>
        <Grid
          item
          xs={2}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
	    onClick={handleViewTokens}
          >
            Call
          </Button>
        </Grid>
      </Grid>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        style={{ marginTop: "10px" }}
      >
        <Button onClick={handleLevelUp}>Level Up</Button>
        <Button onClick={handleBurnToken}>Burn Token</Button>
        <Button onClick={handlePetToken}>Pet Token</Button>
        <Button onClick={handleAdventure}>Adventure</Button>
        <Button onClick={handleClaim}>Claim</Button> 
      </ButtonGroup>

    </Box>
  );
}
