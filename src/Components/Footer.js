import React, {Component} from 'react';
import {FaFacebookF, FaInstagram, FaTelegram, FaLinkedinIn, FaPinterestP, FaTwitter} from "react-icons/fa"

class Footer extends Component {
    render() {
        return (
// <div className='bg-dark text-info'>
//     <div className='mb-5 flex-center'>
            <footer className="page-footer bg-dark text-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className=" d-flex justify-content-center">
                                <h4>
                                    <FaFacebookF className='mr-md-5 mr-3 fa-2x'/>
                                </h4>
                                <h4 className='mr-md-5 mr-3 fa-2x' >
                                    <FaInstagram/>
                                </h4>
                                <h4 className=' mr-md-5 mr-3 fa-2x'>
                                    <FaTelegram/>
                                </h4>
                                <h4 className=' mr-md-5 mr-3 fa-2x'>
                                    <FaLinkedinIn/>
                                </h4>
                                <h4 className=' mr-md-5 mr-3 fa-2x'>
                                    <FaPinterestP/>>
                                </h4>
                                <h4 className=' mr-md-5 mr-3 fa-2x'>
                                    <FaTwitter/>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                            <div className="footer-copyright text-center">© 2020 Copyright:
                            </div>
            </footer>
                        );
                        }
                        }

                        export default Footer;