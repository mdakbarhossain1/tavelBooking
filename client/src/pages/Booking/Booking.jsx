import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm, } from "react-hook-form";
import "./Booking.css"
import useAuth from "../../hook/useAuth";

const Booking = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [tourSpot, setTourSpot] = useState();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/tourService/${id}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(true)
                setTourSpot(data);
                setIsLoading(false)
            })
    }, [id]);

    console.log(tourSpot)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        console.log(data)
        fetch('http://localhost:5000/tourManage', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    alert("Congratulations");
                    reset()

                }

            })
    };


    return (
        <div>

            <Container>
                {
                    isLoading || <Row>
                        <Col md={6} sm={12}>
                            <div className="card">
                                <div className="card-img"><img className="card-img-top" src={tourSpot?.image} alt="..." /></div>
                                <div className="card-name">{tourSpot?.name}</div>
                                <div className="card-dec">{tourSpot?.dec}</div>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="tour-res-form">
                                <div className="tour-heading">Register Your Tour</div>
                                <form onSubmit={handleSubmit(onSubmit)} className="form-res">
                                    <input required value={user?.displayName} placeholder="Name" {...register("name")} />
                                    <input required value={user?.email} placeholder="Email" {...register("email")} />
                                    <input required value={tourSpot?.name} placeholder="Destination" {...register("destination")} />
                                    <input required placeholder="Message" {...register("message")} />
                                    <input className="btn btn-success" type="submit" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>


        </div>
    )
}

export default Booking