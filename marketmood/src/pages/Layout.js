import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/moodboard">Moodboard</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;