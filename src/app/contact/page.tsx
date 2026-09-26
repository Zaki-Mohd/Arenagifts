import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Arena Gifts",
  description:
    "Get in touch with Arena Gifts by email or Instagram. Based in Hyderabad, delivering across India.",
};

const EMAIL = "arenagiftss@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/arena.giftss/";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <h1 className="font-display text-4xl text-[#241C16] sm:text-5xl">
          Let&apos;s plan your gift.
        </h1>
        <p className="mt-5 max-w-lg text-[#241C16]/70">
          Whether it&apos;s a birthday, a wedding, or a hamper for someone far
          away, write to us with the occasion and we&apos;ll take it from there.
          We ship anywhere in India.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${EMAIL}`}
            className="block border border-[#241C16]/10 bg-white p-8 transition-colors hover:border-[#5C1F35]"
          >
            <p className="text-sm text-[#241C16]/50">Email</p>
            <p className="font-display mt-2 text-xl text-[#241C16]">
              {EMAIL}
            </p>
            <p className="mt-3 text-sm text-[#241C16]/70">
              Best for order details, custom requests and quotes.
            </p>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#241C16]/10 bg-white p-8 transition-colors hover:border-[#5C1F35]"
          >
            <p className="text-sm text-[#241C16]/50">Instagram</p>
            <p className="font-display mt-2 text-xl text-[#241C16]">
              @arena.giftss
            </p>
            <p className="mt-3 text-sm text-[#241C16]/70">
              Message us directly, or see what we&apos;ve shipped recently.
            </p>
          </a>
        </div>

        <div className="mt-6 border border-[#241C16]/10 bg-[#F3ECE1] p-8">
          <p className="text-sm text-[#241C16]/50">Studio location</p>
          <p className="font-display mt-2 text-xl text-[#241C16]">
            Hyderabad, Telangana
          </p>
          <p className="mt-3 text-sm text-[#241C16]/70">
            Every gift is packed here and shipped pan-India, so wherever
            you&apos;re ordering from, we can deliver.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
