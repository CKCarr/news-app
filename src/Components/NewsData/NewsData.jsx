import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsAllData from '../NewsAllData/NewsAllData';

const NewsData = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get('http://api-creator-server.vercel.app/news-data')
            .then((response) => {
                setNewsData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching News Data: ', error);
            });
    }, []);

    console.log(newsData);

  return (
    <div className='news_data_main py-8 lg:py-20'>
        <h1 className='text-3xl lg:text-left text-center lg:text-5xl font-bold pb-5 text-white'>
            All News Data
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {newsData.map(data => <NewsAllData key={data._id} data={data} />)}
        </div>
    </div>
    )
}

export default NewsData;
