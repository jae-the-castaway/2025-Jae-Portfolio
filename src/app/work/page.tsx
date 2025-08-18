import WorkGrid from "@/app/_components/work-grid";
import { listProjects } from "@/lib/projects";


export const metadata = { title: "Work — Jay the Kastaway" };

export default async function WorkPage() {
  const items = listProjects().map(p => ({ ...p, year: p.date?.slice(0,4) }));
  return (
    <section className="py-10">
      <h1 className="font-serif text-3xl mb-2">Work</h1>
      <p className="text-neutral-600 mb-8">
        Selected projects across events, portraits, products, weddings, and videos.
      </p>
      <WorkGrid items={items} />
    </section>
  );
}