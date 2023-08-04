import './header.css';

function Header() {
    return (
        <div className="header">
            <img src="./assets/heart.png" alt="" className="headerImg" />
            <div className="headerTitles">
                <span className="headerTitleMain">zoe ecstasy</span>
                <span className="headerTitleSub">musician & songwriter</span>
            </div>
        </div>
    );
}

export default Header;