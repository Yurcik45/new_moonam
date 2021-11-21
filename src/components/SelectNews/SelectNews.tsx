import "./SelectNews.sass"
import { ClickAwayListener } from "@material-ui/core";

interface SelectNewsProps {
  setShowModal: any
  newsPopup: any
}

const SelectNews = (props: SelectNewsProps) => {
  const closeModal = () => {
    props.setShowModal(false)
  }
  const closeIcon = <svg width="30" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.5176 15L24.208 5.83301C24.3369 5.68066 24.2285 5.44922 24.0293 5.44922H21.6914C21.5537 5.44922 21.4219 5.51074 21.331 5.61621L14.9883 13.1777L8.6455 5.61621C8.55761 5.51074 8.42577 5.44922 8.28515 5.44922H5.94726C5.74804 5.44922 5.63964 5.68066 5.76855 5.83301L13.459 15L5.76855 24.167C5.73967 24.2009 5.72114 24.2425 5.71517 24.2867C5.70919 24.3308 5.71602 24.3758 5.73483 24.4162C5.75365 24.4566 5.78367 24.4908 5.82132 24.5146C5.85897 24.5385 5.90268 24.551 5.94726 24.5508H8.28515C8.42284 24.5508 8.55468 24.4893 8.6455 24.3838L14.9883 16.8223L21.331 24.3838C21.4189 24.4893 21.5508 24.5508 21.6914 24.5508H24.0293C24.2285 24.5508 24.3369 24.3193 24.208 24.167L16.5176 15Z" fill="white"/>
  </svg>

  const {
    image,
    title,
    source,
    // date,
    text,
    quotation
  } = props.newsPopup

  return (
    <ClickAwayListener
      onClickAway={closeModal}
    >
      <div className="SelectNews">
        <div
          className="select_header_container"
          style={{backgroundImage: `url(${image})`}}
        >
          <div  
            className="header_close"
            onClick={closeModal}
          >
            {closeIcon}
          </div>
          <div className="select_header">
            <div className="header_title">{title}</div>
            <div className="header_source">
              <div>Посилання на першоджерело -</div>
              <div className="source_link">{source}</div>
            </div>
          </div>
    
        </div>
        <div className="select_main">{text}</div>
        <div className="select_quation">
          <div className="quation_decor_line"/>
          <div className="quation_text">{quotation}</div>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default SelectNews;