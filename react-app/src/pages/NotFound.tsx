import '../styles/Entry.css'
import flower1 from '../assets/flower1-dark.png'
import flower2 from '../assets/flower2-dark.png'
import flower3 from '../assets/flower3-dark.png'

export default function NotFound() {

    return (
        <div className="entrypoint">
            <div className="entrypoint-content">
                <h1>Page Not Found</h1>
                <a href="/">Try again?</a>
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
            </div>
        </div>
    );
}