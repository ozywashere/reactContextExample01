import PropTypes from 'prop-types';
import { BsEyeFill } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // eslint-disable-next-line react/prop-types
  const { id, title, price, image, rating } = product;
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };
  return (
    <div>
      <div className='mb-4 relative overflow-hidden group transition rounded-sm'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='mx-auto  flex items-center justify-center'>
            <img src={image} alt={title} className='max-h-[200px] group-hover:scale-110 transition duration-500' />
          </div>
          {/* buttons */}
          <div className='absolute top-0 -right-11 group-hover:right-5 p-2 drop-shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button onClick={() => addToCart(product, id)}>
              <AiOutlineShopping className='w-10 h-10 p-1 text-white bg-red-500' />
            </button>
            <a href={`product/${id}`} className=''>
              <BsEyeFill className='w-10 h-10 p-1 bg-white  text-dark ' />
            </a>
          </div>
        </div>
      </div>
      <div className='px-2 pb-8'>
        <h2>
          <a
            href={`product/${id}`}
            className='mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl
            '>
            {
              // eslint-disable-next-line react/prop-types
              title.length > 20 ? `${title.slice(0, 20)}...` : title
            }
          </a>
        </h2>
        <p className='text-base font-medium text-body-color mb-2'>
          {formatCurrency(price)}
          <span className='ml-2 text-sm line-through text-gray-400'>{formatCurrency(price + 100)}</span>
        </p>
        <p className='flex items-center text-base font-medium text-body'>
          <span className='pr-1'>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z'
                fill='#FFA645'></path>
            </svg>
          </span>
          <span className='pr-1'>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z'
                fill='#FFA645'></path>
            </svg>
          </span>
          <span className='pr-1'>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z'
                fill='#FFA645'></path>
            </svg>
          </span>
          <span className='pr-1'>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z'
                fill='#FFA645'></path>
            </svg>
          </span>
          <span className='pr-3'>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z'
                stroke='#FFA645'></path>
            </svg>
          </span>
          <span className='text-sm text-body'>{rating.count} Reviews</span>
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Product;
