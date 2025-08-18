import { listProjects } from "@/lib/projects";
import type { Category } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

const CATEGORIES: Category[] = [
  "events",
  "portraits",
  "products",
  "weddings",
  "videos",
];

export const dynamic = "force-static";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = params.category.toLowerCase() as Category;
  if (!CATEGORIES.includes(cat)) return notFound();

  const items = listProjects().filter((p) => p.category === cat);

  return (
    <section className="py-10">
      <h1 className="font-serif text-3xl capitalize mb-4">{cat}</h1>

      {items.length === 0 ? (
        <p className="text-neutral-600">No projects yet.</p>
      ) : (
        <div></div>
      )}
    </section>
  );
}
