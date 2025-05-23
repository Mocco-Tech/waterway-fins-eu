import React from "react";
import ProductGallery from "@/components/custom/product/ProductGallery";
import ProductDataProvider from "@/components/custom/product/ProductDataProvider";
import ProductContent from "@/components/custom/product/ProductContent";
import { getProduct } from "@/lib/queries/product";
import StructuredData from "@/components/custom/product/StructuredData";

export const revalidate = 3600;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const product = await getProduct((await params).handle);

  return (
    <ProductDataProvider product={product.productByHandle}>
      <section className="max-w-screen-xl mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row gap-10 items-start">
        <ProductGallery
          images={product.productByHandle.images.edges}
          productTitle={product.title}
        />

        <ProductContent />
      </section>
      <StructuredData product={product.productByHandle} />
    </ProductDataProvider>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const props = await getProduct((await params).handle);
  const product = props?.productByHandle;
  const productTitle = product?.seo?.title
    ? product?.seo?.title
    : product?.title;
  const productDescription = product?.seo?.description
    ? product?.seo?.description
    : product?.description;
  const productImage = product?.images?.edges[0]
    ? product?.images?.edges[0]?.node?.url
    : "/no-image.webp";

  return {
    title: productTitle + " - WaterWay Fins",
    description: `${productDescription?.substr(0, 155)}`,

    metadataBase: new URL("https://www.waterwayfins.eu"),
    openGraph: {
      title: productTitle,
      description: productDescription?.substr(0, 155),
      url: `https://www.waterwayfins.eu/product/${(await params).handle}`,
      siteName: "WaterWay Fins",
      images: [
        {
          url: productImage,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
