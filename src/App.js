  
import React, { useState, useEffect } from "react";

import './App.css';
import jokeFacade from "./jokeFacade";
import {
  Switch,
  Route,
  NavLink,
  Prompt,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";


function App( { jokeFacade }) {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/jokes">
        <Jokes jokeFacade={jokeFacade} />
      </Route>
      <Route path="/scrape">
        <Scrape />
      </Route>
    </Switch>
  </div>


  
  );
}

function Header () {
  return (
    <ul className="header">
<li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
<li><NavLink activeClassName="active" to="/jokes">Jokes</NavLink></li>
<li><NavLink activeClassName="active" to="/scrape">Scrape</NavLink></li>
</ul>

  )
}

function Home () {
  return ( 
    <div> 
      <h1>Home</h1>
    </div>
  )

}


function Scrape () {
  return ( 
    <div> 
      <h1>Scrape</h1>
    </div>
  )

}

function Jokes({ jokeFacade }) {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    jokeFacade()
      .getJokes()
      .then(data => {
        setJokes({ ...data });
      });
  }, []);

  return (
    <div>
      <ul>
        <li>Chuck joke : {jokes.chuckJoke}</li>
        <li>Chuck joke url : {jokes.chuckJokeURL}</li>
        <li>Dad joke : {jokes.dadJoke}</li>
        <li>Dad joke url : {jokes.dadJokeURL}</li>
      </ul>
    </div>
  );
}



export default App;
