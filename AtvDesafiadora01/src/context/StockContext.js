import React, { createContext, useState } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([
    { code: '001', name: 'Parafuso', quantity: 100 },
    { code: '002', name: 'Porca', quantity: 150 },
  ]);

  const addPart = (newPart) => {
    setStock(prev => [...prev, newPart]);
  };

  const updatePart = (code, newQuantity) => {
    setStock(prev => prev.map(part => 
      part.code === code ? { ...part, quantity: newQuantity } : part
    ));
  };

  return (
    <StockContext.Provider value={{ stock, addPart, updatePart }}>
      {children}
    </StockContext.Provider>
  );
};