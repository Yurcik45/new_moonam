import Home from "./pages/Home/Home";
import "./App.sass";
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
    window.onresize = (): void => {
      if (window.innerWidth - 15 > 1000) {
        setNav(true)
        setShowNav(true)
      } else {
        setNav(false)
        setShowNav(false)
      }
    }
  }, [])

  const closeNav = (status: boolean): void => {
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

  return (
    <div className="App">
      <Home
        nav={nav}
        showNav={showNav}
        setShowNav={setShowNav}
        closeNav={closeNav}
      />
    </div>
  );
}
// 1200 925h !!!
// 1424 925h !!!
export default App;
