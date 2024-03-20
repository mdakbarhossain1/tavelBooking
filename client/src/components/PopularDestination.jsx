import { useEffect, useState } from "react";
import PopularDestinationCard from "./PopularDestinationCard";
import { Container, Row } from "react-bootstrap";

const PopularDestination = () => {

  const [tourPlace, SetTourPlace] = useState([])

  //Data fetching 
  useEffect(() => {
    fetch('http://localhost:5000/tourService')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        SetTourPlace(data);
      });
  }, []);

  console.log(tourPlace)
  return (
    <Container>
      <div>
        <h1>Popular Destinations</h1>
        <p>Vacations to make your experience enjoyable in Bangladesh</p>
      </div>

      <div>
        <Row>
          {
            tourPlace.map((place) => <PopularDestinationCard key={place.id} place={place} />)
          }
        </Row>
      </div>

    </Container>
  )
}

export default PopularDestination