import { Route, Routes } from "react-router-dom";

import Header from "./components/navbar";
import PageDetailProduct from "./components/pageDetailProduct";
import Footer from "./components/footer";
import HomePage from "./components/pageHome";
import NewsLetter from "./components/newsLetter";
import PageCart from "./components/pageCart";

import "./App.scss";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/pageDetailProduct/:id" element={<PageDetailProduct />} />
      </Routes>
      <Routes>
        <Route path="/pageCart" element={<PageCart />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
