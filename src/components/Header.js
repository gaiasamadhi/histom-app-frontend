import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <div className="genrehistory-header-container">
            <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link to="/genrehistory">Genre-History</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <h1>The histom app !!.'_'.!!</h1>
        </div>
    )
}

