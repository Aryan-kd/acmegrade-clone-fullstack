import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/home'>
            <HomeScreen />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
