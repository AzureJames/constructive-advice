import '../scss/components/_card.scss';
//import styles from '../styles/Card.module.css'
import { useState } from 'react';


export default function Card({index, title, body, body2, pic}) {
    const arrow = {
        color: 'whitesmoke',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px'
    }
  
    const [activeCard, setActiveCard] = useState("");
    const [arrowContent, setArrowContent] = useState("↓");
    function randomBio () {
        let rnd = 0;
        switch(rnd){
            case 0:
                setActiveCard("Highly motivated, ambitious & charismatic Web Developer bringing enthusiasm and detailed understanding of various programming languages to webpage planning, development and maintenance. Experience designing and developing sites from concept to rollout. I enjoy creating products with the user in mind, focusing on smooth processes and experiences. My interests include guerrilla usability testing, baking, architecture, gamification, Tilda Swinton, 3D printing, open-source software, modelling and rendering in Blender, Dungeon and Dragons, making music in Ableton Live, futurism, and VR/AR.");
                break;
            default:
                setActiveCard("");
                break;
        }
       setArrowContent("↑");
    }
  return (
    <div className='card' key={index} onClick={ () => {if(activeCard === ""){randomBio();} else {setActiveCard("");setArrowContent("⬇");}} }> 
        <div className='cardtop'>
            <h2 className='h2two'>{title}</h2>
        </div>
        <div className='servicecard'>
            <img src={pic} alt="hello" width={128} height={128}/>
            <ul>
	            <li>
                    <p>{body}</p>
                    <p>{body2}</p>
                    <div className='arrowd' >
                        <button type='button' style={arrow} aria-roledescription="Click to show or hide developer description">{arrowContent}</button> 
                    </div>
                    <p>{activeCard}</p>
                </li>
            </ul>
        </div>
    </div>
    )};