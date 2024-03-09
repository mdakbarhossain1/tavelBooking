import { FaPhoneAlt } from "react-icons/fa";
import { Button, Col, Container, Row } from "react-bootstrap"
import footerLogo from "../assets/image/bongologo.png"


const Footer = () => {
    return (
        <div className='custom-bg  p-3' >
            <Container>
                <Row className="g-4 p-4">
                    <Col md={4} >
                        <h4 className='custom-text-warning mb-4'>Quick Links</h4>
                        <p className='lh-lg'>Home
                            <br />
                            About Us
                            <br />
                            Destination
                            <br />
                            Contact
                        </p>
                    </Col>
                    <Col md={4}>
                        <div>
                            <h4 className='custom-text-warning mb-4'>Contact Info</h4>
                            <p><FaPhoneAlt className="custom-text-warning me-2"/>(+62) 361 154875</p>
                            <p><i className="fas fa-envelope me-2 custom-text-warning"></i>contact@domain.com</p>
                            <p><i className="fas fa-map-marker-alt me-2 custom-text-warning"></i>Md. Akbar Hossain No.26, Dhaka 1211</p>
                        </div>
                    </Col>
                    <Col md={4} className="col-md-4">
                        <h4 className='custom-text-warning mb-4'>Make a Reservation</h4>
                        <p>Our Support and Sales team is available 24 /7 to answer your queries</p>
                        <Button className='custom-btn'><FaPhoneAlt className="text-white me-2"/>(+62) 361 154875</Button>
                    </Col>
                </Row>
                <hr className='text-white' />
                <Row className="align-items-center ">
                    <Col md={6}>
                        <div>
                            <img src={footerLogo} alt="" style={{ width: '200px' }} className='img-fluid' />
                        </div>
                    </Col>
                    <Col md={6}>
                        <p className='text-center'>Copyright © 2024 Travel & Tour Agency development by Akbar Hossain</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer