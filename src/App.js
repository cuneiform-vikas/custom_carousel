import React from "react";
import "./utils/App.css";
import Carousel from "./components/Carousel";
import images from "./assets/index";

const App = () => {
  return (
    <div className="App">
      <h1>React Carousel</h1>
      <Carousel images={images} autoplayInterval={2000} />
    </div>
  );
};

export default App;
