import React from 'react';
import "../css/Form.css";
import emailjs from "@emailjs/browser";
const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        alert("submited");
        emailjs.sendForm("service_zdebejf", "template_ac20z2m", e.target, "LJdNbJzB72B0ya1b6");
    }

    return (
        <>
            <div className="container">
                <div className="form_area">
                    <p className="title">Send us a message</p>
                    <form onSubmit={sendEmail}>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="email">Email</label>
                            <input name='emailFrom' placeholder="Enter your email" id="email" className="form_style" type="email" />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="message">Message</label>
                            <input name='message' placeholder="Enter your message" className="form_style" type="text" />
                        </div>
                        <div>
                            <button type='submit' className="btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
