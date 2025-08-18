export const metadata = { title: "Contact — Jay the Kastaway" };

export default function ContactPage() {
  return (
    <section className="py-10 max-w-3xl">
      <h1 className="font-serif text-3xl mb-4">Contact</h1>

      <p className="text-neutral-700">
        For bookings, collaborations, or mentoring inquiries, reach out anytime.
      </p>

      <ul className="mt-6 space-y-2">
        <li>
          Email:{" "}
          <a className="underline" href="mailto:hello@jaythekastaway.com">
            hello@jaythekastaway.com
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a className="underline" target="_blank" href="https://instagram.com/jaythekastaway">
            @jaythekastaway
          </a>
        </li>
      </ul>
    </section>
  );
}