import { Routes , Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/Tracking.jsx';
import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [ cart , setCart ] = useState([]);

  useEffect( () =>{
    axios.get('/api/cart-items?expand=product')
      .then( (response) =>{
          setCart(response.data);  
      });
  });
  return (
    <Routes>
      <Route index element = { <HomePage cart = { cart } /> } ></Route>
      <Route path = 'checkout' element = {<CheckoutPage cart ={ cart }/>} ></Route>
      <Route path = 'orders' element = { <OrdersPage cart = {cart }/> }></Route>
      <Route path = 'tracking' element = { <TrackingPage cart ={ cart } /> }></Route>
    </Routes>
  );
}

export default App
