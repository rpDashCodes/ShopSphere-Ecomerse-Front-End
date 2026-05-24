import { Link } from "react-router-dom";
 import Rating from './Rating'
function ProductCard(props) {
  const product = props.product;
  console.log(product.id)
  const actPrice = Math.ceil(product.price *90 -product.price * (product.discountPercentage / 100) * 90);
  return (
    
<div className='
    transition-transform ease-in-out duration-500 
    border-2 border-gray-300 rounded-2xl p-3.5 
    hover:shadow-md shadow-gray-500
    inline-flex flex-col
    items-center relative overflow-hidden
    
    '>
      <Link to={`/products/${product.id}`} className="flex flex-col items-center w-full">
        {product.discountPercentage > 0 ? <div
          className='rounded-2xl bg-red-600 text-white font-semibold h-11 w-11 flex justify-center items-center absolute left-1.5 top-2.5 px-10'>{"-" + product.discountPercentage + "%"}</div> : null}
        <img src={product.thumbnail} alt={product.title} className='w-44 transition-transform duration-300 hover:scale-110 cursor-pointer
      '/>
        <div className='
      flex flex-col w-full'>
          <div className='
        text-xl text-blue-500 font-bold mb-2 line-clamp-1 w-60 md:w-40'>{product.title}</div>
          <div className='my-3 flex flex-row justify-between flex-wrap'>
            <span className="w-full flex justify-between">
              <span className='text-green-600 font-bold w-1/3'>₹
                {actPrice}
              </span>
              <span className='line-through ml-3 text-red-500'>
                ₹{(product.price * 90).toFixed(2)}
              </span></span>
            {actPrice > 500 ? <div className='text-green-400 w-3/4 ml-auto text-right'>Free Delivery</div> : <div className='text-gray-400 w-3/4 ml-auto text-right'>+ Delivery Charges</div>}
          </div>
          <div></div>
          <div>
            <Rating rating={product.rating}/>
          </div>

        </div>
    </Link>
      </div>
  )
}
export default ProductCard;