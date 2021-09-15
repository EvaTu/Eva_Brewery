import React, { useState} from "react"
import Search from "./Search"
import BreweryForm from "./BreweryForm"
import BreweryList from "./BreweryList"

function BreweryContainer({getBreweries,setGetBreweries}) {
    // const [ getBreweries, setGetBreweries] = useState([])
    const [ searchBrewery, setSearchBrewery ] = useState("")

    //Ask Michelle about previous API for more options
    //Async Await
    // https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json

    // use for loop to render # length of items
    // conditional rendering if fetch is taking a long time to render then loading screen 

    // useEffect(() => {
    //     fetch("http://localhost:3000/breweries")
    //     .then(response => response.json())
    //     .then(breweryArray => setGetBreweries(breweryArray))
    //     }, [])

    const displayBreweries = getBreweries.filter((brewery => {
        return brewery.name.toLowerCase().includes(searchBrewery.toLowerCase())
    }))

    return (
        <div>
            <Search searchBrewery={searchBrewery} onSearchChange={setSearchBrewery}/> 
            <BreweryForm />
            <BreweryList breweriesArray={displayBreweries} />
        </div>
    )
}

export default BreweryContainer