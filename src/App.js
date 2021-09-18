import React, {Component} from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Post from "./Components/post";

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <NavBar />
            {/* switch means you only allow one type of url at a time, it only matches the firts url it finds */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              {/* route parameters below */}
              <Route path="/:post_id" component={Post}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
