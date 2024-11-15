import ProductCard from "@/components/custom/category/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { getCategory } from "@/lib/queries/category";
import { getHomepageCategories } from "@/lib/queries/homepageCategories";
import { Product } from "@/types/Product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  handle: string;
  title: string;
  image: { src: string };
}

export const metadata: Metadata = {
  title: "WaterWay Fins - shop for underwater sport equipment",
  description:
    "Welcome to WaterWay Fins ! Here you'll find all you need for underwater sports. Shop for underwater equipment !",

  metadataBase: new URL("https://www.waterwayfins.eu"),
  openGraph: {
    title: `WaterWay Fins - shop for underwater sport equipment`,
    description:
      "Welcome to WaterWay Fins ! Here you'll find all you need for underwater sports. Shop for underwater equipment !",
    url: `https://www.waterwayfins.eu`,
    siteName: "Waterway Fins =",
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

export default async function Home() {
  const category = await getCategory("frontpage");
  const categories = await getHomepageCategories();
  const categoriesArr = Object.values(categories);

  return (
    <section className="max-w-screen-2xl mx-auto">
      <HeroBanner />

      <HomepageGrid
        title="Categories"
        type="categories"
        categories={categoriesArr as CategoryItem[]}
      />

      <HomepageGrid
        title="Best selling products"
        type="products"
        products={category.collectionByHandle.products.edges}
      />
    </section>
  );
}

function HeroBanner() {
  return (
    <div className="h-[70vh] relative overflow-hidden">
      <Image
        src="/empty-category.jpg"
        alt=""
        width={1500}
        height={1500}
        className="absolute top-0 left-0 h-full w-full object-cover"
        priority
      />
      <div className="px-4 md:px-10 py-10 relative z-10 h-full flex flex-col justify-end bg-black/50">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white uppercase mb-2">
          Swim & Win.
        </h1>
        <p className="text-primary-foreground mb-4">
          Become a champion with WaterWay Fins
        </p>
        <Link
          href="/shop"
          className={buttonVariants({
            variant: "secondary",
            className: "w-full sm:w-fit",
          })}
        >
          Shop
        </Link>
      </div>
    </div>
  );
}

function HomepageGrid({
  title,
  type,
  products = [],
  categories = [],
}: {
  title: string;
  type: "categories" | "products";
  products?: Product[];
  categories?: CategoryItem[];
}) {
  return (
    <div className="my-10 md:my-14 lg:my-20">
      <div className="px-4 md:px-10">
        <h2 className="text-2xl font-medium mb-8">{title}</h2>
      </div>
      <div className="w-full flex gap-3 overflow-x-auto no-scrollbar">
        {type === "categories"
          ? categories.map((category, index) => (
              <Link
                href={`/product-category/${category.handle}`}
                key={index}
                className={`w-3/4 md:w-[31%] flex-shrink-0 ${
                  index === 0 && "ml-4 md:ml-10"
                } ${index === categories.length - 1 && "mr-4 md:mr-10"}`}
              >
                <Image
                  src={
                    category.image?.src
                      ? category.image.src
                      : "/empty-category.jpg"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-80 md:h-[70vh] lg:h-[450px] mb-6 rounded-md object-cover"
                  priority
                />
                <p className="text-lg font-medium text-black">
                  {category.title}
                </p>
              </Link>
            ))
          : products.map((gridItem, index) => (
              <ProductCard
                key={index}
                product={gridItem}
                className={`w-1/2 lg:w-1/4 flex-shrink-0 ${
                  index === 0 && "ml-4 md:ml-10"
                } ${index === products.length - 1 && "mr-4 md:mr-10"}`}
              />
            ))}
      </div>
    </div>
  );
}
