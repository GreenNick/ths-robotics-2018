import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import NavTuckerHigh from './Components/NavTuckerHigh/NavTuckerHigh'
import Nav2019Season from './Components/Nav2019Season/Nav2019Season'
import TeamsPage from './Components/TeamsPage/TeamsPage'
import Contact from './Components/Contact/Contact'
import Team1320A from './Components/TeamsPage/Team1320A/Team1320A'
import Team1320B from './Components/TeamsPage/Team1320B/Team1320B'
import Team1320C from './Components/TeamsPage/Team1320C/Team1320C'
import Team1320D from './Components/TeamsPage/Team1320D/Team1320D'
import Team1320E from './Components/TeamsPage/Team1320E/Team1320E'
import AboutUs from './Components/AboutUs/AboutUs'
import AboutTheGame from './Components/AboutTheGame/AboutTheGame'
import Teachers from './Components/Teachers/Teachers'
import Calendar from './Components/Calendar/Calendar'
import Diversity from './Components/Diversity/Diversity'
import TuckerTournament from './Components/TuckerTournament/TuckerTournament'
import Awards from './Components/Awards/Awards'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import OnlineChallenge from './Components/OnlineChallenge/OnlineChallenge'
import IncomingMembers from './Components/IncomingMembers/IncomingMembers'
import Outreach from './Components/Outreach/Outreach'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={HomePage} exact />
          <Route path='/TuckerHigh' component={NavTuckerHigh} exact />
          <Route path='/TuckerHigh/AboutUs' component={AboutUs} exact />
          <Route path='/TuckerHigh/Teachers' component={Teachers} exact />
          <Route path='/TuckerHigh/Diversity' component={Diversity} exact />
          <Route path='/TuckerHigh/Outreach' component={Outreach} exact />
          <Route path='/TuckerHigh/IncomingMembers' component={IncomingMembers} exact />
          <Route path='/2019Season' component={Nav2019Season} exact />
          <Route path='/2019Season/AboutTheGame' component={AboutTheGame} exact />
          <Route path='/2019Season/Calendar' component={Calendar} exact />
          <Route path='/2019Season/TuckerTournament' component={TuckerTournament} exact />
          <Route path='/2019Season/OnlineChallenge' component={OnlineChallenge} exact />
          <Route path='/Awards' component={Awards} exact />
          <Route path='/PhotoGallery' component={PhotoGallery} exact />
          <Route path='/Teams' component={TeamsPage} exact />
          <Route path='/Teams/1320A' component={Team1320A} exact />
          <Route path='/Teams/1320B' component={Team1320B} exact />
          <Route path='/Teams/1320C' component={Team1320C} exact />
          <Route path='/Teams/1320D' component={Team1320D} exact />
          <Route path='/Teams/1320E' component={Team1320E} exact />
          <Route path='/Contact' component={Contact} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
