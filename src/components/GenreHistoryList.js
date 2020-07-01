import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import GenreHistorySingleListItem from './GenreHistorySingleListItem';
import './GenreHistoryList.css';

export default function GenreHistoryList(props) {
    const { filteredListData } = props;
    const match = useRouteMatch();
    return (
        <div className="genrelist">
            {filteredListData.map((data) => {
                return (
                    <Link className="genrelist__link" key={data.id} to={`${match.url}/${data.id}`}>
                        <GenreHistorySingleListItem 
                            name={data.name}
                            description={data.description}
                            decade={data.decade}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
