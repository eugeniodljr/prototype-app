import AboutHolder from "./styled/AboutHolder.styled";
import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();
    return(
        <AboutHolder>
            <div id='btn-about'>
                <button onClick={()=>navigate(-1)}></button>
            </div>    
            <h2>About</h2>

            <p>
                Hi! Jong here, and welcome to Legere! You'll find a good list of<br/> amazing oriental stories here -- some are recommended, others completed,<br/> ongoing, and even a few underrated hidden gems waiting to be<br/> unearthed.
            </p>
            
            <p>
                Enjoy your stay, and come back as many times as you like!
            </p>
            <br/><br/>
            <img src='https://scans-complete.hydaelyn.us/manga/The-Breaker-New-Waves/0004-001.png' alt='guy-chillin.jpg'/>
        </AboutHolder>
    )
}

export default About;