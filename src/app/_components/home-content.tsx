import Container from "./container";
import Image from "next/image";
import Link from "next/link";

export default function HomeContent() {
  const tiles = [
    {
      href: "/work/weddings",
      label: "Weddings",
      img: "/assets/images/weddings/cover.jpg",
    },
    {
      href: "/work/events",
      label: "Events",
      img: "/assets/images/events/cover.jpg",
    },
    {
      href: "/work/products",
      label: "Products",
      img: "/assets/images/products/cover.jpg",
    },
    {
      href: "/work/portraits",
      label: "Portraits",
      img: "/assets/images/portraits/cover.jpg",
    },
    // { href: "/work/videos",   label: "Videos",   img: "/assets/images/videos/cover.jpg" },
  ];

  return (
    <div>
      {/* Fullscreen hero */}
      <section className="relative h-screen w-full">
        <Image
          src="/assets/images/hero/hero.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Optional overlay for readability */}
        {/* <div className=" absolute inset-0 bg-black/40" aria-hidden="true" /> */}
        <div className="absolute inset-0 pt-0 flex flex-col md:items-start justify-start text-center z-10 p-6 md:flex-row md:justify-between">
          <Link
            href={"#about"}
            className="text-white text-center md:text-left font-bold text-4xl md:text-5xl mt-5 md:pl-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:opacity-90 transition"
            tabIndex={0}
          >
            J.K.
          </Link>
          <h4 className="flex justify-center text-center gap-7 text-white text-md font-light mt-4 md:mt-8">
            <Link href={"#work"} className=" hover:text-blue-300">
              WORK
            </Link>{" "}
            <Link href={"/about"} className=" hover:text-blue-300">
              ABOUT
            </Link>{" "}
            <Link href={"#home-contact"} className=" hover:text-blue-300">
              CONTACT
            </Link>
          </h4>
        </div>
      </section>
      <Container>
        {/* Short Bio section */}
        <section
          id="about"
          className="mx-auto max-w-6xl px-4 pt-8  mt-20 py-10 text-center"
        >
          <div className=" flex flex-col gap-6 items-center text-center md:flex-row md:items-center md:text-left md:gap-12">
            <div>
              <h1 className=" whitespace-nowrap md:text-left text-6xl md:text-7xl  font-black tracking-tighter leading-tight">
                Live Now. <br className="block  " />
                Rememer <br className="hidden md:block lg:hidden  " />
                Forever.
              </h1>

              <p className="text-gray-500 text-sm md:text-base px-10 md:px-0  mt-4">
                "I’m Jae, a photographer who helps you be present in the moment
                while I preserve it for you." <br />
                <br />
                <br />
              </p>
              <a
                href="/about"
                className="hidden md:inline-block mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                Read My Story
              </a>
            </div>
            <div className="flex flex-col text-center justify-center overflow-visible w-[700px] h-[500px]">
              {" "}
              <Image
                src="/assets/images/short-bio.jpg"
                alt="Short Bio Image"
                width={300}
                height={400}
                className="mx-auto md:size-max shadow-xl object-cover md:translate-y-10
             shadow-black/40 :"
              />
              <p className="text-gray-500 text-sm pt-4 md:translate-y-10">
                {/* "Hi, call me J.K. I am a photographer based in Chicago, IL." */}
              </p>
            </div>

            <a
              href="/about"
              className="block md:hidden mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read My Story{" "}
            </a>
          </div>
        </section>

        {/* My Work Section */}

        <section id="work" className="py-10 my-28">
          <h2 className="sr-only">Portfolio Categories</h2>
          <h2 className="mb-8 pl-0 md:pl-10 text-4xl text-center md:text-left md:text-6xl font-extrabold tracking-tighter leading-tight">
            My Portfolio
          </h2>
          <p className="text-gray-500 text-sm md:text-base   px-10 mt-4">
            See how I create visual stories that honor people, their moments,
            and their memories. <br />
            <br />
            <br />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {tiles.map((t) => (
              <a key={t.label} href={t.href} className="group block">
                <div className="aspect-[4/3] overflow-hidden border">
                  <img
                    src={t.img}
                    alt={t.label}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-2 text-center text-sm">{t.label}</div>
              </a>
            ))}
          </div>
        </section>
        <div id="home-contact"></div>
      </Container>
    </div>
  );
}
