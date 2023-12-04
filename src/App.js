import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CreateAd from "./Pages/CreateAd";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import ShowAd from "./Pages/ShowAd";

function App() {
  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/createAd" element={<CreateAd />} />
          <Route path="/showAd" element={<ShowAd />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
