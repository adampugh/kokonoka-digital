import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";

import ContactModal from '../ContactModal';

import './Contact.scss';
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
    const form = useRef();
    const [phoneValue, setPhoneValue] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    

    const sendEmail = (e) => {
        e.preventDefault();
        setDisabled(true);
        
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                setOpenModal(true);
                clearForm()
                setDisabled(false);
                setTimeout(() => setOpenModal(false), 3000);
            }, (error) => {

            });
    }

    const clearForm = () => {
        setPhoneValue()
        setStartDate(new Date())
        setName('')
        setMessage('')
        setEmail('')
    }

    

    return (
        <div id="contact" className="">
            <h1 className="title-spaced">Get in touch <FontAwesomeIcon icon={faHandSpock} /></h1>
            <form ref={form} onSubmit={sendEmail} className="container">
                <div className="contact__form">
                    <div>
                        <label>Company Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter company name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="number">Phone Number</label>
                        <PhoneInput placeholder="Enter phone number"
                            value={phoneValue}
                            onChange={setPhoneValue}
                            defaultCountry="US" name="number"/>
                    </div>
                    <div>
                        <label htmlFor="deadline">Deadline</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="deadline"/>
                    </div>
                </div>
                <div className="contact__textarea">
                    <label htmlFor="message">Project Enquiry</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Enter project summary" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div className="fade__button__wrapper">
                    <button className="fade-button contact__button" type="submit" disabled={disabled}>Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </form>
            { openModal && <ContactModal openModal={openModal} setOpenModal={setOpenModal} />}
        </div>
    )
}

export default Contact;