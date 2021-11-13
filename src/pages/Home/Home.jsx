import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import "./Home.sass";



const Home = () => {

useEffect(() => {

  window.scrollTo(0, 0)

  const pageHeight = window.innerHeight;
  let scrollCounter = 0

  const scrollHeight = window.document.body.scrollHeight
  document.addEventListener('wheel', function(e) {
    if(
      e.deltaY > 0 &&
      scrollCounter < (scrollHeight - pageHeight)
    ) {
        scrollCounter = scrollCounter + pageHeight
        window.scrollTo(0, scrollCounter)
    }
    if (
      e.deltaY < 0 &&
      scrollCounter > 0
    ){
        scrollCounter = scrollCounter - pageHeight
        window.scrollTo(0, scrollCounter)
    }
   }
  );

}, [])


  return (
    <div className="Home">
      <Navigation/>
      <Header/>
      <NewsContainer/>
    </div>
  )
}

export default Home;