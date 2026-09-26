import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { collaborators } from "@/lib/collaborators";

export const metadata: Metadata = {
  title: "Collaborator Portals — Arena Gifts",
  description:
    "Private portals for Arena Gifts creators & collaborators. Real-time AI comment tracking and 60% profit sharing.",
};

export default function CollaboratorsDirectoryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF6F0] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#5C1F35]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#5C1F35]">
              Creator & Influencer Network
            </span>
            <h1 className="font-display mt-3 text-3xl text-[#241C16] sm:text-5xl">
              Collaborator Partner Portals
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#241C16]/75 sm:text-base">
              Select your collaborator profile below to access your unique dashboard,
              live AI + MCP comment tracking status, and 60% profit allocation vault.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collaborators.map((c) => (
              <Link
                key={c.slug}
                href={`/collaborator/${c.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#241C16]/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#5C1F35] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF6F0] font-display text-sm font-bold text-[#5C1F35] group-hover:bg-[#5C1F35] group-hover:text-white transition-colors">
                      {c.nickname.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                      60% Profit Share
                    </span>
                  </div>

                  <h2 className="font-display mt-4 text-xl font-bold text-[#241C16] group-hover:text-[#5C1F35]">
                    {c.nickname}
                  </h2>
                  <p className="text-xs text-[#241C16]/60">{c.name}</p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#5C1F35]">
                    <span>{c.instagram}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#241C16]/10 pt-4 text-xs">
                  <span className="text-[#241C16]/60">Portal Route:</span>
                  <code className="rounded bg-[#FAF6F0] px-2 py-0.5 font-mono text-[#5C1F35]">
                    /collaborator/{c.slug}
                  </code>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-[#241C16]/10 bg-[#F3ECE1] p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl text-[#241C16]">
              How the 60% Profit Attribution Works
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-[#241C16]/70">
              Our automated system uses AI and Model Context Protocol (MCP) to parse reel comments in real-time. When any follower inquires or places an order via your reels, 60% of the net margin is automatically linked to your creator portal.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
