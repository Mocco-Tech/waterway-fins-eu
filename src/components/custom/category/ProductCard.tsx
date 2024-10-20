"use client";

import { Product } from "@/types/Product";
import { Money } from "@shopify/hydrogen-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Link
      href={`/product/${product.node.handle}`}
      className={`block flex-shrink-0 rounded-lg relative group ${className}`}
    >
      <div className="overflow-hidden">
        <Image
          src={product.node.images.edges[0].node.url}
          alt={`${product.node.title} image`}
          width={500}
          height={500}
          className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-contain rounded-md mb-2"
        />
      </div>
      <div className="px-3 md:px-0">
        <h4 className="font-medium">{product.node.title}</h4>
        <p className="text-black/60 mb-2">
          {product?.node.brand?.references.edges[0].node.fields[0].value}
        </p>
        <Money
          data={product.node.priceRange.minVariantPrice}
          className={"mb-2 font-medium"}
        />
      </div>
    </Link>
  );
}
