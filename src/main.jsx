import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import CartcontxtProvider from './context/cartcontex'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <CartcontxtProvider>
    <App />
    </CartcontxtProvider>
    </BrowserRouter>

)
