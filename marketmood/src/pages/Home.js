import Header from "../components/Header.js";
import Info from "../components/Info.js";
import { Outlet, Link } from "react-router-dom";


function Home() {
    return (
        <>
        <Header />
        <Info />
        <center>
        <li class="moodboardButtonEnd">
            <Link to="/moodboard">MOODboard</Link>
        </li></center>
        </>
    )
}

export default Home;