import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss';

const Contact = () => {
    return (
        <div id="contact" className="">
            <h1 className="title-spaced">Get in touch <FontAwesomeIcon icon={faHandSpock} /></h1>
            <form action="" className="container">
                <div className="contact__form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="name">Number</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="name">Deadline</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    
                </div>
                <div className="fade__button__wrapper">
                    <button className="fade-button">Submit <FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </form>
        </div>
    )
}

export default Contact;