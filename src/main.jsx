import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './main'
import './assets/scss/app.scss'
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
