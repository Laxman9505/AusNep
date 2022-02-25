import React from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Search from "../../components/search/Search";
import { SliderData } from "../../components/slider/SliderData";
import FeaturedProducts from "../../components/products/FeaturedProducts";
import PopularProducts from "../../components/products/PopularProducts";
import Footer from "../../components/footer/Footer"


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Slider slides={SliderData} />
      <FeaturedProducts />
      <PopularProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
