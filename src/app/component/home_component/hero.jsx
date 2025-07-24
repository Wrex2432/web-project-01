import { InteractiveSet1 } from "../physicsObjects/InteractiveSet1";

export default function Hero() {
    return (
        <section id="hero" className="noise">
            <aside className="hero__banner">
                <div className="hero__banner-elements">
                    <figure>
                        <img src="/Headline.png" alt="Metama Headline" width="773" height="342"/>
                    </figure>
                    <p className="text-white">
                        <span className="text-nowrap">We’re in the business of ideas. <br />Technology is just our tool </span> <br />
                        <span className="text-nowrap">in expressing them in this brave <br />new world of the Metaverse </span> <br />
                        <span className="text-nowrap">to provide new experiences of <br />brands to people.</span>
                        
                    </p>
                </div>
            </aside>
            {/* Placeholder for canvas on 3D */}
            {/* <div className="canvas">
                <figure>
                    <img src="/placeholder3D01.png" alt="" />
                </figure>
            </div> */}
            {/* <InteractiveSet1/>              */}
            {/* <InteractiveSet1/>              */}
            <div className="canvas">
                <figure>
                    <img src="/placeholder3D02.png" alt="" />
                </figure>             
            </div>
            <div className="canvas">
                <figure>
                    <img src="/placeholder3D03.png" alt="" />
                </figure>             
            </div>

        </section>
    );
} 