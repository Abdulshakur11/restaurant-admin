import { Route, Switch } from 'react-router-dom';
import NewBrnache from './Components/NewBranche/NewBranche';
import NewCategory from './Components/NewCategory/NewCategory';
import NewMenu from './Components/NewMenu/NewMenu';
import NewRestaurant from './Components/NewRestaurant/NewRestaurant';
import Orders from './Components/Orders/Orders';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <div className="container">
        <Home />
        <Switch>  
            <Route path="/newcategory" component={NewCategory} />
            <Route path="/newrestaurant" component={NewRestaurant} />
            <Route path="/newbranche" component={NewBrnache} />
            <Route path="/newmenu" component={NewMenu} />
            <Route path="/orders" component={Orders} />
        </Switch>
      </div>
    </>
  );
}

export default App;
