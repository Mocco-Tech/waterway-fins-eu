import { MetadataRoute } from "next";
import { getCategories } from "@/lib/queries/allCategories";
import { getProducts } from "@/lib/queries/products";
import { Category } from "@/types/Category";
import { Product } from "@/types/Product";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const categories = await getCategories();

  const URL = "https://www.waterwayfins.eu";

  const restUrls = [
    {
      url: `${URL}/`, // Home Page
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/shop`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/about-us`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/shipping-and-delivery`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/terms-and-conditions`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/get-help`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/return-and-exchange`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/payments`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/careers`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/become-a-reseller`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
  ];

  const allProducts = products.edges.map((product: Product, date: Date) => {
    return {
      url: `${URL}/product/${product.node.handle}`,
      lastModified: new Date(date),
      priority: 0.64,
      changeFrequency: "daily",
    };
  });

  const allCategories = categories.map((category: Category, date: Date) => {
    return {
      url: `${URL}/product-category/${category.node.handle}`,
      lastModified: new Date(date),
      priority: 0.64,
      changeFrequency: "daily",
    };
  });

  return [...restUrls, ...allProducts, ...allCategories];
}
