import React, { Component } from 'react'
import GenreHistoryListContainer from '../containers/GenreHistoryListContainer'
import GenreHistorySingleContainer from '../containers/GenreHistorySingleContainer'

export default class GenrePage extends Component {
    render() {
        return (
            <div>
               <GenreHistoryListContainer />
               <GenreHistorySingleContainer />
            </div>
        )
    }
}
