import '../scss/components/_card.scss';
//import styles from '../styles/Card.module.css'
import { useState } from 'react';


export default function Card({index, title, body, body2}) {
  

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
                </li>
            </ul>
        </div>
    </div>
    )};