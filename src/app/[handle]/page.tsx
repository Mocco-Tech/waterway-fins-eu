import React from "react";
import PageContent from "@/components/custom/PageContent";
import { getPage } from "@/lib/queries/page";
import { AtSign, CircleHelp } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqBlock from "@/components/custom/page/FaqBlock";

const faqs = [
  {
    question: "How to make an order?",
    answer: `Find the product you're interested in. Click on it and select the needed specifications (size, colour, stiffness, etc.). Click on the 'Add to cart' button. After that, your items will be added to the cart. In the top right corner, you will see the cart icon. Select it and navigate to the 'Checkout page' using the 'Checkout securely' button. After that, fill in your name, email, and address, select the payment method, and pay securely. You will receive an email confirmation within 5 minutes. Congratulations! You just made you order on Finswimmer Shop`,
  },
  {
    question: "How long does it take to manufacture the fins/monofins?",
    answer: `The production time varies from fin to fin and depends on the manufacturer's workload. The usual waiting time for custom-made fins and monofins is not less than 14-25 business days. Please note, that the production time written on the product page is just an estimate, not guaranteed.`,
  },
  {
    question: "How long does it take for the package to arrive ?",
    answer: `In most cases, orders are processed within 1-3 business days. The estimated shipping time varies based on your location: 10-16 days to the United States, 10-14 days within the EU, 10-16 days to Oceania and Asia, and 10-20 days to Africa and the Middle East. All orders are sent out by Priority Airmail. Please keep in mind that these are simply estimates; actual delivery times may vary depending on a variety of factors such as local customs clearance and postal service overload during peak seasons. While most snorkels, masks, noseclips, and bags are shipped within 2-3 business days, most fins and monofins require further customization or fabrication after you place your order, which can take anywhere from 2 to 21 days. We’ll keep you updated, and as soon as your order ships, we’ll send you an email with your shipment’s tracking information.`,
  },
  {
    question: "How much does shipping cost ?",
    answer: `The cost of shipping varies based on the destination of your order and the products you order. The price is computed automatically based on the weight of the items in the “Cart.” Please add the desired product(s) to your shopping basket to get an accurate delivery cost. To see the quote, go to the shopping cart page and pick the destination country and ZIP code. 
However, the approximate shipping price varies based on your location: 10-120€ to the United States, 8-100€ within the EU, 12-150€ to Oceania and Asia, and 12-130€ to Africa and the Middle East. `,
  },

  {
    question: "Where can I track my package ?",
    answer:
      "We will send you an email message with tracking information once your product has shipped. Simply enter the tracking number that we issued you through email to track your cargo and view its current status. Aftership is the best website for tracking packages. We have no control over the package once it has been dispatched or has left its country of origin. If you need more information on your package, you may trace it online or call your local post office to inquire about it.",
  },

  {
    question: "What should I do if the item arrived in different colour?",
    answer: `We don't always have all of the colours in stock due to great demand. If the colour you choose is out of stock, we'll send the closest match. This mostly applies to masks and, in rare instances, bags and rubber fins.`,
  },
  {
    question: "How to make a return?",
    answer:
      "Because all of our products are built to order and not sold on a trial basis, they are non-returnable. An order can only be cancelled and refunded in full within the first 24 hours after it is placed. Please contact our customer service staff to begin the refund process.",
  },
];

export default async function page({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const handle = (await params).handle;
  const pageData = await getPage(handle);

  if (pageData === null) notFound();

  return (
    <div className="max-w-screen-xl mx-auto py-8 md:py-16 px-4 md:px-10 flex flex-col md:flex-row gap-4 md:gap-8">
      <main className="flex-1">
        <h1 className="text-2xl font-medium uppercase mb-8">
          {pageData.title}
        </h1>
        {handle === "get-help" && <FaqBlock faqs={faqs} />}

        <PageContent rawHtmlContent={pageData.body.toString()} />
      </main>
      <aside className="w-full border-t border-border md:border-t-0 md:w-1/4 p-4 md:p-8 md:border-l md:border-border flex flex-col gap-8">
        <Link
          href="/get-help"
          className="flex flex-col items-center justify-center"
        >
          <CircleHelp strokeWidth={1.25} size={24} className="mb-3" />
          <p className="font-semibold mb-1">FAQ</p>
          <p className="mb-1">24/7</p>
        </Link>
        <a
          href="mailto:info@waterwayfins.eu"
          className="flex flex-col items-center justify-center"
        >
          <AtSign strokeWidth={1.25} size={24} className="mb-3" />
          <p className="font-semibold mb-1">Email us</p>
          <p className="mb-1">9:00 - 18:00</p>
          <p className="mb-1">Monday-Friday</p>
        </a>
      </aside>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const handle = (await params).handle;

  const pageSeo = await getPage(handle);
  if (pageSeo === null) notFound();

  const seoTitle = pageSeo?.seo.title ? pageSeo?.seo.title : pageSeo?.title;
  const seoDescription = pageSeo?.seo.description
    ? pageSeo?.seo.description
    : pageSeo?.bodySummary;

  return {
    title: `${seoTitle} | WaterWay Fins`,
    description: seoDescription,

    metadataBase: new URL("https://www.waterwayfins.eu"),
    openGraph: {
      title: `${seoTitle} | WaterWay Fins`,
      description: seoDescription,
      url: `https://www.waterwayfins.eu/${handle}`,
      siteName: "WaterWay Fins",
      images: [
        {
          url: "/empty-category.jpg",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
