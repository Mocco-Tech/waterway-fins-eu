import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import NavLink from "./NavLink";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NavLinkWithChildren({
  children,
  href = "",
  childMenu = [],
  icon,
}: {
  children: React.ReactNode;
  href: string;
  childMenu: {
    label: string;
    href: string;
    childrens?: { label: string; href: string }[];
  }[];
  icon?: React.ReactNode;
}) {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <NavLink href={`/product-category/${href}`} icon={icon}>
          {children}
          <span className="absolute right-2">
            <ChevronRight strokeWidth={1.5} size={18} />
          </span>
        </NavLink>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit p-2" side="right" align="start">
        {childMenu.length > 0 && (
          <ul className="flex flex-col gap-1 w-full min-w-64">
            {childMenu.map((menuItem) => (
              <li key={menuItem.href} className="flex flex-col">
                <ChildNavLink href={menuItem.href}>
                  {menuItem.label}
                </ChildNavLink>
                {menuItem.childrens &&
                  menuItem.childrens.map((childrenItem) => (
                    <ChildNavLink
                      className="pl-10"
                      key={childrenItem.href}
                      href={childrenItem.href}
                    >
                      {childrenItem.label}
                    </ChildNavLink>
                  ))}
              </li>
            ))}
          </ul>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

function ChildNavLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={`/product-category/${href}`}
      className={buttonVariants({
        className: `w-full !justify-start ${className}`,
        variant: "ghost",
      })}
    >
      {children}
    </Link>
  );
}
