"use client";
import CartItem from "@/components/cart/CartItem";
import CheckoutSummary from "@/components/cart/CheckoutSummary";
import SectionContainer from "@/components/shared/SectionContainer";
import { Container, Grid, Typography, Button } from "@mui/material";

export default function CartPage() {
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
              3 Items Added
            </Typography>

            <div className="space-y-4 ">
              {/* Cart Item */}
              <CartItem />
              <CartItem />
              <CartItem />
            </div>

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
                Go To Back
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
