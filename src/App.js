import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeadlineCards from "./components/HeadlineCards";
import Movies from "./components/Movies";
import Category from "./components/Category";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Movies />
    </div>
  );
}

export default App;
