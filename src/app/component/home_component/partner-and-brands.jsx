
import LogosForRotate from "./logos-rotunda"
export default function PartnersAndBrands() {
    const bannerIterations = 4;
    const logosTargetTop = [
        "Stanible.png",
        "Tiktok.png",
        "Meta.png",
        "SnapAR.png",
        "PDAX.png"
    ]
    const logosTargetBottom = [
        "FibaWorldcup.png",
        "Grab.png",
        "Netflix.png",
        "Spotify.png",
        "Jollibee.png"
    ]
    const LogosList = ({ logos }) => (
        <>
            {Array.from({ length: bannerIterations }).map((_, index) => (
                <ul key={index} className="pab__logos">
                    {logos.map((target) => (
                        <LogosForRotate key={target} targetImage={target} />
                    ))}
                </ul>
            ))}
        </>
    );

    return (
        <section id="partners-and-brands">
            <div className="pab__top-bg">
                <h1 className="pab__title">Partners & Brands</h1>
                <div className="pab__logos-container">
                    <div className="pab__logos-wrapper">
                        <LogosList logos={logosTargetTop} />
                    </div>
                </div>
                <div className="pab__logos-container">
                    <div className="pab__logos-wrapper animation-delay">
                        <LogosList logos={logosTargetBottom} />
                    </div>
                </div>
            </div>
        </section>
    );
}