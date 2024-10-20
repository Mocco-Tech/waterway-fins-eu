import React from "react";
import Logo from "../Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import NavLink from "./navigation/NavLink";
import Cart from "./Cart";
import NavLinkWithChildren from "./navigation/NavLinkWithChildren";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Monofin from "../icons/Monofin";
import Fins from "../icons/Fins";
import Blades from "../icons/Blades";
import Bag from "../icons/Bag";
import Footpockets from "../icons/Footpockets";
import Snorkel from "../icons/Snorkel";
import Mask from "../icons/Mask";
import DrylandSwimming from "../icons/DrylandSwimming";
import Accessories from "../icons/Accessories";

const monofinsMenu = [
  {
    label: "Competition monofins",
    href: "/monofins/competition-monofins",
    childrens: [
      {
        label: "For finswimming",
        href: "/monofins/competition-monofins/for-finswimming",
      },
      {
        label: "For freediving",
        href: "/monofins/competition-monofins/for-freediving",
      },
    ],
  },
  {
    label: "Training monofins",
    href: "/monofins/training-monofins",
  },
  {
    label: "Monofins for Kids",
    href: "/monofins/monofins-for-kids",
  },
  {
    label: "Mermaid monofins",
    href: "/monofins/mermaid-monofins",
  },
];

const finsMenu = [
  {
    label: "Freediving fins",
    href: "/fins/freediving-fins",
  },
  {
    label: "Lifesaving fins",
    href: "/fins/lifesaving-fins",
  },
  {
    label: "UW Rugby fins",
    href: "/fins/underwater-rugby-fins",
  },
  {
    label: "UW Hockey fins",
    href: "/fins/underwater-hockey-fins",
  },
  {
    label: "Rubber fins",
    href: "/fins/rubber-fins",
  },
];

const accessoriesMenu = [
  {
    label: "Glues",
    href: "/accessories/glues",
  },
  {
    label: "Freediving gears",
    href: "/accessories/freediving-gears",
  },
  {
    label: "Socks",
    href: "/accessories/socks",
  },
  {
    label: "Repair kits",
    href: "/accessories/repair-kits",
  },
  {
    label: "Souvenirs",
    href: "/accessories/souvenirs",
  },
  {
    label: "Swim caps",
    href: "/fins/swim-caps",
  },
];

