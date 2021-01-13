
import './App.css';
import NavBar from './nav/NavBar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Blog from './components/Blog'
import Header from './components/Header';
//import NavBarMob from './components/NavbarMob'
import NavKube from './navbar/NavKube';
import NavbarFixed from './nav/NavbarFixed';
import Product from './components/Product';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div>
      <Switch>
       <Route path="/home">
        <Home /> 
        </Route>
       <Route path="/blog">  <Blog/> </Route>
       <Route path="/kube"> <NavKube /> </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
