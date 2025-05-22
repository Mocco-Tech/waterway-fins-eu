"use client";

import { ShopifyProvider } from "@shopify/hydrogen-react";
import React, { ReactNode } from "react";

export default function ShopifyDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ShopifyProvider
      storeDomain="https://waterwayfins.myshopify.com"
      storefrontToken="c0545fe0bc9968734c30d6b3bbea1893"
      storefrontApiVersion="2025-04"
      countryIsoCode="EE"
      languageIsoCode="EN"
    >
      {children}
    </ShopifyProvider>
  );
}
