import "./News.sass"
import { NewsProps } from "../../types"

const News = (props: NewsProps) => {

  const openNews = () => {
    const {
      image,
      title,
      source,
      date,
      text,
      quotation
    } = props.newsDataItem
    props.openNews(
      image,
      title,
      source,
      date,
      text,
      quotation
      )
  }
  
  return (
    <div
      className="News"
      onClick={openNews}
    >
      <div className="NewsImage">
        <img src={props.newsDataItem.image} alt="petro" />
      </div>
      <div className="NewsTitle">
        {props.newsDataItem.title}
      </div>
      <div className="NewsDirection">
        <div className="directionText">Новина від:</div>
        <div className="directionName underline">
          {props.newsDataItem.chanel}
        </div>
      </div>
    </div>
  )
}

export default News;