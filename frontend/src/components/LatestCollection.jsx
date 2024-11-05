import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopContext"
import Title from "./Title";
import ProductItem from "./Productitem";


const LatestCollection = () => {
    const {products} =useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);
    // now we are going to add on product using useeffect

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));

    },[])

    
  return (
    <div className="my-10">
    <div className="text-center py-8 text-3xl">
    <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
    {/* YAHA tak hamne bilkul sahi code likha hai ekdm correct hai */}

    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem is very good.
    </p>
    {/* yaha tak code hamara bilkul perfect hai  */}
    </div>
    {/* Rendring product */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6">
{
    latestProducts.map((item,index)=>(

<ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>

    ))
}
    </div>

      
    </div>
  )
}

export default LatestCollection
