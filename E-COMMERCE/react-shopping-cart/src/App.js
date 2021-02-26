import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/hompage/homepage.components';

const HatPage = ()=>(
  <div>
    <h1>Hat Page</h1>
    <p>Working On the HAtPage of this Projects</p>
  </div>
)
function App() {
  
        return(
          <Router>
        <div>
          <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route  path ='/hats' component={HatPage}/>
          </Switch>
        </div>
          </Router>
       


  ); 

    

}

export default App;
