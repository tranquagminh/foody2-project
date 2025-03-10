import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Image from 'next/image';

const CartItem = () => {
    return (
      <div className="flex items-center gap-6 p-4 bg-white rounded-lg border border-[#e2e8f0] hover:border-[#3cb815] transition-colors">
        {/* Product Image */}
        <div className="w-24 h-24">
          <Image 
            src="/images/products/product-1.jpg" 
            alt="Banana"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </div>
  
        {/* Product Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs text-[#3cb815] uppercase">FRUITS</span>
              <h3 className="font-semibold">Banana <span className="text-sm text-gray-500">x5kg</span></h3>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-500">(98)</span>
              </div>
            </div>
            
            <FavoriteBorderIcon className="text-gray-400 cursor-pointer hover:text-red-500" />
          </div>
  
          {/* Quantity Controls & Price */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[#e2e8f0] rounded-full">
                <button className="px-3 py-1 rounded-full bg-[#e2e8f0] hover:bg-gray-100">-</button>
                <span className="px-4 py-1 ">5</span>
                <button className="px-3 py-1 rounded-full bg-[#e2e8f0] hover:bg-gray-100">+</button>
              </div>
              <DeleteOutlineIcon className="text-gray-400 cursor-pointer hover:text-red-500" />
            </div>
  
            <div className="text-right">
              <div className="font-semibold">$15.00</div>
              <div className="text-sm text-gray-500">Delivery on Thursday, 23 March</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default CartItem;