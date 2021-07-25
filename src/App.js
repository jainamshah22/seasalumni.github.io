import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Alumini from "./components/Alumini";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Members from "./components/Members";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/alumini" component={Alumini} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route path="/members" component={Members} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
