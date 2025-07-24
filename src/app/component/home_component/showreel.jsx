export default function Showreel() {
    return (
        <section id="showreel">
            <h1 className="showreel__title">Metama Showreel 2024</h1>
            <div className="showreel__video">
                <iframe 
                    width="560" height="315" 
                    src="https://www.youtube.com/embed/dCFBcGSqkbg?si=fgozmrDc-T92JAhY" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            
            </div>
        </section>
    );
}