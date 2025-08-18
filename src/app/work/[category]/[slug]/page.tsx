import { getProject } from "@/lib/projects";
import type { Category } from "@/lib/projects";

export const dynamic = "force-static";

export default async function ProjectPage({ params }: { params: { category: Category; slug: string } }) {
  const project = await getProject(params.category, params.slug);
  const isVideo = project.category === "videos" || !!project.video_embed;

  return (
    <article className="py-10 prose prose-neutral max-w-3xl">
      <h1 className="font-serif">{project.title}</h1>

      {isVideo ? (
        <div className="aspect-video w-full overflow-hidden rounded-2xl border my-6">
          <iframe
            src={project.video_embed!}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : (
        <>
          {project.images?.length ? (
            <div className="grid grid-cols-1 gap-4 my-6">
              {project.images.map((src, i) => (
                <a key={i} href={src} target="_blank" className="block overflow-hidden rounded-2xl border">
                  <img src={src} alt={`${project.title} ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                </a>
              ))}
            </div>
          ) : project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="rounded-2xl border my-6" />
          ) : null}
        </>
      )}

      <section dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </article>
  );
}