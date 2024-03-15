import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../hook/useAuth";


const UpdateTourPlace = () => {


    const { user } = useAuth()
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        fetch(`http://localhost:5000/tourService/${id}`)
            .then(res => res.json())
            .then(result => {
                setProduct(result)
            })
    }, [id])

    // console.log(product);

    const onSubmit = (data) => {
        console.log(data)
        fetch(`http://localhost:5000/tourService/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })

        reset()
    }




    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image className="img-fluid" src={product.image} />
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Place Name</th>
                                        <th>Last Name</th>
                                        <th>Price</th>
                                        <th>Trip Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.location}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.tripday}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)} className="addTourSpot-form">
                            <input required placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                            <input required type="email" placeholder="Email" value={user?.email} {...register("email")} />
                            <input required placeholder="image link" {...register("image")} />
                            <input required placeholder="Location" {...register("location")} />
                            <input required placeholder="price" {...register("price")} />
                            <input required type="number" placeholder="Trip day" {...register("tripday")} />
                            <input required placeholder="Deception" {...register("dec")} />
                            <input type="submit" placeholder="Add Tour Spot" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UpdateTourPlace