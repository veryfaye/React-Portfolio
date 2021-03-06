import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main className="container">
        <Switch>
          <Route exact path={["/", "/About"]} component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route component={NoMatch}/>
        </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
