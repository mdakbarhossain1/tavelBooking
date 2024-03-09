import { Button, Col, Container, Image, Row } from "react-bootstrap"
import heroImage from "../../assets/image/illus.png"
import { Link } from "react-router-dom"
import PopularDestination from "../../components/PopularDestination"

const Home = () => {
    return (
        <Container>
            <div className="p-3">
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="hero-text d-flex justify-content-center flex-column ">
                            <h1 className="fw-bold fs-1">Start your journey <br />by one click, <span className="orange">explore</span> <br />beautiful world!</h1>
                            <p className="my-3">Plan and book your perfect trip with expert advice, travel tips, <br />destination information and inspiration from us!</p>
                            <div className="hero-btn">
                                <Button as={Link} to="/explore" className="me-2 orange-bg">Explore</Button>
                                <Button as={Link} to="/login" variant="danger">Sign In</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <Image src={heroImage} className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="popularDestination my-3">
                <PopularDestination />
            </div>
        </Container>
    )
}

export default Home