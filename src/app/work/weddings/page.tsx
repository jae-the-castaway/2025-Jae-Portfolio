"use client";

import Image from "next/image";
import Link from "next/link";
import "photoswipe/style.css";
import Header from "@/app/_components/header";
import { Gallery, Item } from "react-photoswipe-gallery";

// This is the options for the lightbox
const options = {
  zoom: true,
  close: true,
};

// Add position to the images if needed to position them correctly in the grid (center or top, or 50%_50% format for Tailwind)
const images = [
  {
    src: "/assets/images/weddings/1.jpg",
    col: "md:col-span-3",
    row: "md:row-span-2",
    width: 1000,
    height: 666,
  },
  {
    src: "/assets/images/weddings/2.jpg",
    col: "",
    row: "",
    width: 1000,
    height: 666,
  },
  {
    src: "/assets/images/weddings/3.jpg",
    col: "md:col-span-1 md:col-start-4 col-star",
    row: "md:row-span-1  md:row-start-2",
    position: null,
  },
  {
    src: "/assets/images/weddings/4.jpg",
    col: "md:col-span-2 ",
    row: " md:row-span-1",
    position: "50%_20%",
  },
  {
    src: "/assets/images/weddings/5.jpg",
    col: "md:col-start-1",
    row: "md:row-start-3 ",
    width: 1000,
    height: 666,
  },
  {
    src: "/assets/images/weddings/6.jpg",
    col: "md:col-start-2  ",
    row: "",
  },
  {
    src: "/assets/images/weddings/7.jpg",
    col: "md:col-span-2",
    row: "",
    width: 1000,
    height: 666,
  },
  {
    src: "/assets/images/weddings/8.jpg",
    col: "md:col-start-5 md:col-span-2",
    row: "md:row-start-2 md:row-span-2 ",
    width: 1000,
    height: 666,
  },
];

export default function workWeddings() {
  return (
    <div
      className="md:h-[100vh]] 
"
    >
      <Header />
      <Gallery options={options}>
        <div
          id="workWeddings"
          className="grid max-md:px-4
  grid-cols-1 sm:grid-cols-2 gap-4
         [--gap:16px]
    [--col:calc((100vw-(5*var(--gap)))/6)]

        md:grid-cols-[repeat(6,var(--col))]
    mdLauto-rows-[var(--col)]
    md:h-[calc((3*var(--col))+(2*var(--gap)))]
"
        >
          {images.map((img, i) => (
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
                      img.position || "center"
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
        <Link href={"/work/weddings"} className="font-bold hover:text-gray-700">
          Wedding
        </Link>
        <Link href={"/work/portraits"} className="hover:text-gray-700">
          Portrait
        </Link>
        <Link href={"/work/products"} className="hover:text-gray-700">
          Product
        </Link>
        <Link href={"/work/videos"} className="hover:text-gray-700">
          Video
        </Link>
      </div>
    </div>
  );
}
