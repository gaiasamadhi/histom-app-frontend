import React, { useEffect, useState } from 'react';
import GenreHistoryDecadesMenuList from '../components/GenreHistoryDecadesMenuList';

const GenreHistoryDecadesMenuContainer = () => {
    // IDLE, STARTED, SUCCEED, FAILED
    const [ fetchStatus, updateFetchStatus ] = useState('IDLE');
    const [ fetchError, setFetchError ] = useState(null);
    const [ decadesList, setDecadesList ] = useState([]);

    useEffect(() => {
      updateFetchStatus('STARTED');

      fetch('https://fast-lowlands-42351.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
          setDecadesList(data);
          updateFetchStatus('SUCCEED');
        })
        .catch(err => { // new Error('message') -> err.message
          setFetchError(err.message);
          updateFetchStatus('FAILED');
        })
    }, []);

    return (
      <GenreHistoryDecadesMenuList
        fetchStatus={fetchStatus}
        decadesList={decadesList}
        fetchError={fetchError}
      />
    )
  }

  export default GenreHistoryDecadesMenuContainer;