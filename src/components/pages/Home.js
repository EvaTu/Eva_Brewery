import React from "react"
import BreweryContainer from "../BreweryContainer"


function Home({getBreweries,setGetBreweries}){
    return(
        <>
            <BreweryContainer getBreweries={getBreweries} setGetBreweries={setGetBreweries}/>
        </>
    )
}

export default Home