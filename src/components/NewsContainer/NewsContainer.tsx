import News from "../News/News";
import "./NewsContainer.sass";
import dog from "../../images/news/dog.png"
import petro from "../../images/news/petro.png"
import { useState } from "react";

interface NewsContainerProps {
  setModalType: any
  setShowModal: any
  setNewsPopup: any
  newsPopup: any
  newsData: any
  setNewsData: any
}

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
                newsData={item}
                setNewsData={props.setNewsData}
                openNews={openNews}
                newsPopup={props.newsPopup}
                setNewsPopup={props.setNewsPopup}
                setModalType={props.setModalType}
                setShowModal={props.setShowModal}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default NewsContainer;