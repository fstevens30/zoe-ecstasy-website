import './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube, faApple, faSoundcloud, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Social() {
    return (
        <div className="social">
            <a href="https://open.spotify.com/artist/6ujW3pX50DpH6Cu9MeX8nq" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSpotify} className="socialIcon" />
            </a>
            <a href="https://music.youtube.com/channel/UCE7ewWTxgYjsJwQMbh_QWUQ?feature=share" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="socialIcon" />
            </a>
            <a href="https://music.apple.com/nz/artist/zoe-ecstasy/1650651815" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faApple} className="socialIcon" />
            </a>
            <a href="https://soundcloud.com/zoeecstasy" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSoundcloud} className="socialIcon" />
            </a>
            <a href="https://www.instagram.com/zoeecstasy/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
            </a>
        </div>
    );
}

export default Social;