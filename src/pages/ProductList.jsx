import { useEffect,useState, useRef} from "react";
import ProductCard from "../components/productCard";
import Loading from "./Loading"
import NavBar from "../components/NavBar";

export default function ProductList(){
    const [product,setproduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [hasMore, setHasMore] = useState(false);
    const skip = useRef(0);
    const limit = 30;//product in one time


    const controller = new AbortController();
    async function fetchProducts(){
            try{
                console.log('fetching')
            setLoading(true);
            const url = `https://dummyjson.com/products?skip=${skip.current}&limit=${limit}`;
            const response = await fetch(url,{signal:controller.signal});
            if(!response.ok){
                throw new Error(`http error :${response.status}`)
            }
            const data = await response.json();
            setproduct(prev=> skip.current ===0?data.products: [...prev,...data.products]);
            setHasMore(data.total > skip.current+limit);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
        }


       async function searchProduct(){
            try{
                setLoading(true);
                const response = await fetch('https://dummyjson.com/products?limit=0',{signal: controller.signal});
                if(!response.ok){
                    throw new Error(`http error:${response.status}`);
                }
                const data = await response.json();
                const filteredData = data.products.filter(item=>{
                    return item.title.toLowerCase().includes(search.toLowerCase());
                });
                setproduct(filteredData);
            }catch(e){
                console.log(e.message);
            }finally{
                setLoading(false);
            }
        }
    useEffect(()=>{
        fetchProducts();
    },[])
    if(loading && product.length === 0){
        return (<Loading/>);
    }
    return(
        <>
        <NavBar/>
          <div className="bg-black rounded-xl p-1 w-5/6 mx-auto mt-4 flex justify-around"><input type="text" name="search" className="h-9 w-3/4 p-2 rounded-xl bg-sky-200" value={search} onChange={(e)=>{setSearch(e.target.value)}}
         />
        <button type="submit" className="text-white hover:cursor-pointer font-bold pt-1 " onClick={()=> {searchProduct()}}>SEARCH</button></div>
       
        <main className="grid lg:grid-cols-5 md:grid-cols-4 gap-4 sm:grid-cols-2 px-7 py-10">
            {product.map((pro) => (
                <ProductCard key={pro.id} product={pro}/>
            ))}
        </main>
        {hasMore && !loading?<button className="bg-blue-400 mx-auto mb-4 rounded-xl p-3 block" onClick={()=>{
             skip.current += limit;
            fetchProducts();
            }}>Load More</button>: <div className="bg-gray-300 mx-auto rounded-xl w-fit p-3">End of The List</div>}
        </>
    )
}