import React, { useState, createContext, useEffect} from "react"
import { FetchAllMarkets } from "../config/Config"

export const MarketContext = createContext()

export const MarketProvider = (props) => {


    const [markets, setMarkets] = useState([])


    async function fetchAllMarkets() {
        const mercados = await FetchAllMarkets()
        setMarkets(mercados)
    }

    useEffect(() => {
        fetchAllMarkets()
    }, [])

    return (
        <MarketContext.Provider value={{ markets, setMarkets, fetchAllMarkets }}>
            {props.children}
        </MarketContext.Provider>
    )

}