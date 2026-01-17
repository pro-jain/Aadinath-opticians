import React, { createContext, useMemo } from 'react';
import { allProducts } from '../Components/Assets/data';

export const ShopContext = createContext({ products: [] });

const ShopContextProvider = ({ children }) => {
  const contextValue = useMemo(() => ({ products: allProducts }), []);

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
