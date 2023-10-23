import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { useContext } from "react"

const ProductDetails = () => {
    const { id } = useParams ();
    const { products } = useContext ( ProductContext );
    const { addToCart } = useContext ( CartContext );
    const product = products.find ( ( product ) => product.id === Number ( id ) );
    console.log ( product );
    if ( ! product ) return <div>Product not found</div>

    const { title , price , description , image } = product;
    return <section className=" py-12 lg:py-24 h-screen flex items-center">
        <div className="container">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                    <img src={ image } alt="product" className="w-[450px] lg:max-w-sm"/>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-2xl font-medium mb-2 max-w-[450px]">
                        { title }
                    </h1>
                    <div className="text-xl text-red-500 font-medium mb-6">
                        ${ price }
                    </div>
                    <p className="mb-8">
                        { description }
                    </p>
                    <button className="bg-red-500 text-white px-8 py-2 hover:bg-red-600 transition-all" onClick={()=>addToCart(product,product.id)
                    } >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </section>;
};

export default ProductDetails;
