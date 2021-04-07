import React, { createContext, useState } from 'react';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import Order from './Components/Order/Order'
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Ordered from './Components/Ordered/Ordered';
import Orders from './Components/Orders/Orders';



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <h3>email: {loggedInUser.email}</h3>
    
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
       
       <PrivateRoute path="/admin">
         <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path="/orders">
        <Orders/>
        </PrivateRoute>
       
        <Route path="/login">
          
          <Login></Login>
        </Route>
        <PrivateRoute path="/products/:id">
        <PlaceOrder/>
        </PrivateRoute>

        <PrivateRoute path="/orderCofirmed">
        <Ordered/>
        </PrivateRoute>

        <Route exact path="/">
          <Shop></Shop>
        </Route>
       
        {/* <Route path="*">
          <NotFound></NotFound>
        </Route> */}
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
