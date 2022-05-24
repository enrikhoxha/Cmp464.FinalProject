import logo from './logo.svg';
import './App.css';
import Navbar from './View/Components/Navbar/Navbar';
import Home from './View/FrontView/Home';
import AOS from 'aos/dist/aos'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './View/FrontView/About';
import { Table } from 'reactstrap';
import Projects from './View/FrontView/Projects';
import Contact from './View/FrontView/Contact';
import Services from './View/FrontView/Services';
import Wordle from './View/FrontView/Wordle';


AOS.init();

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} title="Enrik Hoxha"/>
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/services' exact component={Services} />
          <Route path='/wordle' exact component={Wordle} />

        </Switch>
      </Router>

      <Table />
    </>
  );
}

export default App;
