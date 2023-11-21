import Hero from "../components/Hero"
import FixedBanner from "../components/FixedBanner"
import FeaturedCategory from "../components/FeaturedCategory"
import FlashSaleHeader from '../components/FlashSaleHeader'
import FlashSaleBody from '../components/FlashSaleBody'
import Categories from '../components/Categories'
import JustForYou from '../components/JustForYou'
import LoadMore from '../components/LoadMore'

function Home() {
    return (
      <div className='text-[--white-color]'>
        <Hero/>
        <FixedBanner/>
        <FeaturedCategory/>
        <FlashSaleHeader/>
        <FlashSaleBody/>
        <Categories />
        <JustForYou />
        <LoadMore />
      </div>
    )
}

export default Home