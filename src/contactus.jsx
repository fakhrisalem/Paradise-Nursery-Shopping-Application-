import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="image-container left">
                <img src="https://i.pinimg.com/originals/f6/fc/29/f6fc295ea9c48341c190767e9e09d282.gif" alt="Left" />
            </div>
            <div className="form-container">
                <h2>Contact Us</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="image-container right">
                <img src="https://i.pinimg.com/originals/27/66/ab/2766ab19e30e26a3dcf20273d3f0faa9.gif" alt="Right" />
            </div>
        </div>
    );
};

export default ContactUs;