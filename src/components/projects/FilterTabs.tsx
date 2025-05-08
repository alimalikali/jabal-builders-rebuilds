'use client';


interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterTabs = ({ categories, activeCategory, onCategoryChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-6 px-4 min-w-full pb-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-3 rounded-full text-sm md:text-base whitespace-nowrap transition-colors min-h-[44px] flex items-center justify-center ${
            activeCategory === category
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};