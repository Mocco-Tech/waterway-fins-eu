import { createStorefrontClient } from "@shopify/hydrogen-react";

export const client = createStorefrontClient({
  storeDomain: "https://waterwayfins.myshopify.com",
  publicStorefrontToken: process.env.NEXT_PUBLIC_PUBLIC_STOREFRONT_API_TOKEN,
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN,
  storefrontApiVersion: "2025-04",
});
