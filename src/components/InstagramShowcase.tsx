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
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
}

export default function InstagramShowcase() {
  // Re-process embeds on mount in case the script loaded before this
  // component did (e.g. on client-side navigation back to the page).
  useEffect(() => {
    processEmbeds();
  }, []);

  return (
    <section id="showcase" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl text-[#241C16] sm:text-4xl">
          From our reels
        </h2>
        <p className="mt-3 text-[#241C16]/70">
          A running look at what leaves the workshop — straight from
          our Instagram, @arena.giftss.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((reel) => (
          <div
            key={reel.url}
            className="border border-[#241C16]/10 bg-white p-3"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`${reel.url}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
              style={{ margin: 0, width: "100%" }}
            />
            <p className="mt-2 px-1 pb-1 text-sm text-[#241C16]/60">
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
