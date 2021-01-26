import Nav from './components/Nav'
import Home from './Home'
import About from './components/About'
import Doctors from './components/Doctors'
import Dept from './components/Dept'
import Services from './components/Services'
import Media from './components/Media'
import Address from './components/Address'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/doctors' component={Doctors} />
          <Route path='/department' component={Dept} />
          <Route path='/services' component={Services} />
          <Route path='/media' component={Media} />
          <Route path='/contact' component={Address} />
          <Route path='/footer' component={Footer} />
        </Switch>


      </div>
    </Router>



  );
}

export default App;

