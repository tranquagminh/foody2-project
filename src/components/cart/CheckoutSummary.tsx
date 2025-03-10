import { Button } from "@mui/material";

const CheckoutSummary = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#e2e8f0]">
      <h2 className="font-semibold mb-6">Checkout Details</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Total :</span>
          <span className="font-semibold">$750.00</span>
        </div>

        <div className="flex justify-between">
          <span>Total Discount :</span>
          <span className="font-semibold">$24.00</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated GST/CST :</span>
          <span className="font-semibold">$56.00</span>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon Discount :"
            className="flex-1 px-4 py-2 border rounded focus:outline-none border-[#e2e8f0] focus:border-[#3cb815]"
          />
          <Button 
            variant="contained"
            sx={{
              borderRadius: '6px',
              backgroundColor: '#3cb815',
              ":hover": {
                backgroundColor: '#2da012'
              }
            }}
          >
            Apply
          </Button>
        </div>

        <div className="flex justify-between items-center">
          <span>Delivery :</span>
          <span className="text-sm text-gray-500">*Free shipping over $150</span>
        </div>

        <div className="flex justify-between pt-4 border-t border-[#e2e8f0]">
          <span className="font-semibold">Order Total :</span>
          <span className="font-semibold">$605.00</span>
        </div>

        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: '6px',
            backgroundColor: '#3cb815',
            ":hover": {
              backgroundColor: '#2da012'
            }
          }}
        >
          Continue to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;