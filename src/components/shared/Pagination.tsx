import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#3cb815] transition-colors
          ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3cb815] hover:text-white'}`}
      >
        ←
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#3cb815] transition-colors
            ${currentPage === number ? 'bg-[#3cb815] text-white' : 'hover:bg-[#3cb815] hover:text-white'}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#3cb815] transition-colors
          ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#3cb815] hover:text-white'}`}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;