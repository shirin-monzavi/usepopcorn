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
    {/* <StarRating maxRate={3} color="red" size={50} message={['bad', 'ok', 'good']} defualtRate={2} />
    <Test /> */}
    <TextExpander text="" textShowMore="More" textShowLess="Less">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
      In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
      Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.
      Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem.
      Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam.
      Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque
      fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi v
      itae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.
    </TextExpander>
  </React.StrictMode>
);

function Test() {
  const [movie, setMovieRate] = useState(0);
  return (
    <>
      <StarRating maxRate={3} color='red' size={50} message={['bad', 'ok', 'good']} onSetRate={setMovieRate} />
      <p>Rate is: {movie}</p>
    </>
  )
}

function TextExpander({ children, maxSize = 100, textShowMore = "Show More", textShowLess = "Show Less", expanded = false,className="", color = "red" }) {

  const [isExpanded, setExpanded] = useState(expanded);
  const text = isExpanded ? children : children.split(" ").slice(0, maxSize).join(" ");
  function handleExpanded() {
    setExpanded(e => !e)
  }
  const buttonStyle = {
    color:color,
    backgroundColor:"transparent",
    border:"none"
  }
  return (
    <div className={className}>
      <span>{text}
        <button style={buttonStyle} onClick={handleExpanded}>{isExpanded ? textShowLess : textShowMore}</button>
      </span>
    </div>
  )
}