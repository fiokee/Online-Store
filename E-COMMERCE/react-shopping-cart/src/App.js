import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/hompage/homepage.components';
import ShopPage from './pages/shop/shop';


function App() {
  
        return(
          <Router>
        <div>
          <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route  path ='/shop' component={ShopPage}/>
          </Switch>
        </div>
          </Router>
       


  ); 

    

}

export default App;
