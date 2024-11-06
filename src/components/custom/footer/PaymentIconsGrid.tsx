import React from "react";
import MasterCard from "../custom-icons/MasterCard";
import Visa from "../custom-icons/Visa";
import ApplePay from "../custom-icons/ApplePay";
import GooglePay from "../custom-icons/GooglePay";
import Amex from "../custom-icons/Amex";
import Discover from "../custom-icons/Discover";

export default function PaymentIconsGrid() {
  return (
    <div className="flex gap-1">
      <ApplePay />
      <GooglePay />
      <Visa />
      <MasterCard />
      <Discover />
      <Amex />
    </div>
  );
}
