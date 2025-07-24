export default function HomeFooter() {
    return (
        <footer id="home-footer">
            <section className="hf-top">
                <div className="hft__left">
                    <h1 className="hf-title">Hit us up today!</h1>
                    <p className="hf-quote">We&apos;re looking forward <br /> to work with you</p>
                </div>
                <div className="split-line"></div>
                <div className="hft__right">
                    <form className="hft__form">
                        <div className="hft__form-inputs">
                            <input className="hft__form-inputs-item" type="text" placeholder="Enter your name" name="" id="" />   
                            <input className="hft__form-inputs-item" type="email" placeholder="Enter your Email address" name="" id="" />
                        </div>
                        <div className="hft__form-textarea">
                            <textarea placeholder="Enter your Message" name="" id="" />
                        </div>
                        <div className="hft__form-confirm">
                            <div className="hft__form-checkbox">
                                <input type="checkbox" name="" id="" />
                                <label className="hft__form-checkbox-label" htmlFor="">I accept <span className="font-extrabold">Terms of Service</span></label>
                            </div>
                            <button className="hft__form-button">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* <section className="hf-bottom">
                <div className="hfb-socials">
                    <figure className="hfb__logo-container">
                        <img className="hfb__logo-image" src="" alt="" />
                    </figure>
                    <ul className="hfb__social-buttons">
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                    </ul>
                </div>
                <div className="hfb__split-line"></div>
                <div className="hfb-works">
                    <ul className="hfb__work-links">
                        <li><a href="">AR filters</a></li>
                        <li><a href="">3D Production</a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
                
            </section> */}
            <section className="hf-bottom">
                <figure>
                    <img src="/Tem.png" alt="" />
                </figure>
            </section>
        </footer>
    );
}