import React from 'react';
import './Contact.css';
import contactImg from "../img/SAFE_Trg.jpg"
function Contact() {
    return (

        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Us.</h1>
                            <p className="hire__text white">We are available for Consulting. Connect with us:</p>
                           <p className="hire__text white"><strong>+88 01715 040557</strong> or email <strong>sdg.bdesh@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                            
                        <p className="hire__text white">Our Address:</p>
                            <p className="hire__text white"><strong>House # 231/A (2nd Floor), </strong></p>
                            <p className="hire__text white"><strong>Modhubazar, West Dhanmondi</strong></p>
                            <p className="hire__text white"><strong>Dhaka-1209, Bangladesh</strong></p>
                            <p className="hire__text white"> Additional Email Address:</p>
                            <p className="hire__text white"><strong>gchowhan12@gmail.com</strong></p>
                            <p className="hire__text white">Telephone: </p>
                            <p className="hire__text white"><strong>+88 01521 101069</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
