import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import './ContactModal.scss';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(9, 9, 9, 0.75)'
    },
    content: {
        background: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '40px 80px'
    },
};

const ConactModal = ({ openModal, setOpenModal }) => {
    const closeModal = () => { setOpenModal(false)}
    
    return (
        <Modal isOpen={openModal} 
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Email Sent Modal" className="contactModal" ariaHideApp={false}>
            <h1>Email Sent <FontAwesomeIcon icon={faSmile} /></h1>
            <p>Thank you. We will get back to you as soon as possible.</p>
        </Modal>
    )
}

export default ConactModal;