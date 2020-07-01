import React, { useState, useEffect } from 'react'
import GenreHistoryList from '../components/GenreHistoryList'

export default function GenreHistoryListContainer() {

    const [fetchStatus, setFetchStatus] = useState('IDLE'); // STARTED, SUCCEED, FAILED
    const [errMessage, setErrMessage] = useState(null);
    const [listData, setListData] = useState([]);

    useEffect(() => {


        setFetchStatus('STARTED')

        fetch('https://fast-lowlands-42351.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
                setListData(data);
                setFetchStatus('SUCCEED');
            })
            .catch(err => {
                setErrMessage(err.message);
                setFetchStatus('FAILED');
            })
    }, [])

    return (
        <GenreHistoryList filteredListData={listData}/>
    )
}
