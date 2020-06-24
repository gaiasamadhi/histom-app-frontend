import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import GenreHistoryPage from '../pages/GenreHistoryPage'
import AboutPage from '../pages/AboutPage'
 
 export default function Content() {
     return (
         <div>
            <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/genrehistory">
                        <GenreHistoryPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
            </Switch>
         </div>
     )
 }
 