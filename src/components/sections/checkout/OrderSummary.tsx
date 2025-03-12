import CartItem from '@/components/cart/CartItem';
import CheckoutSummary from '@/components/cart/CheckoutSummary';

export default function OrderSummary() {
  // Get cart items from context/state
  const cartItems = [
    { id: 1, name: 'DucComfort Sofa Premium', price: 20, quantity: 1 },
    { id: 2, name: 'IronOne Desk', price: 25, quantity: 1 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Review your cart</h3>
      
      <div className="space-y-4">
        {cartItems.map(item => (
          <CartItem key={item.id} />
        ))}
      </div>

      <CheckoutSummary />

      <div className="mt-6">
        <button 
          className="w-full bg-[#3cb815] text-white py-3 rounded-md hover:bg-[#2da012] transition"
          type="submit"
        >
          Pay Now - $605.00
        </button>
        
        <p className="text-sm text-gray-500 mt-4 flex items-center">
          Secure Checkout - SSL Encrypted
        </p>
      </div>
    </div>
  );
}