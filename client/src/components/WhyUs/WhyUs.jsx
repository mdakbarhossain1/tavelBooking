import { Col, Container, Image, Row } from "react-bootstrap";
import touristGuy from "../../assets/image/tourist-guy.png"

const WhyUs = () => {

    const tourOffer = [
        {
            "id": 1,
            "title": "Flight Ticket",
            "desc": "Find the most effective and low-cost flight tickets available here. Book your tickets now for great deals and savings."
        },
        {
            "id": 2,
            "title": "Accommodation",
            "desc": "Discover the best hotels and motels for your enhanced experience. Enjoy top-notch facilities and amenities during your stay."
        },
        {
            "id": 3,
            "title": "Packaged Tour",
            "desc": "Embark on the best-packaged tours designed for couples and families. Create unforgettable memories with our curated itineraries."
        }
    ]


    console.log(tourOffer);

    return (
        <section className="py-5">
            <Container >
                <Row className=" gx-5 align-items-center justify-content-between">
                    <Col md={6} className="">
                        <div className=""><Image className="img-fluid rounded-3" src={touristGuy} /></div>
                    </Col>
                    <Col md={6} className="">
                        <div className="mt-5 mt-md-0">
                            <h2 className="display-5 fw-bold">Why Choose Us</h2>
                            <p className="lead">Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>
                        
                                <ul>
                                    {tourOffer.map(item => (
                                        <li key={item.id} className="list-item-tour">
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default WhyUs