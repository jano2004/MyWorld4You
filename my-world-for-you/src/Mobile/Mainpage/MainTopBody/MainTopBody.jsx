import './MainTopBody.css';
import backgroundImage from '../../Images/main_body_background.jpg';
import profilImage from '../../Images/aboutMe_image.png';

function MainTopBody() {

    const sectionStyle =  {
        backgroundImage: `url(${backgroundImage})`
    }

    return (
        <section className='mobile_body_top_main_section' style={sectionStyle}>
            <img src={profilImage} alt='Loading...'/>
        </section>
    )
}

export default MainTopBody;