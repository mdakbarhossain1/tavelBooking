import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom";


const ManageTourPlace = () => {


    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/tourManage')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);



    // Delete Tour 

    const handleDelete = (id) => {

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
                    const remaining = products.filter(md => md._id !== id);
                    setProducts(remaining);
                }
            })
    };


    const addProduct = () => {
        navigate('/addtourplace')
    }




    return (
        <div>
            <h2>Manage Products{products.length}</h2>
            <Container>
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Delete Product</th>
                            <th>Add Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((pd, index) => <tr key={pd._id}>
                                <td>{index + 1}</td>
                                <td>{pd?.name}</td>
                                <td>{pd?.price}</td>
                                <td><button onClick={() => handleDelete(pd._id)} className="btn btn-danger">Delete</button></td>
                                <td><button onClick={addProduct} className="btn btn-success">Add Product</button></td>
                            </tr>)
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ManageTourPlace