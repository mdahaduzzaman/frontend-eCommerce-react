import ProductCard from './ProductCard'
import Img from '../assets/download.jpeg'

function JustForYou() {
    const ProductList = [
        {
            id: 1,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 2,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 3,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
        {
            id: 4,
            image: Img,
            title: "Artificial Leather Wallet for Men",
            price: 290,
            discount: 56,
            ratings: 4
        },
    ]
  return (
    <main className='mx-10 mt-5'>
        <h3 className='text-[--dark-color] text-3xl mb-2'>Just For You</h3>
        <div className="grid grid-cols-6 gap-3">
            {
                ProductList.map((curElem, index)=>(
                    <a href="" key={index} className='hover:shadow-lg'>
                        <ProductCard item={curElem}/>
                    </a>
                ))
            }
        </div>
    </main>
  )
}

export default JustForYou