import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const PopularDestinationCard = ({ place }) => {
  console.log(place);
  return (
    <Col lg={3} md={3}>
      <Link to={`/booking/${place._id}`}>
        <div className="card-destination p-2 m-1">
          <div className="overflow-hidden" style={{ maxWidth: '300px' }}>
            <Image src={place.image} className='img-fluid object-fit-cover' />
          </div>
          <div className="p-1 card-text">
            <p>📍 {place.location}</p>
            <h4>{place.name}</h4>
            <div >{place.tripday}</div>
            <div className="price"><strong>{place.price}.00</strong></div>
          </div>
        </div>
      </Link>
    </Col>
  )
}

export default PopularDestinationCard