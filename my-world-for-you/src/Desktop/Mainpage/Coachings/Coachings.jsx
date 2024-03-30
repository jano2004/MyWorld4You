import './Coachings.css'
import React, { useState, useRef, useEffect } from 'react';
import transformationIcon from '../../Images/transformation_coaching_icon.png';
import meditationIcon from '../../Images/meditation_coaching_icon.png';
import travelIcon from '../../Images/travel_coaching_icon.png';

function Coachings() {
    return (
        <section className='main_coaching_section'>
            <div className='main_coaching_div'>
                <div className='second_coaching_container'>
                    <div>
                        <h1>MEDITATION</h1>
                        <img src={meditationIcon}/>
                    </div>
                    <p>Für emotionales <br></br>Wohlbefinden und <br></br>Stärkung des <br></br>Immunsystems.</p>
                </div>
                <div className='main_coaching_container'>
                    <div>
                        <h1>TRANSFORMATIONS-<br></br>COACHING</h1>
                        <img src={transformationIcon}/>
                    </div>
                    <p>Wachstum und <br></br>Persönlichkeits-<br></br>enwicklung zur <br></br>emotionalen Freiheit!<br></br>&nbsp;</p>
                </div>
                <div className='second_coaching_container'>
                    <div>
                        <h1>REISE-COACHING</h1>
                        <img src={travelIcon}/>
                    </div>
                    <p>Sicher und <br></br>Selbstbewusst <br></br>die Welt bereisen!<br></br>&nbsp;</p>
                </div>
            </div>
        </section>
    )
}

export default Coachings;