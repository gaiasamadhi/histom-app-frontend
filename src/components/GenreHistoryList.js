import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function GenreHistoryList(props) {
    const { filteredListData } = props;
    const match = useRouteMatch();
    return (
        <div className="genrelist">
            {filteredListData.map((data) => {
                return (
                    <Link key={data.id} to={`${match.url}/${data.id}`}>
                        <div className="listitem"  style={{ margin: '50px' }}>
                            <div className="listitem__name">{data.name}</div>
                            <div className="listitem__description">{data.description}</div>
                            <div className="listitem__decade">{data.decade}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
