import News from "../News/News";
import "./NewsContainer.sass";

const NewsContainer = () => {
  return (
    <div className="NewsContainer">
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      {/* <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div>
      <div className="NewsConntainerRow">
        <News/>
      </div> */}
    </div>
  )
}

export default NewsContainer;