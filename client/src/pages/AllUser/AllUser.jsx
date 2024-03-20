import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import AdminNav from "../../components/AdminNav/AdminNav";

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

    <div>
      <AdminNav />

      <div className="my-2">
        <Container>

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
      </div>

    </div>

  )
}

export default AllUser