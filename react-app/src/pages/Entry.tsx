import '../styles/Entry.css'
import { Link } from 'react-router-dom';
import Resume from '../components/Resume'
import flower1 from '../assets/flower1-dark.png'
import flower2 from '../assets/flower2-dark.png'
import flower3 from '../assets/flower3-dark.png'
import { useNavigate } from 'react-router-dom';

export default function Entry() {
    const navigate = useNavigate();
    function goToMain() {
        navigate('/home');
    }

    return (
        <div className="entrypoint">
            <div className="entrypoint-content">
                <h1>Hi, I'm Emma Xing</h1>
                <em><p>I'm studying CS @ UWaterloo</p>
                <p>I'm a full stack developer interested in building community and exploring machine learning and AI.</p></em>
                <div>
                <p>Find me @</p>
                    <a href="mailto:emma.xing@uwaterloo.ca" target="_blank" rel="noopener noreferrer">emma.xing@uwaterloo.ca</a>
                    <a href="https://www.linkedin.com/in/emmaxing/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/emma-x1" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://x.com/emm4x3" target="_blank" rel="noopener noreferrer">X</a>
                </div>
                <a href="emma-xing-resume.docx.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                <div className="entrypoint-button">
                    {/* <button onClick={goToMain}>View more 
                        <div className="entrypoint-button-logo"><img src="logo-light.png"></img></div>
                    </button> */}
                </div>
            </div>
            <div className="entrypoint-flowers">
                <img src={flower1}></img>
                <img src={flower2}></img>
                <img src={flower3}></img>
                <img src={flower1}></img>
                <img src={flower2}></img>
            </div>
        </div>
    );
}