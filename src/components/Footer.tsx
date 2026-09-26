import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#241C16]/10 bg-[#F3ECE1]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg text-[#241C16]">Arena Gifts</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#241C16]/70">
            A Hyderabad gifting studio, shipping custom hampers and
            personalised gifts across India.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-[#241C16]">Reach us</p>
          <ul className="mt-3 space-y-2 text-sm text-[#241C16]/70">
            <li>
              <a
                href="mailto:arenagiftss@gmail.com"
                className="transition-colors hover:text-[#5C1F35]"
              >
                arenagiftss@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/arena.giftss/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#5C1F35]"
              >
                @arena.giftss
              </a>
            </li>
            <li>Hyderabad, Telangana</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[#241C16]">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-[#241C16]/70">
            <li>
              <Link href="/#showcase" className="transition-colors hover:text-[#5C1F35]">
                Showcase
              </Link>
            </li>
            <li>
              <Link href="/collaborator" className="transition-colors hover:text-[#5C1F35]">
                Collaborators
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-[#5C1F35]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#241C16]/10 px-6 py-5 text-center text-xs text-[#241C16]/50">
        © {new Date().getFullYear()} Arena Gifts. Delivering across India.
      </div>
    </footer>
  );
}
