import { Button, Col, Container, Image, Row } from "react-bootstrap"

const ContactUs = () => {
  return (
    <section className="py-5">
      <Container >
        <Row className="justify-content-center text-center mb-2 mb-lg-4">
          <Col lg={8} xxl={7} className="col-lg-8 col-xxl-7">
            <span className="text-muted">Let's Talk</span>
            <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
            <p className="lead mb-0">If you have any inquiries regarding our services, destinations, or bookings, don't hesitate to get in touch. We're committed to ensuring your journey is smooth from start to finish.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10} lg={6}>
            <form>
              <Row className="justify-content-center">
                <Col md={6} >
                  <div className="mb-3">
                    <input className="form-control bg-light" placeholder="First name" type="text" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <input className="form-control bg-light" placeholder="Last name" type="text" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3">
                    <textarea className="form-control bg-light" placeholder="Your message" rows="4"></textarea>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="d-grid">
                    <Button className="btn btn-primary" type="submit">Send message</Button>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="mt-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.268769429087!2d90.36777399122018!3d23.718221376520077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf2ad0dff901%3A0xa72cc676b553705!2sKamrangirchar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710578829915!5m2!1sen!2sbd" width="100%" height="500"  allowFullScreen="allow" loading="lazy" ></iframe></div>
    </section>
  )
}

export default ContactUs