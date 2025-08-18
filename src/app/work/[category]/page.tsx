"use client";
import "photoswipe/style.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import Header from "@/app/_components/header";
// Load Photoswipe components on the client only
const Gallery = dynamic(
  () => import("react-photoswipe-gallery").then((m) => m.Gallery),
  { ssr: false }
);
const Item = dynamic(
  () => import("react-photoswipe-gallery").then((m) => m.Item),
  { ssr: false }
);
import { WORK, Category } from "@/lib/projects";

// This is the options for the lightbox
const options = {
  zoom: true,
  close: true,
};

export default function WorkCategoryPage() {
  const { category } = useParams<{ category: Category }>();
  const section = WORK[category];
  if (!section) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-lg text-gray-600">
          This section doesn&apos;t exist.
        </p>
        <Link href="/work/weddings" className="underline hover:text-gray-700">
          Go to Weddings
        </Link>
      </div>
    );
  }

  return (
    <div className="md:h-[100vh]] ">
      <Header />
      <Gallery options={options}>
        <div
          id={category as string}
          className="grid max-md:px-4
  grid-cols-1 sm:grid-cols-2 gap-4
         [--gap:16px]
    [--col:calc((100vw-(5*var(--gap)))/6)]

        md:grid-cols-[repeat(6,var(--col))]
    md:auto-rows-[var(--col)]
    md:h-[calc((3*var(--col))+(2*var(--gap)))]
"
        >
          {section.media
            .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))
            .map((img, i) => (
              <div
                key={i}
                className={`${img.col} ${img.row} relative overflow-hidden shadow-lg shadow-black/20 `}
              >
                <Item
                  width={img.width || 500}
                  height={img.height || 750}
                  content={
                    // This is the lightbox image
                    <Image
                      src={img.src}
                      alt=""
                      width={1200}
                      height={1200}
                      className="w-full h-full object-cover"
                    />
                  }
                >
                  {({ ref, open }) => (
                    <Image
                      src={img.src}
                      alt={`Gallery ${i + 1}`}
                      fill
                      className={`w-full h-full object-cover object-[${
                        img.objectPosition || "center"
                      }]`}
                      loading="lazy"
                      ref={ref}
                      onClick={open}
                    />
                  )}
                </Item>
              </div>
            ))}
        </div>
      </Gallery>
      <div className="my-8 flex h-auto justify-center items-center text-center gap-4 text-sm text-gray-500">
        <Link
          href={"/work/weddings"}
          className={`hover:text-gray-700 ${
            category === "weddings" ? "font-bold" : ""
          }`}
        >
          Wedding
        </Link>
        <Link
          href={"/work/portraits"}
          className={`hover:text-gray-700 ${
            category === "portraits" ? "font-bold" : ""
          }`}
        >
          Portrait
        </Link>
        <Link
          href={"/work/products"}
          className={`hover:text-gray-700 ${
            category === "products" ? "font-bold" : ""
          }`}
        >
          Product
        </Link>
        <Link
          href={"/work/videos"}
          className={`hover:text-gray-700 ${
            category === "videos" ? "font-bold" : ""
          }`}
        >
          Video
        </Link>
      </div>
    </div>
  );
}
