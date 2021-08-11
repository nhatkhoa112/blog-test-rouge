/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import { HomePage } from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
