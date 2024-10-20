"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageInterface {
  node: {
    id: string;
    url: string;
  };
}

export default function ProductGallery({
  images,
  productTitle,
}: {
  images: ImageInterface[];
  productTitle: string;
}) {
  const [curImage, setCurImage] = useState(images[0].node.url);

  return (
    <aside className="flex flex-col items-start md:grid md:grid-cols-12 gap-2 md:sticky md:top-20 relative top-0 flex-1 self-start">
      <div className="col-start-1 col-end-2 flex no-scrollbar overflow-auto md:flex-col gap-2 order-2 md:order-1">
        {images.length > 1 &&
          images.map((image) => (
            <Image
              key={image.node.id}
              src={image.node.url}
              alt={`${productTitle} image`}
              width={100}
              height={100}
              className="md:w-full rounded object-contain h-fit w-20"
              onMouseEnter={() => setCurImage(image.node.url)}
            />
          ))}
      </div>
      <Image
        src={curImage}
        alt=""
        width={1000}
        height={1000}
        className="col-start-2 col-end-13 order-1 md:order-2 h-72 md:h-[600px] object-contain"
        priority
      />
    </aside>
  );
}
