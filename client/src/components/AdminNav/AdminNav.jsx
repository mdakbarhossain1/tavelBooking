import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const AdminNav = () => {
    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home" className="admin-nav">
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
    )
}

export default AdminNav