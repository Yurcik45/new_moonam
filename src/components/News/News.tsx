import "./News.sass"

interface NewsProps {
  setModalType: any
  setShowModal: any
  setNewsPopup: any
  newsPopup: any
  openNews: any
  newsData: any
  setNewsData: any
}

const News = (props: NewsProps) => {

  const openNews = () => {
    const {
      image,
      title,
      source,
      date,
      text,
      quotation
    } = props.newsData
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
        <img src={props.newsData.image} alt="petro" />
      </div>
      <div className="NewsTitle">
        {props.newsData.title}
      </div>
      <div className="NewsDirection">
        <div className="directionText">Новина від:</div>
        <div className="directionName underline">
          {props.newsData.chanel}
        </div>
      </div>
    </div>
  )
}

export default News;