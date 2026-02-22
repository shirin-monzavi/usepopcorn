import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StarRating from './StarRating';
import { useState } from "react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRate={3} color='red' size={50} message={['bad', 'ok', 'good']} defualtRate={2} />
    <Test />
  </React.StrictMode>
);

function Test() {
    const [movie, setMovieRate] = useState(0);
    return (
        <>
            <StarRating maxRate={3} color='red' size={50} message={['bad', 'ok', 'good']} onSetRate ={setMovieRate} />
            <p>Rate is: {movie}</p>
        </>
    )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
