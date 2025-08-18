import Container from "@/app/_components/container";
import Link from "next/link";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-screen bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800"
    >
      <Container>
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-col items-center justify-center flex-1">
            <p className=" text-center mb-12 text-neutral-700 text-sm">
              Let's connect!
              <br />
              <br />
              One click away from creating something unforgettable <br /> — a
              project, a shoot, or simply a great conversation ☕️.
            </p>
            <div className="flex flex-col justify-center gap-6 items-center ">
              <div className="flex items-center gap-3">
                <Link
                  href="mailto:jaeheonkim95@gmail.com"
                  className="mb-6 mx-3 py-4 w-52  flex justify-center items-center bg-black hover:bg-white hover:text-black border border-black text-white font-bold duration-200 transition-colors "
                >
                  <div className="flex items-center gap-3">
                    <p>✉️</p>
                    <p>Email Me</p>
                  </div>
                </Link>
              </div>
              <Link
                href="https://instagram.com/jaythekastaway"
                target="_blank"
                className="mb-6 mx-3 py-4 w-52 flex justify-center items-center bg-black hover:bg-white hover:text-black border border-black text-white font-bold duration-200 transition-colors "
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                  <p>Instagram</p>
                </div>
              </Link>
              {/* <a
                href="https://instagram.com/jaythekastaway"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm underline hover:text-neutral-700"
                aria-label="Visit my Instagram profile"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
                Follow on Instagram
              </a> */}
            </div>
          </div>
          <div className="w-full text-center py-2 text-gray-500 text-sm mt-auto">
            © 2025 Jaeheon Kim | All Rights Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
