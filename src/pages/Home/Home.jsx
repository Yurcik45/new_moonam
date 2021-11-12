import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import "./Home.sass";



const Home = () => {

  // const [scrollCounter, setScrollCounter] = useState(0)


useEffect(() => {

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
      <Header/>
      <NewsContainer/>
    </div>
  )
}

export default Home;