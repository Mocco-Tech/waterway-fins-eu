import { Product } from "@/types/Product";

export function getSortedProducts(products: Product[], sortBy: string) {
  switch (sortBy) {
    case "latest":
      return products.sort(
        (a, b) => Number(b.node.publishedAt) - Number(a.node.publishedAt)
      );
    case "price_high_to_low":
      return products.sort(
        (a, b) =>
          Number(b.node.priceRange.minVariantPrice.amount) -
          Number(a.node.priceRange.minVariantPrice.amount)
      );

    case "price_low_to_high":
      return products.sort(
        (a, b) =>
          Number(a.node.priceRange.minVariantPrice.amount) -
          Number(b.node.priceRange.minVariantPrice.amount)
      );

    default:
      return products.sort(
        (a, b) => Number(b.node.publishedAt) - Number(a.node.publishedAt)
      );
  }
}
