import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <ul>
            <li><Link exact to="/">Home</Link></li>
            <li><Link to="/genrehistory">Genre-History</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    )
}

