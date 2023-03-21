import '../scss/components/_card.scss';
//import styles from '../styles/Card.module.css'
import { useState } from 'react';


export default function CardList({index, title, body, body2, ull, ull2, ull3, ull4, ull5, ull6, oll, oll2, oll3}) {
  

  return (
    <div className='card' key={index} > 
        <div className='cardtop'>
            <h2 className='h2two'>{title}</h2>
        </div>
        <div className='servicecard'>
            {/* <img src={pic} alt="hello" width={128} height={128}/> */}
            <ul>
	            <li>
                    <p>{body}</p>
                    <p>{body2}</p>
                    <ul>
                        <li>{ull}</li>
                        <li>{ull2}</li>
                        <li>{ull3}</li>
                        <li>{ull4}</li>
                        <li>{ull5}</li>
                        <li>{ull6}</li>
                    </ul>
                    <ol>
                        <li>{oll}</li>
                        <li>{oll2}</li>
                        <li>{oll3}</li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
    )};