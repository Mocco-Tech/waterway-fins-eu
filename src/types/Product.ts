import { Product as ShopifyProduct } from "@shopify/hydrogen-react/storefront-api-types";

export interface ProductWithCustomAttributes extends ShopifyProduct {
  brand: {
    value: string;
    key: string;
    references: {
      edges: {
        node: {
          id: string;
          handle: string;
          type: string;
          fields: { key: string; value: string }[];
        };
      }[];
    };
  };
  relatedProducts: { value: string };
  manufacturingTime: { value: string };
  deliveryTime: { value: string };
}

export interface Product {
  node: ProductWithCustomAttributes;
}
