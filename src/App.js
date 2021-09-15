import React, { useState, useEffect }from "react"
import Header from "./components/Header"
import "./index.css";
// import BreweryContainer from "./components/BreweryContainer";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'

function App() {
  const [ getBreweries, setGetBreweries] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/breweries")
    .then(response => response.json())
    .then(breweryArray => setGetBreweries(breweryArray))
    }, [])


  return (
    <div className="ui raised segment">
      <Router>
        <Header />
        <Switch>
          <Route path="/about-us" >
            <AboutUs />
          </Route>
          <Route path="/"> 
            <Home getBreweries={getBreweries} setGetBreweries={setGetBreweries}/>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
