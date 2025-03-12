import CheckoutForm from "@/components/sections/checkout/CheckoutForm";
import OrderSummary from "@/components/sections/checkout/OrderSummary";
import SectionContainer from "@/components/shared/SectionContainer";

export default function CheckoutPage() {
    return (
        <SectionContainer>
            <div className="container mx-auto px-4 py-15 bg-icon-pattern">
                <h1 className="text-3xl font-bold mb-8">Checkout</h1>
                
                <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <CheckoutForm />
                </div>
                
                {/* Order Summary */}
                <div className="md:col-span-1">
                    <OrderSummary />
                </div>
                </div>
            </div>
        </SectionContainer>
      
    );
  }