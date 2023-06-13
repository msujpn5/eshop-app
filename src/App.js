import './App.css';
import Home from "./Home"
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path="/checkout" element={<><Header/><Checkout/></>}>
          </Route>

          <Route exact path="/" element={<><Header/><Home/></>}>
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
