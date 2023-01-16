
import Slide from '../carousel/Slide';
import AdvertisementProducts from '../advertisementProducts/AdvertisementProducts';
import NewArrivals from '../newArrivals/NewArrivals';
import CollectionDetail from '../collectionDetail/CollectionDetail';
import FeaturedProducts from '../featuredProducts/FeaturedProducts';
import LatestBlog from '../latestBlog/LatestBlog';

function HomePage() {
    return (
      <div>
        <Slide />
        <AdvertisementProducts />
        <NewArrivals />
        <CollectionDetail />
        <FeaturedProducts />
        <LatestBlog />
      </div>
    );
}

export default HomePage;