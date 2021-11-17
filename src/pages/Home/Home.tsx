// import Header from "../../components/Header/Header";

import NewsContainer from "../../components/NewsContainer/NewsContainer";
import "./Home.sass";

interface HomeProps {
  nav: boolean
  setShowNav: (value: boolean) => void
  closeNav: any
}

const Home = (props: HomeProps) => {

  return (
    <div className="Home">

      <NewsContainer/>
    </div>
  )
}

export default Home;

// useEffect(() => {

//   window.scrollTo(0, 0)

//   const pageHeight = window.innerHeight;
//   let scrollCounter = 0

//   const scrollHeight = window.document.body.scrollHeight
//   document.addEventListener('wheel', function(e) {
//     if(
//       e.deltaY > 0 &&
//       scrollCounter < (scrollHeight - pageHeight)
//     ) {
//         scrollCounter = scrollCounter + pageHeight
//         window.scrollTo(0, scrollCounter)
//     }
//     if (
//       e.deltaY < 0 &&
//       scrollCounter > 0
//     ){
//         scrollCounter = scrollCounter - pageHeight
//         window.scrollTo(0, scrollCounter)
//     }
//    }
//   );

// }, [])