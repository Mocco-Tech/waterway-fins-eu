"use client";

import { Product } from "@shopify/hydrogen-react/storefront-api-types";
import React from "react";

export default function StructuredData({ product }: { product: Product }) {
  const productDescription = product?.seo?.description
    ? product?.seo?.description
    : product?.description;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images.edges[0].node.url,
    description: productDescription,
    brand: {
      "@type": "Brand",
      // @ts-expect-error: Extended product
      name: product.brand.references.edges[0].node.handle,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "107",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.waterwayfins.eu/product/${product.handle}`,
      priceCurrency: product.variants.edges[0].node.price.currencyCode,
      price: product.variants.edges[0].node.price.amount,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
