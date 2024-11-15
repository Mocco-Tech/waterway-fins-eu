import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function ProductGridHeader({
  productsQty,
  categoryHandle,
  categoryTitle,
  description,
}: {
  productsQty: number;
  categoryHandle: string;
  categoryTitle: string;
  description?: string;
}) {
  const router = useRouter();

  function sortProducts(key: string) {
    if (categoryHandle === "shop" && key === "default") {
      router.push(`/${categoryHandle}`);
    } else if (categoryHandle === "shop" && key !== "default")
      router.push(`/${categoryHandle}?sortBy=${key}`);
    else if (categoryHandle !== "shop" && key === "default") {
      router.push(`/product-category/${categoryHandle}`);
    } else router.push(`/product-category/${categoryHandle}?sortBy=${key}`);
  }

  return (
    <div className={`col-span-full w-full flex items-center justify-between  px-4 md:px-0 ${categoryHandle === "shop"&&description?"":"flex-col gap-4 !items-start md:flex-row md:items-center"}`}>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-sm md:text-lg">
          {categoryTitle} ({productsQty})
        </p>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} className="gap-2">
            Sorting
            <ArrowUpDown size={16} strokeWidth={1.25} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="hidden">Sorting</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => sortProducts("default")}>
            Default
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => sortProducts("price_low_to_high")}>
            Price: low to high
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => sortProducts("price_high_to_low")}>
            Price: high to low
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => sortProducts("latest")}>
            Latest
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
