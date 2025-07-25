import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import Review from "../Review/Review";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";
import "../../index.css";

function App() {
  const [reviews, setReviews] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch(console.error);
  }, []);



  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/reviews/:reviewId" element={<Review reviews={reviews} />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
        
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;