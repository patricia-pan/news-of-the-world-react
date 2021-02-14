import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';

import '../styling/style.css';

require('dotenv').config()
// process.env.REACT_APP_API_KEY

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {

    const [articles, setArticles] = useState([])

    useEffect( () => {
        fetch(`http://newsapi.org/v2/everything?domains=wsj.com&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(responseData => {
            // responseData = Object.values(rData) // Converts object of objects to array of objects.
            // console.log(responseData.articles) // responseData
            // console.log(rData[0].name['name-USen']) // responseData
            // let characterNames = rData.map( (char, i) => {
            //   return char.name['name-USen']
            // })
            // let articles = Object.values(responseData.articles)
            console.log(responseData.articles)
            setArticles(responseData.articles)
        })
    }, [])

    return (
        // Router for setting routes
        <Router>
            <div className='app'>
                <Landing />
                <Display articles={articles}/>
            </div>
        </Router>
    )
};