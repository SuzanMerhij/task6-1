import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductsCards from "../ProductsCards/ProductsCards";
import { Data } from "../../Data";
const CardSlide = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
     <Carousel  
       infinite={true}
       showDots={true} 
       responsive={responsive}
       >
             {Data.map((product,index)=>
             <ProductsCards 
             key={index}
             img={product.img}
             title={product.title}
             price={product.price}/>
             )}
     </Carousel>   
    )
}
export default CardSlide
