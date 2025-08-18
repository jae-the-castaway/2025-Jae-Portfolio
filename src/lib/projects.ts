// src/lib/projects.ts

export type Category =
  | "events"
  | "portraits"
  | "products"
  | "weddings"
  | "videos";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  date?: string;           // "YYYY-MM-DD"
  thumbnail?: string;      // path under /public
  images?: string[];       // for photo projects
  video_embed?: string;    // for video projects
  contentHtml: string;     // rendered markdown or placeholder
};

// --- Temporary sample data (replace with your real content later) ---
const SAMPLE_PROJECTS: Project[] = [
  {
    slug: "summit-2025",
    title: "Summit 2025",
    category: "events",
    date: "2025-06-01",
    thumbnail: "/images/events/summit-2025/cover.jpg",
    images: ["/images/events/summit-2025/01.jpg"],
    contentHtml: "<p>Event highlights from Summit 2025.</p>",
  },
  {
    slug: "hana-studio-portraits",
    title: "Hana — Studio Portraits",
    category: "portraits",
    date: "2024-11-20",
    thumbnail: "/images/portraits/hana/cover.jpg",
    images: [
      "/images/portraits/hana/01.jpg",
      "/images/portraits/hana/02.jpg",
    ],
    contentHtml: "<p>Quiet studio session with Hana.</p>",
  },
  {
    slug: "jade-lamp",
    title: "Jade Lamp — Product Set",
    category: "products",
    date: "2024-09-05",
    thumbnail: "/images/products/jade-lamp/cover.jpg",
    images: [
      "/images/products/jade-lamp/01.jpg",
      "/images/products/jade-lamp/02.jpg",
    ],
    contentHtml: "<p>Minimal tabletop product series.</p>",
  },
  {
    slug: "lincoln-park-wedding",
    title: "Lincoln Park Wedding",
    category: "weddings",
    date: "2023-08-17",
    thumbnail: "/images/weddings/lincoln-park/cover.jpg",
    images: [
      "/images/weddings/lincoln-park/01.jpg",
      "/images/weddings/lincoln-park/02.jpg",
    ],
    contentHtml: "<p>Golden hour. Soft chaos. Chicago.</p>",
  },
  {
    slug: "echo",
    title: "Echo — Short Film",
    category: "videos",
    date: "2024-03-14",
    thumbnail: "/images/videos/echo/cover.jpg",
    video_embed: "https://www.youtube.com/embed/XXXXXXXXXXX",
    contentHtml: "<p>Poetic short on memory and light.</p>",
  },
];

// --- API used by your pages ---

export function listProjects(): Omit<Project, "contentHtml">[] {
  // Sort newest first by date (if present)
  return [...SAMPLE_PROJECTS]
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .map(({ contentHtml, ...rest }) => rest);
}

export async function getProject(
  category: Category,
  slug: string
): Promise<Project> {
  const found = SAMPLE_PROJECTS.find(
    (p) => p.category === category && p.slug === slug
  );
  if (!found) {
    throw new Error(`Project not found: ${category}/${slug}`);
  }
  return found;
}