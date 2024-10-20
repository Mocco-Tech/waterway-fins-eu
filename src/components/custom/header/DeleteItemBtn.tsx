import React from "react";
import { CartLineQuantityAdjustButton } from "@shopify/hydrogen-react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export default function DeleteItemBtn() {
  return (
    <CartLineQuantityAdjustButton
      className="p-2 rounded-full bg-secondary hover:bg-destructive/90 hover:text-destructive-foreground text-secondary-foreground text-md duration-150"
      adjust="remove"
      onClick={() => {
        toast("Items has been removed from the cart");
      }}
    >
      <Trash2 size={18} strokeWidth={1.15} />
    </CartLineQuantityAdjustButton>
  );
}
