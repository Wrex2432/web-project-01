export default function AboutFooter() {
    return (
        <footer id="about-footer">
            <section className="af-top">
                <div className="aft__left">
                    <h1 className="af-title">Hit us up today!</h1>
                    <p className="af-quote">We&apos;re looking forward <br /> to work with you</p>
                </div>
                <div className="about-split-line"></div>
                <div className="aft__right">
                    <form className="aft__form">
                        <div className="aft__form-inputs">
                            <input className="aft__form-inputs-item" type="text" placeholder="Enter your name" name="" id="" />   
                            <input className="aft__form-inputs-item" type="email" placeholder="Enter your Email address" name="" id="" />
                        </div>
                        <div className="aft__form-textarea">
                            <textarea placeholder="Enter your Message" name="" id="" />
                        </div>
                        <div className="aft__form-confirm">
                            <div className="aft__form-checkbox">
                                <input type="checkbox" name="" id="" />
                                <label className="aft__form-checkbox-label" htmlFor="">I accept <span className="font-extrabold">Terms of Service</span></label>
                            </div>
                            <button className="aft__form-button">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="af-bottom">
                <figure>
                    <img src="/Tem2.png" alt="" />
                </figure>
            </section>
        </footer>
    );
}