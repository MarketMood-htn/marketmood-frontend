import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="App-header">
        <ul>
          <li class="homeButton">
            <Link to="/">About us</Link>
          </li>
          <li class="moodboardButton">
            <Link to="/moodboard">MOODboard</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;