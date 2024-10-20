import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NavLink({
  children,
  href,
  className,
  icon,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "ghost",
        className: `w-full !justify-start gap-3 !h-fit group duration-150 hover:text-primary relative ${className}`,
      })}
    >
      {icon && (
        <div className="bg-secondary/70 p-2 rounded group-hover:bg-white duration-150">
          {icon}
        </div>
      )}
      {children}
    </Link>
  );
}
