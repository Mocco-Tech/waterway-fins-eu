import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="border-t border-border mx-4 md:mx-10 py-20">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
