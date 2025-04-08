import React, { createContext, useState } from 'react';

// Cria o contexto de estoque que será utilizado para compartilhar dados e funções
export const StockContext = createContext();

// Componente provider que engloba a aplicação e disponibiliza os dados do estoque
export const StockProvider = ({ children }) => {
  // Estado inicial do estoque com uma lista de peças
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

  // Função para adicionar uma nova peça ao estoque
  const addPart = (newPart) => {
    // Atualiza o estado adicionando a nova peça à lista atual
    setStock(prev => [...prev, newPart]);
  };

  // Função para atualizar a quantidade de uma peça específica pelo seu código
  const updatePart = (code, newQuantity) => {
    // Mapeia o estoque, alterando apenas a peça que possua o código informado
    setStock(prev => prev.map(part => 
      part.code === code ? { ...part, quantity: newQuantity } : part
    ));
  };

  return (
    // Provedor do contexto que disponibiliza o estoque, a função de adicionar e a função de atualizar
    <StockContext.Provider value={{ stock, addPart, updatePart }}>
      {children}
    </StockContext.Provider>
  );
};


//Guilherme Calandrim Fávero e Eli Hfni Mariano