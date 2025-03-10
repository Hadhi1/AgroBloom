import React from 'react';

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon, count }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{count} Products</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;