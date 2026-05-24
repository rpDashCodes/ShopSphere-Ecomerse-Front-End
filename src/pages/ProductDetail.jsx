import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//importing components
import NavBar from "../components/NavBar";
import ImageGallery from "../components/ImageGallery";
import Rating from "../components/Rating";
import ProductInfo from "../components/ProductInfo";
import Review from "../components/Review";

function ProductDetail({ }) {
    const [detail, setDetail] = useState(null);
    const id = useParams().id;//product id

    const [togInfo,setInfo] = useState("Info");//stores the information what user selects

    useEffect(() => {
        async function fetchSingleProduct() {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                if (!response.ok) {
                    throw new Error('http error' + response.status)
                } else {
                    const data = await response.json();
                    setDetail(data);
                }
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchSingleProduct();
    }, [])

    //function for calculate discounted price
    function calculatePrice(price) {
        return Math.ceil((price - price * detail.discountPercentage / 100) * 90);
    }

    function handleInfoClick(){
        setInfo("Info");
    }

    function handleReviewClick(){
        setInfo("Review");
    }

    if (!detail) {
    return <div>Loading...</div>;
}
    return (
        <>
            <NavBar />
            <main className="grid sm:grid-cols-2 m-3 p-5">
                {/* this is a flex box have an image and div for product detail */}
                <ImageGallery images={detail.images} />
                <div className="flex flex-col mt-12 lg:mt-0">
                    <div className="text-gray-600">{detail.brand}</div>
                    <div className="font-bold text-2xl">{detail.title}</div>
                    <div >{detail.description}</div>
                    <div className="flex space content-between gap-4">
                        <div className="font-bold text-2xl">₹{calculatePrice(detail.price)}</div>
                        <div className="line-through text-2xl">{(detail.price * 90).toFixed(2)}</div>
                        <div className=
                            " bg-green-200 text-green-700 px-2 py-1 rounded-md">SAVE ₹{Math.floor(detail.price * 90 - calculatePrice(detail.price))}</div>
                    </div>
                    <Rating rating={detail.rating}/>
                    <div className="mt-12 flex justify-around">
                        <button className="bg-blue-600 text-xl sm:text-2xl text-white p-2 rounded-md mr-2  hover:cursor-pointer active:scale-95 max-[350px]:text-base">Buy Now</button>
                        <button  className="bg-pink-800 text-xl sm:text-2xl text-white p-2 rounded-md ml-2  hover:cursor-pointer active:scale-95 max-[350px]:text-base">Add To Cart</button>
                    </div>

                    <div className="bg-gray-200 flex mb-4 mt-12">
                        <div className={`${togInfo === 'Info'?'text-blue-600 border-b-blue-600 border-b-2':'text-gray-700'} p-3 text-xl font-bold`} onClick={handleInfoClick}>More Info</div>
                        <div className={`${togInfo === 'Review'?'text-blue-600 border-b-blue-600 border-b-2':'text-gray-700'} p-3 text-xl font-bold`} onClick={handleReviewClick}>Reviews</div>
                    </div>
                    {togInfo === "Info"? 
                    <ProductInfo moreInfo={{dimensions: detail.dimensions, warentyInfo:detail.warrantyInformation }} /> : <div className="max-h-80 overflow-scroll md:max-h-1/2">{detail.reviews?.map((review, currentIndex)=>(<Review key={currentIndex} current={review}/>))}</div>}
                </div>
            </main>
        </>
    )
}
export default ProductDetail;