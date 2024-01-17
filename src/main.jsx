import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Store from './Customer redux/Store.jsx'
import CartStore from "./CartRedux/CartStore.jsx"
import { Provider as CustomerProvider } from 'react-redux'; 
import { Provider as CartProvider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <CustomerProvider
     store={Store}>
      <CartProvider store={CartStore}>
    <App />
    </CartProvider>
    </CustomerProvider>
  </React.StrictMode>,
)
