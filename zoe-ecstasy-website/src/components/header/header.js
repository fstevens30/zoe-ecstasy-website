import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSoundcloud, faSpotify } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <h1>Zoe Ecstasy</h1>
            </div>
            <div className="headerSocialLinks">
                <a className="socialIcon" href="https://www.instagram.com/zoeecstasy/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="socialIcon" href="https://soundcloud.com/zoeecstasy" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faSoundcloud} />
                </a>
                <a className="socialIcon" href="https://open.spotify.com/artist/6ujW3pX50DpH6Cu9MeX8nq" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faSpotify} />
                </a>
            </div>
        </div>
    );
}

export default Header;