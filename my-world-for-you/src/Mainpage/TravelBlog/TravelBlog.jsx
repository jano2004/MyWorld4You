import './TravelBlog.css'
import blogImage from '../../Images/blog_image.png'

function TravelBlog() {

    const sectionStyle = {
        backgroundImage: `url(${blogImage})`
    };

    return (
        <section className='main_travel_blog_section'>
            <div className='main_travel_blog_div'>
                <div className='main_travel_blog_div_text_section'>
                    <div className='main_travel_blog_div_text_section_header'>
                        <p>MEIN PERSÖNLICHER REISEBLOG</p>
                    </div>
                    <div className='main_travel_blog_div_text_section_second_header'>
                        <p>Zu dritt einmal um die Welt!</p>
                    </div>
                    <div className='main_travel_blog_div_text_section_text'>
                        <p>Ich war mit meinen beiden schulpflichtigen Kindern alleine für ein ganzes Jahr auf Weltreise.
                            Meine Eindrücke und Erfahrungen <br></br>
                            habe ich in meinem Reiseblog festgehalten um euch zu <br></br>
                            inspieren und eventuell zu unterstützen.<br></br>
                            Reisen ist eine meiner größten Leidenschaften.<br></br><br></br>
                            Ich liebe es neue Menschen, Länder und Kulturen kennen zu lernen. Ich liebe die Natur in all ihren Ausdrucksformen.<br></br>
                            <br></br>
                            Es ist mir eine Herzensangelegenheit dir zu zeigen, dass die Welt <br></br>
                            ein Ort voller Chancen und Wunder ist.</p>
                    </div>
                </div>
                <div className='main_travel_blog_div_image_section'>
                    <div className='main_travel_blog_div_image_section_img' style={sectionStyle}>
                        <button className='main_travel_blog_div_image_section'>ZU MEINEM BLOG</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TravelBlog;