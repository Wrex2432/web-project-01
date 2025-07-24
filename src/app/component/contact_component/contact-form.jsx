'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', termsAccepted: false });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            setSuccess('You must accept the Terms of Service.');
            return;
        }
        setLoading(true);
        setSuccess(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess('Message sent successfully!');
                setFormData({ name: '', email: '', message: '', termsAccepted: false });
                setShowPopup(true);
            } else {
                setSuccess('Failed to send message.');
            }
        } catch (error) {
            setSuccess('An error occurred.');
        }
        setLoading(false);
    };

    return (
        <section id="contact-form">
            <div className="cf__top-layer">
                <div className="cf__left">
                    <div className="cfl__title">
                        <h1>Hit us up</h1>
                        <img src="/contact/contact_text.png" alt="" />
                    </div>
                    <form className="cfl__forms" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                        <input type="email" placeholder="Enter your Email address" name="email" value={formData.email} onChange={handleChange} required />
                        <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
                        <div className="cfl__checkbox">
                            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                            <label className="cfl__form-checkbox-label">I accept <span className="font-extrabold">Terms of Service</span></label>
                        </div>
                        <div className="cfl__submit-button">
                            <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
                        </div>
                    </form>
                    {/* {success && <p className="mt-4 text-center text-sm text-gray-700">{success}</p>} */}
                </div>
                <div className="cf__right">
                    <div className="front-card">
                        <figure className="front-card-figure">
                            <img src="/contact/front-card/front-card-avatar.png" alt="Kim" />
                            <img src="/contact/front-card/front-card-name.png" alt="Kim" />
                        </figure>
                    </div>
                    <div className="back-card">
                        <figure className="back-card-figure">
                            <img src="/contact/back-card/back-card-avatar.png" alt="Kim" />
                            <img src="/contact/back-card/back-card-name.png" alt="Kim" />
                        </figure>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg font-semibold">Message Sent Successfully!</p>
                        <button onClick={() => setShowPopup(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
                    </div>
                </div>
            )}
        </section>
    );
}