import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div className="App">
      
        <Nav />
        <main className="container">
        <Switch>
          <Route exact path={["/React-Portfolio/", "/React-Portfolio/About"]}>
            <AboutMe />
          </Route>
          <Route exact path="/React-Portfolio/Portfolio">
            <Portfolio />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
