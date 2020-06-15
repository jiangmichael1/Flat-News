import React from 'react';

const Article = (props) => {
    return (  
        <div className='article'>
            <h4>{props.title}</h4>
                <p>{props.author}</p>
                <h6>{props.description}</h6>
                <img className='articleImage' src={props.urlToImage}/>
        </div>
    );
}
 
export default Article;