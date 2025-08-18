import Link from "next/link";

const Header = () => {
  return (
    <section className="relative  w-full">
      {/* Optional overlay for readability */}
      {/* <div className=" absolute inset-0 bg-black/40" aria-hidden="true" /> */}
      <div className=" inset-0 flex flex-col md:items-start justify-start text-center z-10 p-6 pt-0 md:flex-row md:justify-between">
        <Link
          href={"/"}
          className="text-black text-center md:text-left font-bold text-4xl md:text-5xl mt-5 md:pl-8 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black
          /70 hover:opacity-90 transition"
          tabIndex={0}
        >
          J.K.
        </Link>
        <h4
          className="
        text-black text-md font-light 
        // mt-4 md:mt-8
        
        flex justify-center text-center gap-7"
        >
          <Link href={"/#work"} className=" hover:text-blue-300">
            WORK
          </Link>{" "}
          <Link href={"/about"} className=" hover:text-blue-300">
            ABOUT
          </Link>{" "}
          <Link
            href={"#contact"}
            scroll={true}
            className=" hover:text-blue-300"
          >
            CONTACT
          </Link>
        </h4>
      </div>
    </section>
  );
};

export default Header;

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
</h4>;
