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
}: {
  productsQty: number;
  categoryHandle: string;
  categoryTitle: string;
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
    <div className="col-span-full w-full flex justify-between items-center px-4 md:px-0">
      <p className="font-medium text-sm md:text-lg">
        {categoryTitle} ({productsQty})
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="gap-2">
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
