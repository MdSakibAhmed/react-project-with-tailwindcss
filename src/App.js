
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from  "react-router-dom"
import Home from './pages';
import Footer from "./components/Footer"
import Dropdown from "./components/Dropdown"
import About from './pages/about';
import Menu from './pages/menu';
import { useEffect, useState } from 'react';
function App() {
  const [isOpen ,setIsOpen] = useState(false)
  const toggle = () => {
setIsOpen(!isOpen)
  }

  useEffect(()=> {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }


    window.addEventListener("resize",hideMenu)

    return ()=> {
      window.removeEventListener("resize",hideMenu)
    }
    

  })
  return (
    <>
    <Router>
        <Navbar toggle={toggle} isOpen={isOpen}/>
        <Dropdown toggle={toggle} isOpen={isOpen}/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route path="/menu" component={Menu}/>
    </Switch>
  
      <Footer/>
    </Router>
    </>
 
  );
}

export default App;
