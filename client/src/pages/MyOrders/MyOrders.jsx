import { Container, Table } from "react-bootstrap"
import useAuth from "../../hook/useAuth"
import { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav/AdminNav";

const MyOrders = () => {

    const { user } = useAuth();

    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/userTour/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMyOrders(result);
            })
    }, [user?.email]);


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
                    const remaining = myOrders.filter(md => md._id !== id);
                    setMyOrders(remaining);
                    // setSpiner(false)
                }
            })
    };



    return (
        <div>
            <AdminNav />

            <div className="my-2">
                <h1>My Orders</h1>
                <Container>
                    <Table striped bordered hover responsive size="sm">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders?.map((md, index) => <tr key={md._id}>
                                    <td>{index + 1}</td>
                                    <td>{md?.name}</td>
                                    <td>{md?.email}</td>
                                    <td>{md?.productName}</td>
                                    <td>{md?.productPrice}</td>
                                    <td>{md?.status === "success" ? <button className="btn btn-success">Aproved</button> : <button className="btn btn-warning">Pandding</button>}</td>
                                    <td><button onClick={() => handleDelete(md._id)} className="btn btn-danger">Cencel</button></td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    )
}

export default MyOrders