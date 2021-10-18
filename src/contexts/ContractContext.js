import React, { useContext, useState } from "react";
import { Web3Context } from "./Web3Context";
import config from "../config/";

const contractAbi = require("../config/contractabi.json");

export const ContractContext = React.createContext({});

export const ContractProvider = ({ children }) => {
    const [tokenData, setTokenData] = useState({
        id: "0000",
        name: "Null Token",
        level: "Null Level",
        pets: "Null Pets",
        battlesWon: "BWon",
        health: "Health",
        strength: "Strength",
        defense: "Defense",
        speed: "Speed",
        luck: "Luck",
        xp: "Xp",
    })

    const { web3, account } = useContext(Web3Context)

    const getContract = () => {
        if (!web3 || ! account) throw new Error("Please connect metamask")
        return new web3.eth.Contract(contractAbi, config.contractAddress)
    }

    const getTokenDetails = async (tokenId) => {
        try {
            const contract = getContract()
            const res = await contract.methods.attrIndex(tokenId).call()
            setTokenData(res)

            return res;
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    const getOwedTokens = async (tokenId) => {
        try {
            const contract = getContract()
            const owed = await contract.methods.viewOwedTokens(tokenId).call()

            return owed;
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    const minterc20 = async (tokenId) => {
        try {
            const contract = getContract()
            await contract.methods.minterc20(tokenId).send({ from: account })
            return true
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    const nameToken = async (tokenId, tokenName) => {
        try {
            const contract = getContract()
            await contract.methods.changeTokenName(tokenId, tokenName).send({ from: account })
            return true
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    const adventureUp = async (tokenIndex) => {
        try {
            const contract = getContract()
            await contract.methods.adventure(tokenIndex).send({ from: account })
            return true
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    const petToken = async (tokenId) => {
        try {
            const contract = getContract()
            await contract.methods.petToken(tokenId).send({ from: account })
            return true
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    const burnToken = async (tokenId) => {
        try {
            const contract = getContract()
            await contract.methods.burn(tokenId).send({ from: account })
            return true
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    const levelUptoken = async (tokenId) => {
        try {
            const contract = getContract()
            await contract.methods.levelUptoken(tokenId).send({ from: account })
            return true
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }

    return (
        <ContractContext.Provider value={[tokenData, { getTokenDetails, getOwedTokens, nameToken, minterc20, adventureUp, petToken, burnToken, levelUptoken }]}>
            {children}
        </ContractContext.Provider>
    )
}