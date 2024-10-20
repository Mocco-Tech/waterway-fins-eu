"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import {
  CartLineProvider,
  CartWithActions,
  useCart,
} from "@shopify/hydrogen-react";
import CartItem from "./CartItem";
import CartSubtotal from "./CartSubtotal";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Cart() {
  const cart: CartWithActions = useCart();

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <ShoppingBag size={22} strokeWidth={1.15} />
        <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-primary rounded-full text-sm text-center text-primary-foreground">
          {cart.totalQuantity}
        </div>
      </SheetTrigger>
      <SheetContent className="w-[90%] px-0 flex flex-col justify-between">
        {cart.totalQuantity !== 0 ? (
          <>
            <div className="px-4 overflow-y-scroll no-scrollbar">
              <SheetHeader className="mb-6">
                <SheetTitle>Shopping cart</SheetTitle>
                <SheetDescription className="hidden">
                  This is a shopping cart of WaterWay Fins website
                </SheetDescription>
              </SheetHeader>
              <CartItems cart={cart} />
            </div>
            <CartSubtotal checkoutUrl={cart.checkoutUrl!} />
          </>
        ) : (
          <CartEmpty />
        )}
      </SheetContent>
    </Sheet>
  );
}

function CartItems({ cart }: { cart: CartWithActions }) {
  return (
    <div className="flex flex-col gap-3">
      {cart.lines?.map((line, index) => (
        <CartLineProvider line={line!} key={index}>
          {/* @ts-expect-error: Should expect line from Shopify Hydrogen */}
          <CartItem line={line} />
        </CartLineProvider>
      ))}
    </div>
  );
}

function CartEmpty() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-4 h-full">
      <Image
        src="/empty-cart.png"
        alt="Empty cart image"
        width={512}
        height={512}
        className="w-32"
      />
      <div className="text-center">
        <p className="font-heading font-medium text-xl text-slate-700">
          Your cart is empty
        </p>
        <p className="text-slate-500 text-sm font-medium">
          There are no products in your cart
        </p>
      </div>
      <SheetClose asChild>
        <Link href="/shop" className={buttonVariants({ className: "w-full" })}>
          Shop all
        </Link>
      </SheetClose>
    </div>
  );
}
