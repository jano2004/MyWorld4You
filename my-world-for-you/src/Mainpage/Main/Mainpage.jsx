import './Mainpage.css';
import Header from "../Header/Header";
import MainTopBody from "../MainTopBody/MainTopBody";
import AboutMe from "../AboutMe/AboutMe";
import Coachings from "../Coachings/Coachings";

function Mainpage() {
    return (
        <div>
            <div className='header'>
                <Header />
            </div>
            <MainTopBody />
            <AboutMe />
            <Coachings />
        </div>
    )
}

export default Mainpage;