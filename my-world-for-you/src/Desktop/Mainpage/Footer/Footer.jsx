import './Footer.css'
import facebookIcon from '../../Images/Icons/facebook_icon.png'
import xIcon from '../../Images/Icons/x_icon.png'

function Footer() {
    return (
        <section className='main_footer_section'>
            <section className='main_footer_section_left'>
                <div className='main_footer_div_top_left'>
                    <button><img src={facebookIcon}/></button>
                    <button><img src={xIcon}/></button>
                </div>
                <div className='main_footer_div_bottom_left'>
                    <a><u>Impressum</u></a><a><u>Datenschutz</u></a><a><u>Kontakt</u></a>
                </div>
            </section>
            <section className='main_footer_section_right'>
                <div className='main_footer_div_top_right'>
                    <div className='main_footer_div_top_right_container'>
                        <input type='text' placeholder='E-Mail'/>
                        <button>ABONNIEREN</button>
                    </div>
                </div>
                <div className='main_footer_div_bottom_right'>
                    <div className='main_footer_div_bottom_right_placeholder'></div>
                    <p>Abonniere jetzt meinen Newsletter um nichts mehr zu verpassen!</p>
                </div>
            </section>
        </section>
    )
}

export default Footer;