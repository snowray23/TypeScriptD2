// Task 1: Define a React component named Card that accepts children props for dynamic content placement.
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;