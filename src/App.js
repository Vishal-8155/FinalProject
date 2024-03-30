import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Banner from "./Components/Banner";
import Product from "./Components/Product";
import Categories from "./Components/Categories";
import Instagram from "./Components/Instagram";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Banner />
      {/* <Product /> */}
      <Categories />
      <Instagram />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
