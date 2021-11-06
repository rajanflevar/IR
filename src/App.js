import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Header from './Components/Header';
import './App.css';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Features from './Pages/Features';
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Switch>  
        <Route path = '/' component = {Hero} />
        <Route path = '/About' component = {About} />
        <Route path = '/Services' component = {Features} />
        <Route path = '/Footer' component = {Footer} />
      </Switch>
      <div className="App">
        <Header />
        <About />
        <Features />
          
      </div>
    </BrowserRouter>
  );
}

export default App;
