import MainCarousoul from "./MainCarousoul";
import MainCategoryList from "./MainCategoryList";

function Hero() {
  return (
    <section className=''>
        <div className='px-10 text-[--dark-color] flex h-[22rem]'>
          <MainCategoryList/>
          <MainCarousoul/>
        </div>
    </section>
  )
}

export default Hero