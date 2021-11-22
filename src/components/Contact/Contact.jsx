import React, { useContext, useRef, useState } from 'react';

import phone from '../../images/phone.png';
import email from '../../images/email.png';
import address from '../../images/address.png';
import emailjs from 'emailjs-com';

import './Contact.css';
import { ThemeContext } from '../../Context';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_yqbouop', 'template_q56bv2h', formRef.current, 'user_sqDp5A83m8NnFZk2zbB23')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className='c-icon'/>
                            +91 7003870759
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className='c-icon'/>
                            anirbanbanerjee844@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className='c-icon'/>
                            6/A/18 Bhagirathi lane, Serampore, Mahesh, Hooghly, Pin-712202, West Bengal, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always available
                        for freelancing if the right project comes along
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && '#333', color: darkMode && 'white' }} type="text" placeholder="Name" name="user_name"/>
                        <input style={{ backgroundColor: darkMode && '#333', color: darkMode && 'white' }} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{ backgroundColor: darkMode && '#333', color: darkMode && 'white' }} type="email" placeholder="Email" name="user_email"/>
                        <textarea style={{ backgroundColor: darkMode && '#333', color: darkMode && 'white' }} rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {
                            done && " Your message was sent.."
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
