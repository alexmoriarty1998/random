import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Header from './Header.js'
import Nutrition from './Nutrition.js'
import Splits from './Splits.js'
import MyStats from './MyStats.js'



class App extends Component {
  render() {
   
    return (
      <div className="App">
      <Header />
      <div>
        <ul className="navLinks">
          <li>
            <NavLink
            to='/nutrition'>

             Nutrition 
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/splits">
            Splits
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/mystats">
            MyStats
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/nutrition" render={() => <Nutrition />}/>
          <Route path="/splits" render={() => <Splits />}/>
          <Route path="/mystats" render={()=> <MyStats />}/>
          <Route render={() => <p> to get started click above </p>} />
        </Switch>
      </div>
      </div>

    )
  }
}





export default App