export default function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto sticky top-0 bg-white z-50 border-b border-border">
      <div className="px-4 md:px-10 w-full grid grid-cols-2 lg:grid-cols-3 items-center justify-between py-4">
        <div className="flex items-start gap-3">
          <Logo className="" />
          <p className="hidden md:block text-red-600/90 font-medium lowercase italic text-sm">
            New design
          </p>
        </div>

        <div className="hidden lg:flex justify-self-center justify-start gap-2 items-center">
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Button className="w-fit bg-primary text-primary-foreground">
                Shop
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-full p-2">
              <ul className="flex flex-col gap-1 w-full min-w-80">
                <li>
                  <NavLinkWithChildren
                    href="monofins"
                    childMenu={monofinsMenu}
                    icon={<Monofin />}
                  >
                    Monofins
                  </NavLinkWithChildren>
                </li>
                <li>
                  <NavLinkWithChildren
                    href="fins"
                    childMenu={finsMenu}
                    icon={<Fins />}
                  >
                    Fins
                  </NavLinkWithChildren>
                </li>
                <li>
                  <NavLink href="/product-category/masks" icon={<Mask />}>
                    Masks
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/product-category/snorkels" icon={<Snorkel />}>
                    Snorkels
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/product-category/bags" icon={<Bag />}>
                    Bags
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/product-category/blades" icon={<Blades />}>
                    Blades
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/product-category/footpockets"
                    icon={<Footpockets />}
                  >
                    Footpockets
                  </NavLink>
                </li>
                <li>
                  <NavLinkWithChildren
                    href="accessories"
                    childMenu={accessoriesMenu}
                    icon={<Accessories />}
                  >
                    Accessories
                  </NavLinkWithChildren>
                </li>
                <li>
                  <NavLink
                    href="/product-category/dryland-swimming"
                    icon={<DrylandSwimming />}
                  >
                    Dryland swimming
                  </NavLink>
                </li>
              </ul>
            </HoverCardContent>
          </HoverCard>

          <ul className="flex justify-start gap-2">
            <li>
              <Link href="/" className={buttonVariants({ variant: "ghost" })}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={buttonVariants({ variant: "ghost" })}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "ghost" })}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="justify-self-end flex items-center gap-4">
          {/* <Search size={22} strokeWidth={1.15} />
          <User size={22} strokeWidth={1.15} /> */}

          <Cart />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu size={22} strokeWidth={1.15} />
      </SheetTrigger>
      <SheetContent className="pt-12">
        <SheetTitle className="hidden">Menu</SheetTitle>
        <SheetDescription className="hidden">Categories menu</SheetDescription>
        <Accordion type="single" collapsible className="">
          <ul className="flex flex-col gap-3">
            <li className="">
              <AccordionItem value="monofins" className="border-b-0">
                <AccordionTrigger className="p-0 focus:no-underline">
                  Monofins
                </AccordionTrigger>
                <AccordionContent className="pt-4 pl-2">
                  <ul className="flex flex-col gap-3">
                    <MobileMenuLink href="/product-category/monofins/competition-monofins">
                      Competition monofins
                    </MobileMenuLink>
                    <div className="pl-4 flex flex-col gap-3">
                      <MobileMenuLink href="/product-category/monofins/competition-monofins/for-finswimming">
                        For finswimming
                      </MobileMenuLink>
                      <MobileMenuLink href="/product-category/monofins/competition-monofins/for-freediving">
                        For freediving
                      </MobileMenuLink>
                    </div>
                    <MobileMenuLink href="/product-category/monofins/training-monofins">
                      Training monofins
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/monofins/monofins-for-kids">
                      Monofins for Kids
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/monofins/mermaid-monofins">
                      Mermaid Monofins
                    </MobileMenuLink>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </li>

            <li className="">
              <AccordionItem value="fins" className="border-b-0">
                <AccordionTrigger className="p-0 focus:no-underline">
                  Fins
                </AccordionTrigger>
                <AccordionContent className="pt-4 pl-2">
                  <ul className="flex flex-col gap-2">
                    <MobileMenuLink href="/product-category/fins/freediving-fins">
                      Freediving fins
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/fins/lifesaving-fins">
                      Lifesaving fins
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/fins/underwater-hockey-fins">
                      UW Hockey fins
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/fins/underwater-rugby-fins">
                      UW Rugby fins
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/fins/rubber-fins">
                      Rubber fins
                    </MobileMenuLink>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </li>

            <MobileMenuLink href="/product-category/masks">
              Masks
            </MobileMenuLink>
            <MobileMenuLink href="/product-category/snorkels">
              Snorkels
            </MobileMenuLink>
            <MobileMenuLink href="/product-category/blades">
              Bags
            </MobileMenuLink>
            <MobileMenuLink href="/product-category/blades">
              Blades
            </MobileMenuLink>
            <MobileMenuLink href="/product-category/footpockets">
              Footpockets
            </MobileMenuLink>
            <MobileMenuLink href="/product-category/dryland-swimming">
              Dryland swimming
            </MobileMenuLink>

            <li className="">
              <AccordionItem value="accessories" className="border-b-0">
                <AccordionTrigger className="p-0 focus:no-underline">
                  Accessories
                </AccordionTrigger>
                <AccordionContent className="pt-4 pl-2">
                  <ul className="flex flex-col gap-2">
                    <MobileMenuLink href="/product-category/accessories/glues">
                      Glues
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/accessories/freediving-gears">
                      Freediving gears
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/accessories/socks">
                      Socks
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/accessories/repair-kits">
                      Repair kits
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/accessories/souvenirs">
                      Souvenirs
                    </MobileMenuLink>
                    <MobileMenuLink href="/product-category/accessories/swim-caps">
                      Swim caps
                    </MobileMenuLink>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </li>
          </ul>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}

function MobileMenuLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <SheetClose asChild>
        <Link href={href} className="text-sm font-medium w-full">
          {children}
        </Link>
      </SheetClose>
    </li>
  );
}
