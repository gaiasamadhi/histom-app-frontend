import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Header />
        <h1>The histom app !!.'_'.!!</h1>
        <Content />
    </Router>
  )
}

export default App;
