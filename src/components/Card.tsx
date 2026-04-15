import React from "react";

interface CardProps {
  name: string;
  description: string;
  price: number;
  className?: string; // Optional className prop
}

const Card: React.FC<CardProps> = ({ name, description, price, className }) => {
  return (
    <div className={`border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all ${className}`}>
      <h3 className="text-2xl text-red-900 mb-3">{name}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-xl font-bold text-red-900">Rp{price}</p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-800 transition">
          Info Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Card;