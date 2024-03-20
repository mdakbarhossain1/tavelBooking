import { Col, Container, Image, Row } from "react-bootstrap"

const AboutUs = () => {
  return (
    <section className="py-5">
      <Container >
        <Row className=" gx-4 align-items-center justify-content-between">
          <Col md={5} className="order-2 order-md-1">
            <div className="mt-5 mt-md-0">
              <span className="text-muted">Our Story</span>
              <h2 className="display-5 fw-bold">About Us</h2>
              <p className="lead">we believe that travel is not just about reaching a destination; it's about the journey, the experiences, and the memories created along the way. Our passion for exploration and discovery drives everything we do, and we're dedicated to helping you embark on unforgettable adventures around the globe.</p>
            </div>
          </Col>
          <Col className="col-md-6 offset-md-1 order-1 order-md-2">
            <Row className="gx-2 gx-lg-3">
              <Col className="col-6">
                <div className="mb-2"><Image className="img-fluid rounded-3" src="https://img.freepik.com/premium-photo/coaching-motivation-happy-proud-business-leader-meeting-with-diverse-colleagues-office-portrait-male-smiling-during-training-with-workers-discussing-improvement-strategy-planning_590464-81771.jpg" /></div>
              </Col>
              <Col className="col-6">
                <div className="mb-2"><Image className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1604922824961-87cefb2e4b07?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
              </Col>
              <Col className="col-6">
                <div className="mb-2"><Image className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1602015103066-f45732e2aa84?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
              </Col>
              <Col className="col-6">
                <div className="mb-2"><Image className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1443683977472-1453b8b4bfc3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs