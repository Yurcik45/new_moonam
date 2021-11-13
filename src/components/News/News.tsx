import "./News.sass"
import petro from "../../images/news/petro.png"
const News = () => {
  return (
    <div className="News">
      <div className="NewsImage">
        <img src={petro} alt="petro" />
      </div>
      <div className="NewsTitle">
        Селфі з президентом: у перерві шоу Шустера люди оточили Порошенка для спільного фото
      </div>
      <div className="NewsDirection">
        <div className="directionText">Новина від:</div>
        <div className="directionName underline">Прямий</div>
      </div>
    </div>
  )
}

export default News;