
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Plus, Minus } from 'lucide-react';

interface CollapsiblePanelProps {
  title: string;
  color?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (term: string) => void;
}

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({
  title,
  color = 'bg-maroon',
  icon,
  children,
  defaultOpen = true,
  showSearch = false,
  searchPlaceholder = 'Search...',
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <div className="w-full rounded-lg overflow-hidden mb-4 shadow-sm transition-all duration-300">
      {/* Header */}
      <div 
        className={`${color} text-white px-4 py-3 flex justify-between items-center cursor-pointer`}
        onClick={handleToggle}
      >
        <div className="flex items-center space-x-2">
          {icon && <span>{icon}</span>}
          <h3 className="font-bold">{title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          {showSearch && isOpen && (
            <div 
              className="relative flex items-center bg-white bg-opacity-20 rounded-md px-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Search className="w-4 h-4 text-white" />
              <input 
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder={searchPlaceholder}
                className="bg-transparent text-white placeholder-white placeholder-opacity-70 text-sm py-1 px-2 focus:outline-none w-28"
              />
            </div>
          )}
          <button className="focus:outline-none" aria-label={isOpen ? 'Collapse' : 'Expand'}>
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-[500px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white p-4 rounded-b-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsiblePanel;
