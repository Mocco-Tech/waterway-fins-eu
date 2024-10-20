"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify";

export default function PageContent({
  rawHtmlContent,
  className,
}: {
  rawHtmlContent: string;
  className?: string;
}) {
  const sanitizedHtmlContent = DOMPurify.sanitize(rawHtmlContent);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
      className={`text-slate-700 leading-[1.35rem] shopify-render-text ${className}`}
    ></div>
  );
}
