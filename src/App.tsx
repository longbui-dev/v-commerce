import './App.scss';
import Header from './components/navbar/Header';
import Slide from './components/carousel/Slide';
import AdvertisementProducts from './components/advertisementProducts/AdvertisementProducts';
import NewArrivals from './components/newArrivals/NewArrivals';
import CollectionDetail from './components/collectionDetail/CollectionDetail';
import FeaturedProducts from './components/featuredProducts/FeaturedProducts';
import LatestBlog from './components/latestBlog/LatestBlog';
import Clients from './components/clients/Clients';
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App relative">
        <Header />
        <Slide />
        <AdvertisementProducts />
        <NewArrivals />
        <CollectionDetail />
        <FeaturedProducts />
        <LatestBlog />
        <Clients />
        <NewsLetter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
