import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";

export default function NotFound() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-10 md:px-6 md:py-20 flex flex-col justify-center items-center text-black">
      <h1 className="text-3xl font-semibold mb-5">404</h1>
      <p className="">
        Oops, there might be an error in your request, the page doesn&apos;t
        exist
      </p>
      <p className="mb-5">Try to find something else on our website</p>
      <div className="flex gap-3">
        <Link href="" className={buttonVariants({ variant: "secondary" })}>
          Home
        </Link>
        <Link href="" className={buttonVariants({ variant: "default" })}>
          Shop
        </Link>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Waterway Fins Europe - 404",
  description:
    "Oops, there might be an error in your request, the page doesn&apos;texist",
};
