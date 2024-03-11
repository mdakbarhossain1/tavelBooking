import useAuth from "../../hook/useAuth"

const User = () => {
    const {user} = useAuth();
    console.log(user)
  return (
    <div>
        {user.email}

    </div>
  )
}

export default User