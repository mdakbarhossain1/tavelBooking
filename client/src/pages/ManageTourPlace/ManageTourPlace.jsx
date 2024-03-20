import { useEffect, useState } from "react";
import { Container, Nav, Table } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";


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

    const handleUpdate = (id)=>{
        navigate(`/updatetourplace/${id}`)
    }


    const addProduct = () => {
        navigate('/addtourplace')
    }




    return (
        <div>
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
            
            <h2>Manage Products{products.length}</h2>
            <button onClick={addProduct} className="btn btn-success">Add Product</button>
            <Container>
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
    )
}

export default ManageTourPlace