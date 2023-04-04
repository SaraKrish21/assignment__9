import React from 'react'
import './Card.css'

const Card = ({title, desc, cont}) => {
    return(
        <div className = 'container'>
            <h1>{title}</h1>
            <div>{desc}</div>
            <body>
                <p>
                    {cont}
                </p>
            </body>
        </div>
  );  };

  export default Card;

