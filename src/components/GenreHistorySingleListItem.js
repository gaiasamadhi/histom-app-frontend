import React from 'react'
import './GenreHistorySingleListItem.css';

export default function GenreHistorySingleListItem(props) {
    const { name, description, decade } = props;
    return (
        <div>
            <div className="listitem">
                <div className="listitem__name">{name}</div>
                <div className="listitem__description">{description}</div>
                <div className="listitem__decade">{decade}</div>
            </div>
        </div>
    )
}
