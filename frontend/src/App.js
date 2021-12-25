import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import SideNavbar from './components/SideNavbar'
import LiveScreen from './screens/LiveScreen'
import MainScreen from './screens/MainScreen'
import LeaderScreen from './screens/LeaderScreen'
import ExploreScreen from './screens/ExploreScreen'
import AchieveScreen from './screens/AchieveScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='d-flex'>
        <SideNavbar />
        <div className='mainscreen'>
          <Switch>
            <Route path='/' exact>
              <MainScreen />
            </Route>
            <Route path='/home'>
              <HomeScreen />
            </Route>
            <Route path='/classroom'>
              <LiveScreen />
            </Route>
            <Route path='/leaderboard'>
              <LeaderScreen />
            </Route>
            <Route path='/achieve'>
              <AchieveScreen />
            </Route>
            <Route path='/course'>
              <ExploreScreen />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
