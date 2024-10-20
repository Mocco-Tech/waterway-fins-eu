import React from "react";
import Faq from "../Faq";

export default function FaqBlock({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div>
      {faqs.map((faq) => (
        <Faq key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
