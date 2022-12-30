import './App.scss';
import Header from './components/navbar/Header';
import Slide from './components/carousel/Slide';
import Advertisement from './components/advertisement/Advertisement';
import NewArrivals from './components/newArrivals/NewArrivals';
import CollectionDetail from './components/collectionDetail/CollectionDetail';
import FeaturedProducts from './components/featuredProducts/FeaturedProducts';
import LatestBlog from './components/latestBlog/LatestBlog';
import Clients from './components/clients/Clients';
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Advertisement />
      <NewArrivals />
      <CollectionDetail />
      <FeaturedProducts />
      <LatestBlog />
      <Clients />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
