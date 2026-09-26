import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramShowcase from "@/components/InstagramShowcase";

function SparkMark() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="100"
        cy="100"
        r="96"
        stroke="#241C16"
        strokeOpacity="0.15"
        strokeWidth="1"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="#B8863C"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <path
        d="M100 55 L110 90 L145 100 L110 110 L100 145 L90 110 L55 100 L90 90 Z"
        fill="#5C1F35"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl leading-tight text-[#241C16] sm:text-5xl">
              Gifting that feels like it was made for one person.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#241C16]/70">
              Arena Gifts is a small gifting studio out of Hyderabad. We put
              together hampers, personalised keepsakes and custom orders,
              then ship them anywhere in India.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/arena.giftss/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#5C1F35] px-6 py-3 text-sm text-white transition-colors hover:bg-[#4A1829]"
              >
                See our latest on Instagram
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-[#241C16] px-6 py-3 text-sm text-[#241C16] transition-colors hover:border-[#5C1F35] hover:text-[#5C1F35]"
              >
                Plan a gift with us
              </Link>
            </div>
          </div>

          <div className="mx-auto h-64 w-64 sm:h-80 sm:w-80">
            <SparkMark />
          </div>
        </section>

        {/* Delivery / trust band */}
        <section
          id="delivery"
          className="border-y border-[#241C16]/10 bg-[#F3ECE1]"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
            <div>
              <p className="font-display text-lg text-[#241C16]">
                Based in Hyderabad
              </p>
              <p className="mt-2 text-sm text-[#241C16]/70">
                Every order is put together by hand at our studio.
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-[#241C16]">
                Pan-India delivery
              </p>
              <p className="mt-2 text-sm text-[#241C16]/70">
                We ship gifts and hampers to any address in the country.
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-[#241C16]">
                Made to order
              </p>
              <p className="mt-2 text-sm text-[#241C16]/70">
                Tell us the occasion, and we&apos;ll build the gift around it.
              </p>
            </div>
          </div>
        </section>

        <InstagramShowcase />

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="border border-[#241C16]/10 bg-white px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl text-[#241C16]">
              Have an occasion coming up?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[#241C16]/70">
              Write to us with what you have in mind and we&apos;ll help you put
              together something worth remembering.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#5C1F35] px-7 py-3 text-sm text-white transition-colors hover:bg-[#4A1829]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
