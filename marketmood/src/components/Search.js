import logo from "../assets/Logo.png";
import SearchResult from "./SearchResult";

import {useState} from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState("")
    const [displayStock, setDisplayStock] = useState(null);
    const [seeDetails, setSeeDetails] = useState(false)

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = () => {
        getStocks(query);
    } 

    const getStocks = async (ticker) => {
        console.log(ticker);
        await axios.get('http://127.0.0.1:8000/stock/ticker/' + ticker)
        .then(resp => {
            console.log(resp.data);
            setDisplayStock(resp.data)
        })
        .catch(error => console.log(error));
    }

    return (
        <>
        <div class="search">
            <img src={logo} className="headerLogo"/>
            <input type="text" id="searchBar" value={query} onChange={handleChange} name="searchInput" placeholder="Search Company by Ticker"/>
            <button onClick={handleSubmit} id="searchSubmit">Search</button>
        </div>
        <div className="flex w-full justify-center">
        {displayStock ? 
            <SearchResult displayStock={displayStock}>
            </SearchResult>
            :
            <div></div>
        }
        </div>
        <div>
            {seeDetails ? <div></div> : <div></div>}
        </div>
        </>
    )
}

export default Search;
