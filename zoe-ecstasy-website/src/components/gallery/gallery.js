import './gallery.css';
import Carousel from 'react-material-ui-carousel';

function Gallery() {
    return (
        <div id='galleryContainer'>
            <Carousel>
                <img src="https://i.scdn.co/image/ab6761610000e5eb9926911467ac3b1acbd75dde" alt="Zoe Ecstasy" />
                <img src="https://i1.sndcdn.com/avatars-SrQelhlz6zVA3myV-iVj53A-t500x500.jpg" alt="Zoe Ecstasy" />
                <img src="https://i.scdn.co/image/ab67616d0000b2733cdd62c301f4314ed1e5113d" alt="i love the boy single cover" />
            </Carousel>
        </div>

    )
}

export default Gallery