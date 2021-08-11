/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar/NavigationBar'
import { HomePage } from './pages/HomePage/HomePage'
import { ArticleDetail } from './pages/ArticleDetail/ArticleDetail'
import { Footer } from './components/Footer/Footer'

function App() {
  const [pageNum, setPageNum] = useState(1)
  const [query, setQuery] = useState('')
  return (
    <div className="App">
      <Router>
        <NavigationBar pageNum={pageNum} query={query} setQuery={setQuery} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <HomePage pageNum={pageNum} setPageNum={setPageNum} query={query} />}
          />
          <Route path="/articles/:id" exact component={ArticleDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
