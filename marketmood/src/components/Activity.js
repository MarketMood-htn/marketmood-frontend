import tv from '../assets/tv.png';
import google from '../assets/google.png';
import yahoo from '../assets/yahoo.png';

const Activity = ({perception, color, timeUpdated, articles, ticker}) => {
	return(
		<div className="mt-6 flex flex-col justify-start align-center w-5/6">
			<p className="font-bold text-4xl p-4">Activity</p>
			<div className="flex flex-row space-x-4">
				<div className="w-1/2 bg-white rounded-[50px] flex flex-col py-6 px-12 align-start">
					<p className="font-bold text-xl">General Perception</p>
					<p className="font-bold text-4xl" style={{color: color}}>{perception.toUpperCase()}</p>
					<p className="font-thin text-md font-grey">Last updated {timeUpdated} min ago.</p>
				</div>
				<div className="w-1/2 bg-white rounded-[50px] flex flex-col py-6 px-12 align-start">
					<p className="font-bold text-xl">Related Articles</p>
					{
						articles.map((article, index) => {
							if(index<3){
								let parts = article.link.split('/');
								const minilink = parts.slice(2, 3).join('/')
								return <a href={article.link} target="_blank" className="searchResult w-full">{minilink}... <span className="float-right" style={{color: maxPerception(article)[1]}}>{maxPerception(article)[0].toUpperCase()}</span></a>
							}
							return
						})
					}
					<p className="font-thin text-grey">...</p>
				</div>
			</div>
			<div className="flex w-full mt-4 bg-white rounded-[20px] flex-col p-6">
				<p className="font-bold text-xl pb-4">More Details</p>
				<div className="flex justify-evenly">
					<a href={`https://finance.yahoo.com/quote/${ticker}`} target="_blank"><img src={yahoo} className="outline-none max-w-1/3 max-h-full" /></a>
					<a href={`https://www.google.com/search?q=${ticker}`} target="_blank"><img src={google} className="outline-none max-w-1/3 max-h-full" /></a>
					<a href={`https://www.tradingview.com/chart/?symbol=${ticker}`} target="_blank"><img src={tv} className="outline-none max-w-1/3 max-h-full" /></a>
				</div>
			</div>
		</div>
	)
}

export default Activity;

const maxPerception = (article) => {
	const maxNum = Math.max(article.positive, article.negative, article.neutral);
	if(maxNum == article.positive){
		return ["positive", "green"]
	}
	else if (maxNum == article.negative){
		return ["negative", "red"]
	}
	return ["neutral", "black"]
}