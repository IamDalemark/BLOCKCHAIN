import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/AiEdit">Ai Edit</Link>
          </li>
          <li>
            <Link to="/Calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/Landing">Landing</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/ManualEdit">Manual Edit</Link>
          </li>
          <Outlet />
        </ul>
      </nav>
    </>
  );
};

export default Layout;
