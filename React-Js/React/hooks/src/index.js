import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ----- Example of useEffect with Fake App Chat
// function creatEvent(id){
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`,{
//         detail: `message of lesson ${id}`
//       })
//     )
//   },1000)
// }

// creatEvent(1)
// creatEvent(2)
// creatEvent(3)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
