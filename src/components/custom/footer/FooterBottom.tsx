import Link from "next/link";
import React from "react";
import PaymentIconsGrid from "./PaymentIconsGrid";

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-10 flex-col md:flex-row flex-wrap text-sm font-medium text-slate-600">
        <p className="order-2 md:order-1">
          © {year} Waterway Fins Group Ltd. All rights reserved
        </p>
        <ul className="order-1 md:order-2 flex flex-col md:flex-row gap-6">
          {/* <li>
          <Link href="/guides" className="hover:text-primary">
            Guides
          </Link>
        </li> */}
          <li>
            <Link href="/terms-and-conditions" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </li>
          {/* <li>
          <Link href="/company-details" className="hover:text-primary">
            Company Details
          </Link>
        </li> */}
        </ul>
      </div>
      <PaymentIconsGrid />
    </div>
  );
}
