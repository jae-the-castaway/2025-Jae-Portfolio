// src/lib/projects.ts
export type Category = "events" | "portraits" | "products" | "weddings" | "videos";

export type Media = {
  src: string;               // /public path
  alt?: string;
  col?: string;              // Tailwind grid placement
  row?: string;
  width?: number;            // for <Image> if you don't use fill
  height?: number;
  objectPosition?: string;   // e.g. "50% 20%" (maps to style)
  sequence?: number;         // optional ordering within the section
};

export type Section = {
  key: Category;
  title: string;             // UI heading
  description?: string;      // short intro paragraph
  cover?: string;            // optional hero/thumbnail for the section
  media: Media[];
};

// Dictionary keyed by category; easy to index in /work/[category]
export const WORK: Record<Category, Section> = {
  weddings: {
    key: "weddings",
    title: "Weddings",
    description: "Intimate, candid moments from ceremonies and celebrations.",
    cover: "/assets/images/weddings/cover.jpg",
    media: [
      {
        src: "/assets/images/weddings/1.jpg",
        col: "md:col-span-3",
        row: "md:row-span-2",
        width: 1000,
        height: 666,
        sequence: 1,
      },
      {
        src: "/assets/images/weddings/2.jpg",
        width: 1000,
        height: 666,
        sequence: 2,
      },
      {
        src: "/assets/images/weddings/3.jpg",
        col: "md:col-span-1 md:col-start-4",
        row: "md:row-span-1 md:row-start-2",
        sequence: 3,
      },
      {
        src: "/assets/images/weddings/4.jpg",
        col: "md:col-span-2",
        row: "md:row-span-1",
        objectPosition: "50% 20%",
        sequence: 4,
      },
      {
        src: "/assets/images/weddings/5.jpg",
        col: "md:col-start-1",
        row: "md:row-start-3",
        width: 1000,
        height: 666,
        sequence: 5,
      },
      {
        src: "/assets/images/weddings/6.jpg",
        col: "md:col-start-2",
        sequence: 6,
      },
      {
        src: "/assets/images/weddings/7.jpg",
        col: "md:col-span-2",
        width: 1000,
        height: 666,
        sequence: 7,
      },
      {
        src: "/assets/images/weddings/8.jpg",
        col: "md:col-start-5 md:col-span-2",
        row: "md:row-start-2 md:row-span-2",
        width: 1000,
        height: 666,
        sequence: 8,
      },
    ],
  },

  // Fill these out as you go
  events:    { key: "events",    title: "Events",    media: [] },
  portraits: { key: "portraits", title: "Portraits", media: [] },
  products:  { key: "products",  title: "Product & Details", media: [] },
  videos:    { key: "videos",    title: "Video",     media: [] },
};