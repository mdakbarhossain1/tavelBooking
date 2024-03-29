import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import AdminNav from "../../components/AdminNav/AdminNav";


const ManageTourPlace = () => {


    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/tourService')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);



    // Delete Tour 

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/tourService/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount) {
                    alert("deleted !!!");
                    const remaining = products.filter(md => md._id !== id);
                    setProducts(remaining);
                }
            })
    };

    const handleUpdate = (id) => {
        navigate(`/updatetourplace/${id}`)
    }


    const addProduct = () => {
        navigate('/addtourplace')
    }




    return (
        <div>
            <AdminNav />

            <div className="my-2">
                <Container>
                    <h2>Manage Products{products.length}</h2>
                    <button onClick={addProduct} className="btn btn-success my-2">Add Product</button>
                    <Table striped bordered hover responsive size="sm">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Product Name</th>
                                <th>Location</th>
                                <th>Trip Day</th>
                                <th>Price</th>
                                <th>Delete Product</th>
                                <th>Update Tour Place</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map((pd, index) => <tr key={pd._id}>
                                    <td>{index + 1}</td>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.location}</td>
                                    <td>{pd?.tripday}</td>
                                    <td>{pd?.price}</td>
                                    <td><button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Delete</button></td>
                                    <td><button onClick={() => handleUpdate(pd._id)} className="btn btn-warning">Update</button></td>

                                </tr>)
                            }

                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    )
}

export default ManageTourPlace