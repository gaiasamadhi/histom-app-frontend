import React, { Component } from 'react'
import GenreHistoryListContainer from '../containers/GenreHistoryListContainer'
import GenreHistorySingleContainer from '../containers/GenreHistorySingleContainer'
import GenreHistoryDecadesMenuContainer from '../containers/GenreHistoryDecadesMenuContainer'

export default class GenrePage extends Component {
    render() {
        return (
            <div>
               <GenreHistoryListContainer />
               <GenreHistorySingleContainer />
               <GenreHistoryDecadesMenuContainer />
            </div>
        )
    }
}
