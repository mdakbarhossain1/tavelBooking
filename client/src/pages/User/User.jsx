import AdminNav from "../../components/AdminNav/AdminNav";
import useAuth from "../../hook/useAuth"

const User = () => {
  const { user } = useAuth();
  console.log(user)
  return (
    <div>

      <AdminNav />

      {user.email}

      {/* <div>
        <Button as={Link} to={'/allorders'}>All Orders</Button>
        <Button as={Link} to={'/alluser'}>All User</Button>
        <Button as={Link} to={'/myorders'}>My Orders</Button>
        <Button as={Link} to={'/addtourplace'}>Add Tour Place</Button>
        <Button as={Link} to={'/managetourplace'}>Manage Tour Place</Button>
      </div> */}
    </div>
  )
}

export default User