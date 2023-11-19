import Img from '../assets/download.jpeg'

function FixedBanner() {
  return (
    <div className='w-screen h-[15rem] mt-20 mb-10 px-[10rem]'>
        <img src={Img} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default FixedBanner