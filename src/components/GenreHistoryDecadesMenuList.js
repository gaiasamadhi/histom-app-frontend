import React, {useState} from 'react';
import GenreHistoryDecadesMenu from './GenreHistoryDecadesMenu';
import {useRouteMatch} from 'react-router-dom';

const GenreHistoryDecadesMenuList = (props) => {

  const pictures = [
    {
      decade: 1950,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789616/1950.png'
    },
    {
      decade: 1960,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789618/1960.png'
    },
    {
      decade: 1970,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789616/1970.png'
    },
    {
      decade: 1980,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789616/1980.png'
    },
    {
      decade: 1990,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789617/1990.png'
    },
    {
      decade: 2000,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789616/2000.png'
    },
    {
      decade: 2010,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789617/2010.png'
    },
    {
      decade: 2020,
      url:'https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789617/2020.png'
    }
  ];

    const {
        fetchStatus,
        decadesList,
        fetchError
    } = props;

    const match = useRouteMatch(); 

    const decades = [];
    
    decadesList.forEach(decade => {
        let newDecade = Math.floor(decade.decade/10);
        newDecade = newDecade * 10;
        if (!decades.includes(newDecade)){
          decades.push(newDecade);
        }
      });
    
    decades.sort();

    console.log(decades);

    let items = decades.map(decade => {
      const url = pictures.find(element => element.decade === decade).url;
      return {"href":`${match.url}/${decade}`, "image":`url(${url})`};
    })
    let center = {"image": "url(https://res.cloudinary.com/dz4vk6djr/image/upload/v1593789204/decade.png)"};

    if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
        return (
          <div className="decades-list">
            Loading...
          </div>
        )
      }

      if (fetchStatus === 'SUCCEED') {
        return (
          <div className="decades-list">
            <pre>
              <GenreHistoryDecadesMenu items={items}>
              {center}
              </GenreHistoryDecadesMenu>
            </pre>
          </div>
        )
      }

      // ERROR
      return (
        <div className="decades-list">
          Sorry, error occurred:

          <pre>
            {fetchError}
          </pre>
        </div>
      );
};

export default GenreHistoryDecadesMenuList;