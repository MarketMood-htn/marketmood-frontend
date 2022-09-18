import logo from "../assets/Logo.png";

function Search() {
    const [query, setQuery] = setState("")
    const handleSubmit = () => {

    } 
    return (
        <div class="search">
            <form>
            <img src={logo} class="headerLogo"/>
            <input type="text" id="searchBar" name="searchInput" placeholder="Search Company by Ticker"/>
            <button onclick={handleSubmit} id="searchSubmit">Search</button>
        </form>
        </div>
    )
}

export default Search;
