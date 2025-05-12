import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Tabs from "./components/Tabs/Tabs";
import Testimationals from "./components/Testimationals/Testimationals";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Equipments />
      <Banner />
      <Tabs />
      <Banner2 />
      <Testimationals />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
