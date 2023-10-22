const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, price, category, image } = props;
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };
  return (
    <div className='w-full border-b border-[#e7e7e7] px-4 md:w-1/2 md:border-r lg:w-1/3 2xl:w-1/4 flex justify-center'>
      <div className='mb-10 mt-6'>
        <div className='mb-5 overflow-hidden rounded-md h-[300px]'>
          <img src={image} alt={title} className='w-full h-full' />
        </div>
        <div>
          <span className='mb-2 block text-base font-semibold text-black sm:text-xl md:text-lg 2xl:text-xl'>{formatCurrency(price)}</span>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Product;
