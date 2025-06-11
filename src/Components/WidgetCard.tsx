import React from 'react';

interface WidgetCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ title, description, icon }) => {
  return (
    <div className="w-40 h-40 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4 text-center transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="text-2xl text-gray-700 font-semibold mb-2">{icon && <div className="mb-2">{icon}</div>}{title}</div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default WidgetCard;
