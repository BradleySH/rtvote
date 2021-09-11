import { Link } from "react-router-dom"


const Navbar = (props) => {
  const {logout, token} = props
  return (
    <div className="nav-container">
      <div className="logo">RTV</div>
      <div>
        { token && <Link to="/profile">Profile</Link>}
        <Link to="/public">Feed</Link>
        { token && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  )
}

export default Navbar
