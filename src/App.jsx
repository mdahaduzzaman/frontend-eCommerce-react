import './App.css'
import Categories from './components/Categories'
import FeaturedCategory from './components/FeaturedCategory'
import FixedBanner from './components/FixedBanner'
import FlashSaleBody from './components/FlashSaleBody'
import FlashSaleHeader from './components/FlashSaleHeader'
import Footer from './components/Footer'
import Hero from './components/Hero'
import JustForYou from './components/JustForYou'
import LoadMore from './components/LoadMore'
import Navbar from './components/Navbar'

function App() {


    return (
      <div className='text-[--white-color]'>
        <Navbar/>
        <Hero/>
        <FixedBanner/>
        <FeaturedCategory/>
        <FlashSaleHeader/>
        <FlashSaleBody/>
        <Categories />
        <JustForYou />
        <LoadMore />
        <Footer/>
      </div>
    )
}

export default App
