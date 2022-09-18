import logo from "../assets/Logo.png";
import SearchResult from "./SearchResult";

import {useState} from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState("")
    const [displayStock, setDisplayStock] = useState(null);
    const [stats, setStats] = useState(null)
    const [seeDetails, setSeeDetails] = useState(false)

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = () => {
        getStocks(query);
    } 

    const getStocks = async (ticker) => {
        await axios.get('http://127.0.0.1:8000/stock/ticker/' + ticker)
        .then(resp => {
            console.log(resp.data);
            setDisplayStock(resp.data);
            const articles = resp.data.all_articles;

            let values = { positive: 0, neutral: 0, negative: 0 }
            let prediction = 'neutral';
            for (var i = 0; i < articles.length; i++) {
                values.positive += articles[i].positive
                values.neutral += articles[i].neutral
                values.negative += articles[i].negative            
            }
            values.positive /= articles.length;
            values.neutral /= articles.length;
            values.negative /= articles.length;
            
            let placeHolder = [['positive', values.positive], ['negative', values.negative], ['neutral', values.neutral]]
            placeHolder.sort((a,b) => a[1]-b[1]);
            placeHolder.reverse();
            prediction = placeHolder[0]
            values['prediction'] = prediction;
            values['articles'] = articles;
            setStats(values);
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
