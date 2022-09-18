function SearchResult({
    displayStock,
}) {
    return (
        <div class="searchResult">
            <p>{displayStock.ticker}    |  {displayStock.name}</p>
        </div>
    )
}

export default SearchResult