import logo from "../assets/Logo.png";
function Topbar() {
    return (
        <div class="search">
            <form>
            <img src={logo} class="headerLogo"/>
            <input type="text" id="searchBar" name="searchInput" placeholder="Search Company by Ticker"/>
            <input type="submit" id="searchSubmit" value="Search"/>
        </form>
        </div>
    )
}

export default Topbar;
