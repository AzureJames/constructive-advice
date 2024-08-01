import '../scss/components/_bannercard.scss';
//import styles from '../styles/Card.module.css'
import { useState } from 'react';


export default function Card({index, title, body, body2}) {
    const arrow = {
        color: 'whitesmoke',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px'
    }
  
    
  return (
    <>
    <div className='flex'>
        <div className='bannercard' key={index} > 
            <div className='cardtop'>
                <h2 className='h2two' style={{textAlign:"center"}}>{title}</h2>
            </div>
            <div className='servicecard'>
                {/* <img src={pic} alt="hello" width={128} height={128}/> */}
                <ul>
                    <li>
                        <p style={{fontWeight: 'bold', textAlign: 'center'}}>{body}</p>
                        <p style={{fontStyle: "italic", textAlign: 'center'}}>{body2}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <h2 className='h2two' style={{color:"white", textAlign:"center", marginTop:"20vh", lineHeight:'1'}}>Take the First Step with Me!</h2>
    </>
    )};