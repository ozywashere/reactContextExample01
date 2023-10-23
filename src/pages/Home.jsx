import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
    const { products } = useContext ( ProductContext );
    const filteredProducts = products.filter ( ( product ) => {
        return product.category === "men's clothing" || product.category === "women's clothing";
    } );


    return ( <div>
        <Hero/>
        <section className='py-16'>
            <div className='container'>
                <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-4'>
                        <div className='mx-auto mb-12 lg:mb-20 max-w-[510px] text-center'>
                                <span
                                    className='mb-2 block text-lg font-semibold text-primary'>Our Best Selling Items</span>
                            <h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]'>Top
                                Collections</h2>
                            <p className='text-base text-body'>
                                There are many variations of passages of Lorem Ipsum available but the majority have
                                suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-[30px] max-w-sm mx-auto md:max-w-none'>
                    { filteredProducts.slice ( 0 , 10 ).map ( ( product ) => {
                        return <Product key={ product.id } product={ product }/>;
                    } ) }
                </div>
            </div>
        </section>
    </div> );
};

export default Home;
