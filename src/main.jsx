import React from 'react'
import ReactDOM from 'react-dom/client'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import App from './App.jsx'
import './index.css'

const stripePromise = loadStripe('pk_test_51POa15RujZl6Emln0NEB3YZ1RWuGu8idkn4h5huht1JsMEZYUNU9K6srjj8HyAl5bCCokU9ntT6IzWjwsMtOp4Mp00CFteybPV');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
  </React.StrictMode>,
)
