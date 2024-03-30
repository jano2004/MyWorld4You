import './Coaching.css';
import transformationImage from '../../Images/transformation_coaching_png.png';
import meditationImage from '../../Images/meditation_coaching_image.png';
import travelImage from '../../Images/travel_coaching_image.png';

function Coaching() {

    const transformationStyle =  {
        backgroundImage: `url(${transformationImage})`
    }

    const meditationStyle =  {
        backgroundImage: `url(${meditationImage})`
    }

    const travelStyle =  {
        backgroundImage: `url(${travelImage})`
    }

    return (
        <section className='mobile_main_coaching_section'>
            <div className='mobile_coaching_transformation' style={transformationStyle}>
                <div className='mobile_coaching_transformation_header'>
                    <p>TRANSFORMATIONS-<br></br>COACHING</p>
                </div>
                <div className='mobile_coaching_transformation_text'>
                    <p>Wachstum und <br></br>Persönlichkeits-<br></br>enwicklung zur <br></br>emotionalen <br></br>Freiheit!</p>
                </div>
            </div>
            <div className='mobile_coaching_meditation' style={meditationStyle}>
                <div className='mobile_coaching_meditation_header'>
                    <p>MEDITATION</p>
                </div>
                <div className='mobile_coaching_meditation_text'>
                    <p>Für emotionales Wohlbefinden und Stärkung des Immunsystems.</p>
                </div>
            </div>
            <div className='mobile_coaching_travel' style={travelStyle}>
                <div className='mobile_coaching_travel_header'>
                    <p>REISE-COACHING</p>
                </div>
                <div className='mobile_coaching_travel_text'>
                    <p>Sicher und Selbstbewusst  die ganze Welt bereisen!</p>
                </div>
            </div>
        </section>
    )
}

export default Coaching;