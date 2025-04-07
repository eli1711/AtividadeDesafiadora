import React, { createContext, useState } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState([
    { code: '001', name: 'Parafuso', quantity: 100 },
    { code: '002', name: 'Porca', quantity: 32 },
    { code: '003', name: 'Martelo', quantity: 12 },
    { code: '004', name: 'Arco de Serra', quantity: 543 },
    { code: '005', name: 'Lima', quantity: 38 },
    { code: '006', name: 'Punção', quantity: 123 },
    { code: '007', name: 'Maçarico', quantity: 75 },
    { code: '008', name: 'Morsa', quantity: 98 },
    { code: '009', name: 'Calibrador', quantity: 12 },
    { code: '010', name: 'Arruela', quantity: 845 },
    { code: '011', name: 'Hastes roscadas', quantity: 945 },
    { code: '012', name: 'Corrente', quantity: 234 },
    { code: '013', name: 'Anel de vedação', quantity: 160 },
    

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