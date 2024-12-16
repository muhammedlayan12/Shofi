
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catogaries from "./components/Catogaries";
import HomePageProducts from "./components/HomePageProducts";
import Deals from "./components/Deals";
import TopSelling from "./components/TopSelling";
import Testimonials from "./components/Testimonial";
import BestSales from "./components/BestSales";
import Service from "./components/Service";
import Footer from "./components/Footer";
// import App from "./components/App";


function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Catogaries></Catogaries>
      <HomePageProducts></HomePageProducts>
      <Deals></Deals>
      <TopSelling></TopSelling>
      <Testimonials></Testimonials>
      <Service></Service>
      <BestSales></BestSales>
      {/* <App></App> */}
      <Footer></Footer>

      </div>
  )
}

export default page;