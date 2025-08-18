// app/about/_components/about-intro.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../_components/header";

export default function AboutPage() {
  return (
    <section className="">
      <Header />
      <div className="mx-auto max-w-6xl px-10  min-h-screen pt-6 pb-32">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          {/* Image — left on wide screens */}
          <div className="hidden w-full md:block md:w-1/2">
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/long-bio.jpg" // ← replace with your new portrait
                alt="Portrait of Jaeheon Kim"
                fill
                className="object-cover shadow-md
             shadow-black/40 "
                priority
              />
            </div>
          </div>

          {/* Text — right on wide screens */}
          <div className="w-full md:w-1/2">
            {/* Image between title and subtitle on small screens */}
            <div className="relative my-6 mx-auto justify-center items-center aspect-[3/4] w-full max-w-sm overflow-hidden shadow-2xl md:hidden">
              <Image
                src="/assets/images/long-bio.jpg"
                alt="Portrait of Jaeheon Kim"
                fill
                className="object-cover shadow-md
             shadow-black/40"
                priority
              />
            </div>
            <h1 className="text-center md:text-left text-4xl font-extrabold tracking-tight  sm:text-5xl leading-tight">
              Hi, I’m Jaeheon Kim.
            </h1>
            <p className="text-sm text-gray-500 mt-2 text-center md:text-left">
              Here are my fun facts about me!
            </p>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              I started a YouTube Channel in 2016 with my now-wife, and it
              changed my life.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              We canceled our wedding because of the pandemic, but now I shoot
              weddings?
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              One of my childhood dreams was to be a clown, so I taugh myself
              how to juggle.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              I cry often at weddings (don't worry, not while at work).
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              I love walakable cities and that's why I moved to Chicago.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              I love hiking — nature’s textures and colors often sneak into my
              work.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              My guilty pleasure is skipping washing dishes at night and
              regretting it the next morning.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              My go-to shower singer is Chet Baker.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-start">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/assets/docs/resume.pdf" // ← point to your resume
                className="inline-flex items-center justify-center  px-6 py-3 text-white shadow-lg transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 mx-3 bg-black hover:bg-white hover:text-black border border-black font-bold duration-200  mb-6"
              >
                View My Résumé
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
