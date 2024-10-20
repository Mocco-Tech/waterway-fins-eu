"use client";
import React, { useState } from "react";
import { AddToCartButton, Money, useProduct } from "@shopify/hydrogen-react";
import { buttonVariants } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProductOptions from "./ProductOptions";
import PageContent from "../PageContent";
import { ProductWithCustomAttributes } from "@/types/Product";

type SelectedAttributes = { key: string; value: string };
type Option = {
  name: string;
  values: string[];
};

export default function ProductContent() {
  const productData = useProduct();
  const { selectedVariant, setSelectedOption } = productData;
  const options = productData.options as Option[];
  const product = productData.product as ProductWithCustomAttributes;

  const [selecteAttributes, setSelecteAttributes] = useState<
    SelectedAttributes[]
  >([]);

  function handleSelect(selectedKey: string, selectedValue: string) {
    const currentAttribute: { key: string; value: string } = {
      key: selectedKey,
      value: selectedValue,
    };

    setSelecteAttributes((currentAttributes) =>
      currentAttributes.length === 0 ||
      !currentAttributes.some(
        (attribute) => attribute.key === currentAttribute.key
      )
        ? [...currentAttributes, currentAttribute]
        : [
            ...currentAttributes.map((a) =>
              a.key === currentAttribute.key
                ? { ...a, value: currentAttribute.value }
                : a
            ),
          ]
    );
  }

  return (
    <main className="w-full md:w-[40%]">
      <h1 className="font-heading text-xl font-medium mb-2">{product.title}</h1>
      <h2 className="text-black/60 mb-4">
        {product.collections?.edges?.[0]?.node?.title === "Home page"
          ? product.collections.edges?.[1]?.node?.title
          : product.collections?.edges?.[0]?.node?.title}
      </h2>
      {selectedVariant?.price && (
        <Money
          data={selectedVariant.price}
          className="font-medium mb-10 tracking-wide"
        />
      )}

      {product?.metafields.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          {product?.metafields.map(
            (select) =>
              select && (
                <ProductOptions
                  key={select?.key}
                  name={select?.key.replaceAll("_", " ")}
                  // @ts-expect-error: Values come from the React Hydrogen
                  values={select.references.edges!}
                  type="metafields"
                  handleSelect={handleSelect}
                  selectedKey={select?.key}
                />
              )
          )}

          {options.length > 0 &&
            product?.variants?.edges?.length > 1 &&
            options?.map((option) => (
              <ProductOptions
                key={option.name}
                name={option.name}
                values={option.values}
                type="options"
                setSelectedOption={setSelectedOption}
              />
            ))}
        </div>
      )}

      <AddToCartButton
        variantId={selectedVariant?.id}
        attributes={selecteAttributes}
        className={buttonVariants({
          className: "w-full h-11 mb-10",
        })}
        onClick={() => {
          toast.success(`${product?.title} added to the cart`);
        }}
        disabled={
          selecteAttributes.length !==
          product?.metafields.filter((value) => value !== null).length
        }
      >
        Add to cart
      </AddToCartButton>

      <Accordion type="multiple" defaultValue={["description"]}>
        <AccordionItem value="description">
          <AccordionTrigger className="text-lg">Description</AccordionTrigger>
          <AccordionContent>
            <PageContent
              rawHtmlContent={product.descriptionHtml}
              className="text-sm"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="manufacturing-time">
          <AccordionTrigger className="text-lg">
            Manufacturing time and Delivery
          </AccordionTrigger>
          <AccordionContent className="leading-[1.35rem]">
            {product?.deliveryTime?.value ? (
              <p>
                Estimated delivery time for this product is{" "}
                <span className="underline">
                  {product?.deliveryTime?.value} days
                </span>
              </p>
            ) : (
              <p>
                Sorry, but the delivery time of this product is&apos;t available
                right now
              </p>
            )}
            {product?.manufacturingTime?.value ? (
              <p>
                Estimated manufacturing time for this product is{" "}
                <span className="underline">
                  {product?.manufacturingTime?.value} days
                </span>
              </p>
            ) : (
              <p>
                Sorry, but the manufacturing time of this product is&apos;t
                available right now
              </p>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
