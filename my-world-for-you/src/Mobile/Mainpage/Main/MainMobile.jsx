import './Main.css';
import Header from "../Header/Header";
import MainTopBody from "../MainTopBody/MainTopBody";
import Spaceholder from "../Spaceholder/Spaceholder";
import Headlines from "../Headlines/Headlines";
import AboutMe from "../AboutMe/AboutMe";
import Coaching from "../Coaching/Coaching";

function MainMobile() {
    return (
        <div>
            <Header />
            <MainTopBody />
            <Spaceholder />
            <Headlines headline='ABOUT ME'/>
            <AboutMe />
            <Spaceholder />
            <Headlines headline='COACHING' />
            <Coaching />
            <Spaceholder />
            <Headlines headline='MEIN REISEBLOG'/>
        </div>
    )
}

export default MainMobile;