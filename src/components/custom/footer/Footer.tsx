import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="max-w-screen-2xl mx-auto lg:mx-auto border-t border-border px-4 md:px-10 py-20">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
