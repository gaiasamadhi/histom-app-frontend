import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Header />
        <Content />
    </Router>
  )
}

export default App;
