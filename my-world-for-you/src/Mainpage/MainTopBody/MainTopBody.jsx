import './MainTopBody.css';
import backgroundImage from '../../Images/main_body_background.jpg';

function MainTopBody() {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <section className='main_about_me_section'>
            <div className='main_top_body_section' style={sectionStyle}>
                <div className='main_top_body_div_text'>
                    <p>MY WORLD FOR YOU</p>
                </div>
            </div>
        </section>
    );
}


export default MainTopBody;