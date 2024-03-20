import { useEffect, useState } from "react"
import { Container, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllOrders = () => {


    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/tourManage')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setOrders(result)
                // setSpiner(false)
            })
    }, [])

    const handleDelete = (id) => {
        // setSpiner(true);

        fetch(`http://localhost:5000/tourManage/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount) {
                    alert("deleted !!!");
                    const remaining = orders.filter(md => md._id !== id);
                    setOrders(remaining);
                    // setSpiner(false)
                }
            })
    };


    const handleUserUpdate = (id) => {
        const url = `http://localhost:5000/myOrders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    alert('Success Fully Update Data')
                }
            })
    }



    console.log(orders)


    return (
        <Container>
            <div>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/allorders">All Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/allUser">All User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/addtourplace">Add Tour Place</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/managetourplace">Manage Tour Place</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <h2>Manage All Orders</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>destination</th>
                        <th>message</th>
                        <th>status</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.destination}</td>
                            <td>{item.message}</td>
                            <td>{item?.status === "success" ? <button className="btn btn-success">Aproved</button> : <button className="btn btn-primary" onClick={() => handleUserUpdate(item._id)}>Aproved</button>}</td>
                            <td><button onClick={() => handleDelete(item._id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default AllOrders