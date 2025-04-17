"use client";
import CartItem from "@/components/cart/CartItem";
import CheckoutSummary from "@/components/cart/CheckoutSummary";
import SectionContainer from "@/components/shared/SectionContainer";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useCart } from "@/context/CartContext"; // Import useCart
import Link from "next/link";

export default function CartPage() {
  const { cartItems } = useCart(); // Lấy danh sách sản phẩm từ CartContext

  return (
    <SectionContainer className="!py-0 bg-icon-pattern bg-[#f7f8fc]">
      <Container className="py-40">
        <Grid container spacing={4}>
          {/* Left Side - Cart Items */}
          <Grid item xs={12} lg={8} className="!pt-0">
            <Typography
              variant="h6"
              className=""
              sx={{
                fontFamily: "latin",
              }}
            >
              {cartItems.length} sản phẩm
            </Typography>

            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <Typography variant="body1" className="text-gray-500">
                Giỏ hàng trống.
              </Typography>
            )}

            <div className="flex gap-4 mt-8">
              <Button
                variant="outlined"
                className="rounded-md border-[#3cb815] text-[#3cb815] hover:bg-[#3cb815] hover:text-white"
                sx={{
                  borderRadius: "6px",
                  borderColor: "#3cb815",
                  color: "#3cb815",
                  ":hover": {
                    backgroundColor: "#3cb815",
                    color: "white",
                  },
                }}
              >
                <Link href="/">Quay lại</Link>
              </Button>
            </div>
          </Grid>

          {/* Right Side - Checkout Details */}
          <Grid item xs={12} lg={4}>
            <CheckoutSummary />
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
}
