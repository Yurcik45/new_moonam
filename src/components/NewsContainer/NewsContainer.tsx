import News from "../News/News";
import "./NewsContainer.sass";
import { NewsContainerProps } from "../../types";


const NewsContainer = (props: NewsContainerProps) => {

  const openNews = (
    image: any,
    title: string,
    source: string,
    date: string,
    text: string,
    quotation: string,
    ) => {
    props.setNewsPopup({
      image: image,
      source: source,
      title: title,
      date: date,
      text: text,
      quotation: quotation
    })
    props.setModalType("news")
    props.setShowModal(true)
  }
  return (
    <div className="NewsContainer">
      {
        props.newsData &&
        //@ts-ignore
        props.newsData.map((item, id) => {
          return (
            <div key={id} className="NewsConntainerRow">
              <News
                newsDataItem={item}
                openNews={openNews}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default NewsContainer;