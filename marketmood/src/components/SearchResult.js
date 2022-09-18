function SearchResult({
    displayStock,
}) {
    return (
        <div className="searchResult w-2/3 flex justify-between py-6 px-4">
            <div className="flex space-x-8 font-bold text-2xl px-4">
                <p>{displayStock.ticker.toUpperCase()}</p>
                <p>|</p>
                <p>{displayStock.name}</p>
            </div>
        </div>
    )
}

export default SearchResult