import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="z-50 relative flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        JAEHAN KIM
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        makes{" "}
        <a
          href="/work/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          photos and videos.
        </a>{" "}
      </h4>
    </section>
  );
}
