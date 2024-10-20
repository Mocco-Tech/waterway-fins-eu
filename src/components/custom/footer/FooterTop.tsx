import Link from "next/link";
import React from "react";

export default function FooterTop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-20">
      <div className="mb-20 md:mb-0">
        <h4 className="mb-6 md:mb-10 text-sm font-medium text-slate-700">
          Help
        </h4>
        <ul className="flex flex-col gap-4 text-sm text-slate-700">
          <li>
            <Link href="/get-help" className="hover:text-primary">
              Get help
            </Link>
          </li>
          {/* <li>
            <Link href="/order-status" className="hover:text-primary">
              Order status
            </Link>
          </li> */}
          <li>
            <Link href="/shipping-and-delivery" className="hover:text-primary">
              Shipping and Delivery
            </Link>
          </li>
          <li>
            <Link href="/return-and-exchange" className="hover:text-primary">
              Returns
            </Link>
          </li>
          <li>
            <Link href="/payments" className="hover:text-primary">
              Payment options
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary">
              Contact us
            </Link>
          </li>
          {/* <li>
            <Link href="reviews" className="hover:text-primary">
              Reviews
            </Link>
          </li> */}
        </ul>
      </div>

      <div className="mb-20 md:mb-0">
        <h4 className="mb-6 md:mb-10 text-sm font-medium text-slate-700">
          Resources
        </h4>
        <ul className="flex flex-col gap-4 text-sm text-slate-700">
          <li>
            <Link href="#" className="hover:text-primary">
              WaterWay Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary">
              Become a member
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary">
              Feedback
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:mb-0">
        <h4 className="mb-6 md:mb-10 text-sm font-medium text-slate-700">
          Company
        </h4>
        <ul className="flex flex-col gap-4 text-sm text-slate-700">
          <li>
            <Link href="/about" className="hover:text-primary">
              About WaterWay Fins
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary">
              News
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-primary">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/become-a-reseller" className="hover:text-primary">
              Become a reseller
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
