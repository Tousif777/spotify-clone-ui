import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Searchhome from "./components/Searchhome";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Sidebar />
              <Home />
              <div className="footer">
                <Footer style={{ flex: "0.2" }} />
              </div>
            </Route>
            <Route path="/search">
              <Sidebar />
              <Searchhome />
              <div className="footer">
                <Footer style={{ flex: "0.2" }} />
              </div>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
