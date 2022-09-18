
function SearchResult({
    displayStock,
    text,
    onclick,
}) {
    return (
        <div className="searchResult w-2/3 flex justify-between py-6 px-4 align-center">
            <div className="flex space-x-8 font-bold text-2xl px-4">
                <p>{displayStock.ticker.toUpperCase()}</p>
                <p>|</p>
                <p>{displayStock.name}</p>
            </div>
            <div>
                <p className="text-grey text-xl text-semibold seeMore" onClick={onclick}>{text}</p>
            </div>
        </div>
    )
}

export default SearchResult