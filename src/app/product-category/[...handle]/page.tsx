import React from "react";
import { getCategory } from "@/lib/queries/category";
import GridSection from "@/components/custom/category/GridSection";
import { notFound } from "next/navigation";
import { getSortedProducts } from "@/lib/helpers";

export const revalidate = 3600;

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ handle: string[] }>;
  searchParams: Promise<{ sortBy?: string }>;
}) {
  const paramsforQuery = (await params).handle[
    (await params).handle.length - 1
  ];
  const collection = await getCategory(paramsforQuery);

  if (collection.collectionByHandle === null) notFound();

  const products = getSortedProducts(
    collection.collectionByHandle.products.edges,
    (await searchParams).sortBy!
  );

  return (
    <section className="max-w-screen-2xl mx-auto py-10 md:px-10">
      <GridSection
        products={products}
        categoryHandle={collection.collectionByHandle.handle}
        categoryTitle={collection.collectionByHandle.title}
        description={collection.collectionByHandle.description}
      />
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string[] }>;
}) {
  const paramsforQuery = (await params).handle[
    (await params).handle.length - 1
  ];
  const props = await getCategory(paramsforQuery);
  const collectionSeo = props?.collectionByHandle;

  const seoTitle = collectionSeo?.seo.title
    ? collectionSeo?.seo.title
    : collectionSeo?.title;
  const seoDescription = collectionSeo?.seo.description
    ? collectionSeo?.seo.description
    : collectionSeo?.description;
  const image = collectionSeo?.image?.src
    ? collectionSeo?.image?.src
    : "/empty-category.jpg";

  return {
    title: `${seoTitle} | WaterWay Fins`,
    description: seoDescription,

    metadataBase: new URL("https://www.waterwayfins.eu"),
    openGraph: {
      title: `${seoTitle} | WaterWay Fins`,
      description: seoDescription,
      url: `https://www.waterwayfins.eu/product-category/${
        (await params).handle
      }`,
      siteName: "WaterWay Fins",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
