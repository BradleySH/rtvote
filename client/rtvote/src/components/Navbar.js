import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">RTV</div>
      <div>
        <Link to="/">Auth</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/public">Feed</Link>
      </div>
    </div>
  )
}

export default Navbar
