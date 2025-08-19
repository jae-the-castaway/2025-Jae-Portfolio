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
      //Fallback UI for non-existent category
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
    <section className="relative min-h-screen md:h-screen">
      <Header />
      <div className="">
        <Gallery options={options}>
          <div
            id={category}
            className="
  mx-auto z-0 md:pb-24
  grid gap-4 grid-cols-1 sm:grid-cols-2
  justify-center
  [--gap:16px]
  md:[--col:min(calc((100%-(5*var(--gap)))/6),calc((100vh-168px-(2*var(--gap)))/3))]
  md:grid-cols-[repeat(6,var(--col))]
  md:[grid-template-rows:repeat(3,var(--col))]
"
          >
            {section.media
              .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))
              .map((img, i) => (
                <div
                  key={i}
                  className={`${img.col} ${img.row} relative  overflow-hidden shadow-lg shadow-black/20 `}
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
                        // fill
                        width={img.width || 500}
                        height={img.height || 750}
                        className={`w-full h-full object-cover object-[${
                          img.objectPosition || "center"
                        }]`}
                        ref={ref}
                        priority={i < 3}
                        onClick={open}
                      />
                    )}
                  </Item>
                </div>
              ))}
          </div>
        </Gallery>{" "}
        <div className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:z-10 py-8 flex justify-center items-center text-center gap-4 text-sm text-gray-500">
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
    </section>
  );
}
