import Rating from "./rating"
import Reviews from "./reviews"
import SentimentAnalysis from "./sentimentAnalysis"
import Sidebar from "./sidebar"
import Visitor from "./visitor"

const Container = (props) => {
return (
    <div className="container">
        <Sidebar />
        <div className="wrap container">
            <div className="container content mainBody">
                <Reviews />
                <Rating />
                <SentimentAnalysis />
            </div>
            <Visitor />
        </div>
    </div>
)
}

export default Container