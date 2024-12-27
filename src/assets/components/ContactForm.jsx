import React from 'react';
import "../css/Form.css";

const ContactForm = () => {
    return (
        <>
            <div className="container">
                <div className="form_area">
                    <p className="title">Send us a message</p>
                    <form action="">
                        <div className="form_group">
                            <label className="sub_title" htmlFor="name">Name</label>
                            <input placeholder="Enter your full name" className="form_style" type="text" />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="email">Email</label>
                            <input placeholder="Enter your email" id="email" className="form_style" type="email" />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="message">Message</label>
                            <input placeholder="Enter your message" className="form_style" type="text" />
                        </div>
                        <div>
                            <button className="btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
