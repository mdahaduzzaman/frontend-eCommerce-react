import MainCarousoul from "./MainCarousoul";
import MainCategoryList from "./MainCategoryList";

function Hero() {
  return (
    <section className='px-10 text-[--dark-color] mt-3 flex gap-5 h-[25rem] w-full'>
      <MainCategoryList/>
      <MainCarousoul/>
    </section>
  )
}

export default Hero