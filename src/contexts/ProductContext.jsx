import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ products, loading }}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
