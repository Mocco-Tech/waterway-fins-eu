import React from "react";
import Link from "next/link";
import { CartCost } from "@shopify/hydrogen-react";
import { buttonVariants } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function CartSubtotal({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <div className="shadow-custom px-4 pt-2 border-t border-border">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="font-medium">Subtotal:</p>
          <p className="text-sm">Shipping calculated at checkout.</p>
        </div>
        <CartCost amountType="subtotal" />
      </div>
      <Link
        href={checkoutUrl}
        className={buttonVariants({
          className: "w-full gap-2 h-12 rounded-lg",
        })}
      >
        <ShoppingBag size={22} strokeWidth={1.15} />
        Checkout securely
      </Link>
    </div>
  );
}
