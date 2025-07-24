export default function AboutPlayers() {
    return (
        // <section id="about-players" className="flex items-center justify-center bg-orange-100 w-full h-screen">
        <section id="about-players">
            <figure className="ap__header">
                <img src="/about/player_logo.png" alt="" />
                <img src="/about/player_header.png" alt="" />
            </figure>
            <figure className="ap__player-container">
                <img className="visual-bg" src="/about/player_visual.png" alt="" />
                <div className="ap__player-left">
                    <img src="/about/player_left.png" alt="left" />
                </div>
                <div className="ap__player-mid">
                    <figure className="ap__title">
                        <img src="/about/player_title-header.png" alt="" />
                        <img src="/about/player_title-desc.png" alt="" />
                    </figure>
                    <img className="" src="/about/player_mid.png" alt="mid" />
                </div>
                <div className="ap__player-right" >
                    <img src="/about/player_right.png" alt="right" />
                </div>
            </figure>
            {/* <nav className="ap__nav">
                <img src="/about/player_nav-title.png" alt="" />
                <img src="/about/player_nav.png" alt="" />
                </nav> */}
            <nav className="ap__nav">
                <img src="/about/player_nav-title.png" alt="" />
                <ul className="ap__nav-button-container">
                    <li><button><img src="/about/heads/A.png" alt="" /></button></li>
                    <li><button><img src="/about/heads/B.png" alt="" /></button></li>
                    <li><button><img src="/about/heads/C.png" alt="" /></button></li>
                    <li><button><img src="/about/heads/D.png" alt="" /></button></li>
                    <li><button><img src="/about/heads/E.png" alt="" /></button></li>
                </ul>
            </nav>
        </section>
    );
}