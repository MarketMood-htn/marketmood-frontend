import logo from "../assets/Logo.png";
import profBoard from "../assets/profBoard.jpg"
import stockTrends from "../assets/stockTrends.jpg"
import manageMoney from "../assets/manageMoney.png"
function Header() {
    return (
        <div class="header">
            <div class="headerLeft">
                <img src={logo} class="headerLogo"/>
                <h1 class="headerTitle">MARKETMOOD</h1>
                <p1 class="headerPara">Market perception tracking for trading made easy by AI natural language processing. </p1>
            </div>
            <div class="headerRight">
                <div class="headerRightDiv1">
                        <p2>with<br/></p2>
                        <p1>co:here</p1>
                    </div>
                <div class="headerRightDiv2">
                    <img src={profBoard} />
                    <img src={manageMoney} id="manageMoney" />
                </div>
                <img src={stockTrends}/>
            </div>
        </div>
    )
}

export default Header;
