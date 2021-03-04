import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeading = () => {

    const [articles, setarticles] = useState([])

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2ad58bffed534bfea1717b976d2839d0'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setarticles(data.articles)
                console.log(data.articles);
            })
    }, [])
    return (
        <div>
            {
                <h1>Top Headlines: {articles.length}</h1>
            }
            {
                articles.map(article => <News article={article}>{article}</News>)
            }
            {/* {
                articles.map(article => <li>{article.author}</li>)
            } */}
        </div>

    );
};

export default TopHeading;