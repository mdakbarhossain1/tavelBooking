import { useEffect, useState } from "react"
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(result => {
                setUser(result)
            })

    }, [])

    console.log(user);

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
            <h2>All User</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.displayName}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default AllUser