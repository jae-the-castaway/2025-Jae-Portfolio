"use client";
import { useSearchParams, useRouter } from "next/navigation";

type Item = { title:string; slug:string; category:string; thumbnail?:string; date?:string; year?:string; };
export default function WorkGrid({ items }: { items: Item[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const current = (params.get("cat") ?? "all").toLowerCase();

  const tabs = ["all","events","portraits","products","weddings","videos"];
  const filtered = items.filter(p => current === "all" ? true : p.category === current);

  function setCat(cat: string) {
    const query = cat === "all" ? "" : `?cat=${cat}`;
    router.push(`/work${query}`);
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setCat(t)}
            aria-pressed={current === t}
            className={`px-3 py-1.5 rounded-full border capitalize ${current===t ? "bg-black text-white" : "hover:bg-neutral-100"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <a key={`${p.category}-${p.slug}`} href={`/work/${p.category}/${p.slug}`} className="group block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border">
              <img src={p.thumbnail ?? "/images/placeholder.jpg"} alt={p.title} loading="lazy"
                   className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]" />
            </div>
            <h3 className="mt-3 font-medium">{p.title}</h3>
            <p className="text-sm text-neutral-600 capitalize">{p.category}</p>
          </a>
        ))}
      </section>
    </>
  );
}