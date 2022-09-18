import logo from "../assets/Logo.png";
import {useState} from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState("")
    const [displayStocks, setDisplayStocks] = useState(null);

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = async() => {
        getStocks(query);
    } 

    const getStocks = async (ticker) => {
        axios.get('http://127.0.0.0:8000/stock/ticker/' + ticker)
        .then(resp => {
            console.log(resp.data);
            setDisplayStocks(resp.data)
        })
        .catch(error => console.log(error))
    }

    return (
        <div class="search">
            <img src={logo} class="headerLogo"/>
            <input type="text" id="searchBar" value={query} onChange={handleChange} name="searchInput" placeholder="Search Company by Ticker"/>
            <button onclick={handleSubmit} id="searchSubmit">Search</button>
        </div>
    )
}

export default Search;
