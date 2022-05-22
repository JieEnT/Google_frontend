import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = props => {
    const content = (
        // Style prop for adding of inline-styles
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form
                // This onSubmit statement over here prevents the automatic refresh of the 
                // webpage that usually happens when one submits the form 
                onSubmit={
                    props.onSubmit ? props.onSubmit : event => event.preventDefault()
                }
            >
                {/* We separate the inputs of the form as well as the submit buttons of the form into content and footer but we have to wrap them with divs */}
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {/* Will render a button that closes the modal */}
                    {props.footer}
                </footer>
            </form>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

const Modal = props => {
    return (
        <React.Fragment>
            {/* Backdrop is to make everything at the back darker */}
            {props.show && <Backdrop onClick={props.onCancel}/>}
            {/* we need the unmount on exit to get rid of the Modal through transition*/}
            <CSSTransition 
                in={props.show} 
                mountOnEnter 
                unmountOnExit 
                timeout={200} 
                classNames="modal"
            >
                {/* We will spread the attributes of props unto ModalOverlay, when the Modal is triggered 
                then the ModalOverlay will be triggered and rendered in the index.html */}
                {/* Note that props would be the google maps in this case */}
                <ModalOverlay {...props}/>
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;