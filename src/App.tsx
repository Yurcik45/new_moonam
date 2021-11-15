import Home from "./pages/Home/Home";
import "./App.sass";
import Navigation from "./components/Navigation/Navigation";


const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
