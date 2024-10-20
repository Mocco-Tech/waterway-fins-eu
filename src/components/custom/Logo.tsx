import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Logo({ className }: { className: string }) {
  return (
    <Link
      href="/"
      className={cn(
        `text-2xl font-semibold uppercase italic w-fit text-nowrap`,
        className
      )}
    >
      WaterWay Fins
    </Link>
  );
}
