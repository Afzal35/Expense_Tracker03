import React from "react";
import { useSelector } from "react-redux";
import homeLogoTodo from "../../homeLogotodo.svg";
import "./About.css";

const About = () => {
    const bgColor = useSelector(state => state.theme.bgColor);
    return (<React.Fragment>
        <section className={bgColor === false ? "about" : "about about_dark"}>
            <div className="heading">
                <h1>About Us</h1>
                <img src={homeLogoTodo} alt="logo" />
            </div>
            <div className="main">
                <p>I'm Afzal Alam. B.tech. graduate from All Saints College of Technology, Bhopal.
                    I have knowledge of web dev skill.</p>
                <h3>Skills</h3>
                <p>HTML, CSS, Javascript, Reactjs, Redux, Python, Git/Github</p>
            </div>
        </section>
    </React.Fragment>)
}

export default About;