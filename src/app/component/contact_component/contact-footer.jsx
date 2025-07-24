export default function ContactFooter() {
    return (
        <footer id="contact-footer">
            <section className="cf-top">
                <div className="cft__left">
                    <h1 className="cf-title">Hit us up today!</h1>
                    <p className="cf-quote">We&apos;re looking forward <br /> to work with you</p>
                </div>
                <div className="contact-split-line"></div>
                <div className="cft__right">
                    <form className="cft__form">
                        <div className="cft__form-inputs">
                            <input className="cft__form-inputs-item" type="text" placeholder="Enter your name" name="" id="" />   
                            <input className="cft__form-inputs-item" type="email" placeholder="Enter your Email address" name="" id="" />
                        </div>
                        <div className="cft__form-textarea">
                            <textarea placeholder="Enter your Message" name="" id="" />
                        </div>
                        <div className="cft__form-confirm">
                            <div className="cft__form-checkbox">
                                <input type="checkbox" name="" id="" />
                                <label className="cft__form-checkbox-label" htmlFor="">I accept <span className="font-extrabold">Terms of Service</span></label>
                            </div>
                            <button className="cft__form-button">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="cf-bottom">
                <figure>
                    <img src="/Tem3.png" alt="" />
                </figure>
            </section>
        </footer>
    );
}