"use client";

import { useEffect } from "react";
import Script from "next/script";
import { reels } from "@/lib/reels";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

function processEmbeds() {
  if (typeof window !== "undefined" && window.instgrm) {
    window.instgrm.Embeds.process();
  }
}

export default function InstagramShowcase() {
  useEffect(() => {
    // Process on mount
    processEmbeds();

    // Re-check periodically shortly after mount to ensure slow network embeds are captured
    const timer1 = setTimeout(processEmbeds, 600);
    const timer2 = setTimeout(processEmbeds, 1800);

    const handleResize = () => {
      processEmbeds();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="showcase" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl text-[#241C16] sm:text-4xl">
          From our reels
        </h2>
        <p className="mt-3 text-sm text-[#241C16]/70 sm:text-base">
          A running look at what leaves the workshop — straight from
          our Instagram, @arena.giftss.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((reel) => (
          <div
            key={reel.url}
            className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-[#241C16]/10 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md sm:p-3"
          >
            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={`${reel.url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  margin: "0 auto",
                  width: "100%",
                  minWidth: "0",
                  maxWidth: "100%",
                }}
              />
            </div>
            <p className="mt-2.5 px-1 pb-1 text-xs text-[#241C16]/65 sm:text-sm">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={processEmbeds}
        onLoad={processEmbeds}
      />
    </section>
  );
}
