import { Button } from "react-bootstrap";
import useAuth from "../../hook/useAuth"
import { Link } from "react-router-dom";

const User = () => {
  const { user } = useAuth();
  console.log(user)
  return (
    <div>
      {user.email}
      <div>
        <Button as={Link} to={'/allorders'}>All Orders</Button>
        <Button as={Link} to={'/alluser'}>All User</Button>
        <Button as={Link} to={'/myorders'}>My Orders</Button>
        <Button as={Link} to={'/addtourplace'}>Add Tour Place</Button>
        <Button as={Link} to={'/managetourplace'}>Manage Tour Place</Button>
      </div>
    </div>
  )
}

export default User