import './App.css'
import FeaturedCategory from './components/FeaturedCategory'
import FixedBanner from './components/FixedBanner'
import FlashSale from './components/FlashSale'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='text-[--white-color]'>
      <Navbar/>
      <Hero/>
      <FixedBanner/>
      <FeaturedCategory/>
      <FlashSale/>
    </div>
  )
}

export default App
