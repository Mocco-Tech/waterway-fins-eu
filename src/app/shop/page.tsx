import React from "react";
import GridSection from "@/components/custom/category/GridSection";
import { notFound } from "next/navigation";
import { getSortedProducts } from "@/lib/helpers";
import { Metadata } from "next";
import { getProducts } from "@/lib/queries/products";

export const revalidate = 3600;

export default async function CategoryPage({
  searchParams,
}: {
  searchParams: { sortBy?: string };
}) {
  const productsAll = await getProducts();

  if (productsAll === null) notFound();

  const products = getSortedProducts(productsAll.edges, searchParams.sortBy!);

  return (
    <section className="max-w-screen-2xl py-5 md:px-10">
      <GridSection products={products} />
    </section>
  );
}

export const metadata: Metadata = {
  title: "Waterway Fins | Shop all",
  description:
    "Welcome to WaterWay Fins ! Here you'll find all you need for underwater sports. Shop for underwater equipment !",

  metadataBase: new URL("https://www.waterwayfins.com"),
  openGraph: {
    title: `Waterway Fins | Shop all`,
    description:
      "Welcome to WaterWay Fins ! Here you'll find all you need for underwater sports. Shop for underwater equipment !",
    url: `https://www.waterwayfins.com/shop`,
    siteName: "Waterway Fins",
    images: [
      {
        url: "/empty-category.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
