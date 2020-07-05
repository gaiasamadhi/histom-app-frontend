import React, {Component} from 'react'
import RadialMenu from "react-radial-menu"
import './GenreHistoryDecadesMenu.css'


class GenreHistoryDecadesMenu extends Component {
    constructor(props){
        super(props);

        this.items = this.props.items;
         
        this.center = this.props.children
    }

    render() {
        return (
            <RadialMenu
                items={this.items}
                center={this.center}
                distance= {-20}
                itemsSize = {150}
            />
        )
    }
}

export default GenreHistoryDecadesMenu;
