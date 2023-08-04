import './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Social() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/zoeecstasy/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-instagram" className="socialIcon" />
            </a>
        </div>
    );
}

export default Social;