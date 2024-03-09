import { useEffect, useState } from "react";
import PopularDestinationCard from "./PopularDestinationCard";
import { Row } from "react-bootstrap";

const PopularDestination = () => {

  const [tourPlace, SetTourPlace] = useState([])

  //Data fetching 
  useEffect(() => {
    fetch('/popular-destination.json')
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
    <div>
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

    </div>
  )
}

export default PopularDestination