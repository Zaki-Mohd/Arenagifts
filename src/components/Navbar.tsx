import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/arena.giftss/";

function InstagramGlyph({ className }: { className?: string }) {
  // A simple original outline glyph — not the Meta trademark artwork.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#241C16]/10 bg-[#FAF6F0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/*
            Save the circular Arena Gifts logo you shared as
            /public/logo.jpeg (or update the path below) for this to render.
          */}
          <Image
            src="/logo.jpeg"
            alt="Arena Gifts"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
            priority
          />
          <span className="font-display text-xl leading-none text-[#241C16]">
            Arena Gifts
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#241C16]/80 md:flex">
          <Link href="/#showcase" className="transition-colors hover:text-[#5C1F35]">
            Showcase
          </Link>
          <Link href="/#delivery" className="transition-colors hover:text-[#5C1F35]">
            Delivery
          </Link>
          <Link href="/collaborator" className="transition-colors hover:text-[#5C1F35]">
            Collaborators
          </Link>
          <Link href="/contact" className="transition-colors hover:text-[#5C1F35]">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Arena Gifts on Instagram"
            className="text-[#241C16]/80 transition-colors hover:text-[#5C1F35]"
          >
            <InstagramGlyph className="h-6 w-6" />
          </a>
          <Link
            href="/contact"
            className="hidden rounded-full border border-[#241C16] px-4 py-2 text-sm text-[#241C16] transition-colors hover:border-[#5C1F35] hover:text-[#5C1F35] sm:inline-block"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
