import './Mainpage.css';
import Header from "../Header/Header";
import MainTopBody from "../MainTopBody/MainTopBody";
import AboutMe from "../AboutMe/AboutMe";
import Coachings from "../Coachings/Coachings";
import Footer from "../Footer/Footer";
import TravelBlog from "../TravelBlog/TravelBlog";

function Mainpage() {
    return (
        <div>
            <div className='header'>
                <Header />
            </div>
            <MainTopBody />
            <AboutMe />
            <Coachings />
            <TravelBlog />
            <Footer />
        </div>
    )
}

export default Mainpage;