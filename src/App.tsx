import Home from "./pages/Home/Home";
import "./App.sass";
// import TestHeader from "./components/Test/TestHeader"
// import TestNavig from "./components/Test/TestNavig"
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

const App = () => {
  const [showNav, setShowNav] = useState<boolean>(false)

  const [nav, setNav] = useState<boolean>(false)
  useEffect(() => {
    if (window.innerWidth - 15 > 1000) {
      setNav(true)
      setShowNav(true)
    } else {
      setNav(false)
      setShowNav(false)
    }
    window.onresize = () => {
      if (window.innerWidth - 15 > 1000) {
        setNav(true)
        setShowNav(true)
      } else {
        setNav(false)
        setShowNav(false)
      }
    }
  }, [])
  const closeNav = (status: boolean) => {
    if (!status) {
      setTimeout(() => {
        setNav(status)
      }, 400)
      setShowNav(status)
    }
    else if (status) {
      setTimeout(() => {
        setShowNav(status)
      }, 200)
      setNav(status)
    }
  }
  console.log("show nav", showNav);
  console.log("nav", nav);
  

  return (
    <>
    <div className="App">
      <Navigation
        nav={nav}
        showNav={showNav}
        setShowNav={setShowNav}
        closeNav={closeNav}
      />

      <Header
        nav={nav}
        setShowNav={setShowNav}
        closeNav={closeNav}
      />
      <Home
        nav={nav}
        setShowNav={setShowNav}
        closeNav={closeNav}
      />
    </div>
    </>
  );
}

export default App;
