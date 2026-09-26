import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiMcpTrackingCanvas from "@/components/AiMcpTrackingCanvas";
import {
  collaborators,
  getCollaboratorBySlug,
} from "@/lib/collaborators";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return collaborators.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collaborator = getCollaboratorBySlug(slug);

  if (!collaborator) {
    return {
      title: "Collaborator Not Found — Arena Gifts",
    };
  }

  return {
    title: `${collaborator.nickname} — Collaborator Portal | Arena Gifts`,
    description: `Track reel comment orders, AI-driven attribution, and 60% profit share for ${collaborator.name}.`,
  };
}

export default async function CollaboratorPage({ params }: PageProps) {
  const { slug } = await params;
  const collaborator = getCollaboratorBySlug(slug);

  if (!collaborator) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF6F0] px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#241C16]/60">
            <Link href="/" className="hover:text-[#5C1F35]">
              Home
            </Link>
            <span>/</span>
            <Link href="/collaborator" className="hover:text-[#5C1F35]">
              Collaborators
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#5C1F35]">
              {collaborator.nickname}
            </span>
          </nav>

          {/* Profile Header Card */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#241C16]/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="font-display text-2xl font-bold text-[#241C16] sm:text-4xl">
                  {collaborator.nickname}
                </h1>
                <span className="rounded-full bg-[#5C1F35]/10 px-3 py-0.5 text-xs font-semibold text-[#5C1F35]">
                  Official Collaborator
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-semibold text-emerald-800">
                  AI Tracking Active
                </span>
              </div>

              <p className="mt-2 text-xs text-[#241C16]/75 sm:text-sm">
                Full Name: <strong>{collaborator.name}</strong> &bull; Partner since{" "}
                {collaborator.joinedDate}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <a
                  href={collaborator.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-medium text-[#5C1F35] hover:underline"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>{collaborator.instagram}</span>
                </a>

                <span className="text-[#241C16]/30">&bull;</span>

                <span className="text-[#241C16]/70">
                  📧 {collaborator.email}
                </span>

                {collaborator.city && (
                  <>
                    <span className="text-[#241C16]/30">&bull;</span>
                    <span className="text-[#241C16]/70">
                      📍 {collaborator.city}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Attribution Status Pill Box */}
            <div className="rounded-xl border border-[#5C1F35]/20 bg-[#FAF6F0] p-4 text-sm sm:max-w-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-xs font-semibold text-[#5C1F35]">
                  Automated Reel Comment Tracking
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#241C16]/70">
                No tracking links required. Every follower who comments on your collaborative reels is automatically parsed by AI and linked directly to your 60% profit vault.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
            <div className="rounded-xl border border-[#241C16]/10 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-xs font-medium text-[#241C16]/60">
                Tracked Comments
              </p>
              <p className="font-display mt-2 text-2xl font-bold text-[#241C16] sm:text-3xl">
                {collaborator.stats.trackedComments}
              </p>
              <p className="mt-1 text-[11px] text-emerald-600">
                ● AI Agent Live Listening
              </p>
            </div>

            <div className="rounded-xl border border-[#241C16]/10 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-xs font-medium text-[#241C16]/60">
                Follower Orders Placed
              </p>
              <p className="font-display mt-2 text-2xl font-bold text-[#241C16] sm:text-3xl">
                {collaborator.stats.ordersPlaced}
              </p>
              <p className="mt-1 text-[11px] text-[#241C16]/50">
                Current collaboration cycle
              </p>
            </div>

            <div className="rounded-xl border border-[#B8863C]/30 bg-[#FFFBF5] p-4 shadow-sm sm:p-5">
              <p className="text-xs font-medium text-[#B8863C]">
                Your Profit Share
              </p>
              <p className="font-display mt-2 text-2xl font-bold text-[#5C1F35] sm:text-3xl">
                {collaborator.stats.profitSharePercent}%
              </p>
              <p className="mt-1 text-[11px] text-[#241C16]/60">
                60% of net margin per order
              </p>
            </div>

            <div className="rounded-xl border border-[#241C16]/10 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-xs font-medium text-[#241C16]/60">
                Earned Profit
              </p>
              <p className="font-display mt-2 text-2xl font-bold text-[#241C16] sm:text-3xl">
                ₹{collaborator.stats.earnedProfit.toLocaleString("en-IN")}
              </p>
              <p className="mt-1 text-[11px] text-[#241C16]/50">
                Settled directly to you
              </p>
            </div>
          </div>

          {/* 3D Three.js & GSAP AI/MCP Tracking Animation */}
          <div className="mt-8">
            <AiMcpTrackingCanvas
              collaboratorName={collaborator.nickname}
              instagramHandle={collaborator.instagram}
            />
          </div>

          {/* How It Works & Transparency Section */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#241C16]/10 bg-white p-6 shadow-sm sm:p-7">
              <h3 className="font-display text-xl font-bold text-[#241C16]">
                How the AI + MCP Tracking Works
              </h3>
              <p className="mt-2 text-sm text-[#241C16]/70">
                We believe in 100% transparency. Here is how your reels convert into direct profits:
              </p>

              <ol className="mt-5 space-y-4 text-sm text-[#241C16]/80">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5C1F35] text-xs font-bold text-white">
                    1
                  </span>
                  <div>
                    <strong className="text-[#241C16]">Publish & Tag Collaborative Reel:</strong>
                    <p className="text-xs text-[#241C16]/70">
                      When you post a reel featuring Arena Gifts and tag @arena.giftss, our MCP server hooks into the live comment feed.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5C1F35] text-xs font-bold text-white">
                    2
                  </span>
                  <div>
                    <strong className="text-[#241C16]">AI Intent Scanning:</strong>
                    <p className="text-xs text-[#241C16]/70">
                      Our natural language AI parses phrases like &quot;Price?&quot;, &quot;Can I get this customized?&quot;, &quot;Order link please&quot; and initiates a direct attribution session.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5C1F35] text-xs font-bold text-white">
                    3
                  </span>
                  <div>
                    <strong className="text-[#241C16]">60% Profit Allocation:</strong>
                    <p className="text-xs text-[#241C16]/70">
                      Once the hamper or gift order is fulfilled and shipped, 60% of the net profit is immediately booked to your account.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Simulated Live MCP Engine Logs */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#241C16]/10 bg-[#1D181D] p-5 text-white shadow-sm font-mono text-xs sm:p-6">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-white/70">
                  <span>TERMINAL: MCP_INTELLIGENCE_FEED</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    SYNCED
                  </span>
                </div>

                <div className="mt-4 space-y-2.5 text-white/75">
                  <p>
                    <span className="text-[#B8863C]">[SYSTEM]</span> Collaborator verified:{" "}
                    <span className="text-emerald-300">{collaborator.slug}</span> ({collaborator.name})
                  </p>
                  <p>
                    <span className="text-[#B8863C]">[MCP-IG]</span> Target: {collaborator.instagram} &bull; Webhook channel open
                  </p>
                  <p>
                    <span className="text-[#B8863C]">[PROFIT-LOCK]</span> Contract split active: 60% collaborator / 40% studio
                  </p>
                  <p>
                    <span className="text-blue-400">[AI-AGENT]</span> Awaiting new follower comments from latest drop...
                  </p>
                  <p className="text-white/40 italic">
                    -- All stats will update in real-time as orders are placed --
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-white/5 p-3 text-[11px] text-white/60">
                💡 Attribution is 100% automated: Our AI monitors all comments and inquiries on your tagged reels, attributing 60% of order profits directly to your portal.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
