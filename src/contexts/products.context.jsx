import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
//   setProducts: () => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
