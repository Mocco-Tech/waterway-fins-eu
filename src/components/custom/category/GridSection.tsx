"use client";

import React from "react";
import ProductGridHeader from "./ProductGridHeader";
import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function GridSection({
  products,
  categoryHandle = "shop",
  categoryTitle = "Shop",
}: {
  products: Product[];
  categoryHandle?: string;
  categoryTitle?: string;
}) {
  return (
    <section className="flex gap-10 pb-10">
      <main className="flex-1">
        <div className="grid gap-x-3 md:gap-x-6 gap-y-8 md:gap-y-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductGridHeader
            productsQty={products.length}
            categoryHandle={categoryHandle}
            categoryTitle={categoryTitle}
          />
          {products.length === 0 ? (
            <EmptyCategory />
          ) : (
            products.map((product: Product) => (
              <ProductCard key={product.node.handle} product={product} />
            ))
          )}
        </div>
      </main>
    </section>
  );
}

function EmptyCategory() {
  return (
    <div className="col-start-1 -col-end-1 text-center">
      <h2 className="mb-4">
        We&apos;re sorry, but this category is empty.
        <br /> Come and check it later, or browse for other categories.
      </h2>
      <Link href="/shop" className={buttonVariants({ variant: "default" })}>
        Shop all
      </Link>
    </div>
  );
}
