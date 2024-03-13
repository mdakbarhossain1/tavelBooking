import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import bongologo from "../assets/image/bongologo.png"
import useAuth from "../hook/useAuth"

const Header = () => {
    const navigation = useNavigate()
    const {user, logOut} = useAuth();
    const handleLogout = () => {
        logOut();
    }



    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className="w-75" src={bongologo} alt="Bongologo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-style">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            {
                                user.email ?<div>
                                <span className="user-name" onClick={()=>navigation("/user")}>{user?.displayName}</span> <Button variant="warning"  className="button" onClick={handleLogout}>Logout</Button></div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header