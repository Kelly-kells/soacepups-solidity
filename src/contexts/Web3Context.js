import React, { useState } from "react";
import Web3 from "web3";
import getWeb3 from "../utils/getWeb3";

export const Web3Context = React.createContext({});

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState({})
    const [account, setAccount] = useState("")

    const connect = async () => {
        const web3 = await getWeb3()
        const accounts = await web3.eth.getAccounts();
        setWeb3(web3)
        setAccount(accounts[0])
    }

    const disconnect = async () => {
        setWeb3({})
        setAccount("")
    }

    return (
        <Web3Context.Provider value={{ web3, account, connect, disconnect }}>
            {children}
        </Web3Context.Provider>
    )
}