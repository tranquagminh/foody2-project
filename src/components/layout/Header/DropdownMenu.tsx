import React from 'react';
import Link from 'next/link';

interface DropdownMenuProps {
    items: { title: string; href: string }[];
  }
  
  const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
    return (
      <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <ul className="py-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-[#3cb815] hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default DropdownMenu;