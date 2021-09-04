import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Searchhome from "./components/Searchhome";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Searchhome />
            </Route>
          </Switch>
        </div>
        <div className="footer">
          <Footer style={{ flex: "0.2" }} />
        </div>
      </div>
    </Router>
  );
}

export default App;
