import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss';

// yandex blocked account ???

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => console.log(result), (error) => console.log(error))
    }

    return (
        <div id="contact" className="">
            <h1 className="title-spaced">Get in touch <FontAwesomeIcon icon={faHandSpock} /></h1>
            <form ref={form} onSubmit={sendEmail} className="container">
                <div className="contact__form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="number">Number</label>
                        <input type="number" name="number" id="number"/>
                    </div>
                    <div>
                        <label htmlFor="x">Deadline</label>
                        <input type="text" name="x" id="x"/>
                    </div>
                </div>
                <div className="fade__button__wrapper">
                    <button className="fade-button" type="submit">Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </form>
        </div>
    )
}

export default Contact;