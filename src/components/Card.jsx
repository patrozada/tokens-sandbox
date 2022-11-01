import React from 'react';
import './Card.css';

export default function Card({data}) {

  return (
    <div className='card' >
        <h3 className='card__title'>{data.title}</h3>
            <div className='card__image--container' 
                style={{backgroundImage: `url(${data.image})`}}
                >
                <span className= 'card__image--mask'/> 
       
            </div>
        <span className='card__tags'>{data.tags.map((tag)=> <div className='card__tag'>{tag}</div>)}</span>
        <p className='card__content'>{data.content}</p>
    </div>
  )
}
