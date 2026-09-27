"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HemrajOrderPage() {
  const [copied, setCopied] = useState(false);

  const orderNumber = "335694825636847232";
  const trackingNumber = "AG-EXP-8892410";

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-sans text-[#241C16]">
      {/* Top Mobile-Friendly Header */}
      <header className="sticky top-0 z-30 border-b border-[#241C16]/10 bg-white/95 px-4 py-3.5 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F6F8] text-[#241C16] transition-colors hover:bg-[#FAF6F0]"
              aria-label="Back to store"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="h-4 w-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
            <div>
              <h1 className="text-base font-bold tracking-tight text-[#1E1915] sm:text-lg">
                ORDER DETAILS
              </h1>
              <p className="text-[11px] text-[#241C16]/60">
                Order #{orderNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyOrder}
              type="button"
              className="rounded-full border border-[#241C16]/15 bg-[#FAF6F0] px-3 py-1 text-xs font-semibold text-[#5C1F35] transition-colors hover:bg-[#5C1F35] hover:text-white"
            >
              {copied ? "Copied ✓" : "Copy ID"}
            </button>
            <a
              href="https://www.instagram.com/arena.giftss/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold text-[#5C1F35] hover:underline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z" />
              </svg>
              <span>HELP</span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-5 pb-16">
        {/* Product Card */}
        <div className="overflow-hidden rounded-2xl border border-[#241C16]/10 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex gap-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-[#241C16]/10 bg-[#FAF6F0] sm:h-28 sm:w-28">
              <Image
                src="/black-butterfly-sunglasses.jpg"
                alt="Trendy Butterfly Cut Rimless Sunglasses (Black Specs)"
                fill
                sizes="120px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-sm font-bold leading-snug text-[#1E1915] sm:text-base">
                    Trendy Butterfly Cut Rimless Stylish Sunglasses (Black Specs)
                  </h2>
                  <span className="shrink-0 rounded bg-[#5C1F35]/10 px-2 py-0.5 text-[11px] font-bold text-[#5C1F35]">
                    COD
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#241C16]/60">
                  Size: Free Size &bull; UV400 Protection &bull; Crystal Wings
                </p>
              </div>

              <div className="mt-3 flex items-baseline justify-between border-t border-[#241C16]/5 pt-2">
                <span className="text-xs text-[#241C16]/65">Order Total (COD):</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-[#241C16]/40 line-through">₹499</span>
                  <span className="font-display text-lg font-extrabold text-[#1E1915] sm:text-xl">
                    ₹350/-
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Delivery Status Card */}
        <div className="mt-4 rounded-2xl border border-[#241C16]/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-4 w-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1E1915] sm:text-base">
                  Order Placed
                </h3>
                <p className="text-xs font-semibold text-emerald-700">
                  Delivery by Thu, 08 Oct
                </p>
              </div>
            </div>

            <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Confirmed
            </span>
          </div>

          {/* ANIMATED CAR MOVING TRACKING PIPELINE */}
          <div className="mt-7 rounded-2xl border border-[#241C16]/10 bg-gradient-to-b from-[#FAF8F5] to-white p-5">
            {/* Header Badge above truck */}
            <div className="flex items-center justify-between pb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C1F35]">
                  Live Shipment Tracker
                </span>
              </div>
              <span className="rounded bg-black/5 px-2 py-0.5 text-[11px] font-mono text-[#241C16]/70">
                AWB: {trackingNumber}
              </span>
            </div>

            {/* The Moving Delivery Van Track */}
            <div className="relative my-6 px-3">
              {/* Background Track Line */}
              <div className="h-2 w-full rounded-full bg-gray-200">
                {/* Active progress fill moving up to ~45% (Shipped stage) */}
                <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-emerald-500 to-[#B8863C] transition-all duration-1000" />
              </div>

              {/* Moving Car / Delivery Van Element */}
              <div
                className="absolute -top-7 left-[38%] z-10 -translate-x-1/2 transform transition-all"
                style={{
                  animation: "vanBounce 2s infinite ease-in-out, vanDrive 6s infinite ease-in-out",
                }}
              >
                {/* Status bubble above car */}
                <div className="mb-1 flex -translate-x-1/4 items-center gap-1 whitespace-nowrap rounded-md bg-[#241C16] px-2 py-0.5 text-[10px] font-bold text-white shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Shipping Soon!</span>
                </div>

                {/* Animated Delivery Car SVG */}
                <div className="relative h-10 w-14">
                  <svg
                    viewBox="0 0 64 36"
                    fill="none"
                    className="h-full w-full drop-shadow-md"
                  >
                    {/* Van Body */}
                    <path
                      d="M4 10C4 7.79086 5.79086 6 8 6H38C40.2091 6 42 7.79086 42 10V24H4V10Z"
                      fill="#5C1F35"
                    />
                    {/* Van Cabin Front */}
                    <path
                      d="M42 12H50.5C52.1 12 53.5 13.1 54.1 14.6L57.5 22.5C57.8 23.2 58 24 58 24.8V26H42V12Z"
                      fill="#B8863C"
                    />
                    {/* Cabin Window */}
                    <path
                      d="M44 14H50L54 22H44V14Z"
                      fill="#FAF6F0"
                      opacity="0.85"
                    />
                    {/* Headlight with glow */}
                    <circle cx="56.5" cy="24.5" r="1.5" fill="#FFE600" />
                    {/* Wheels */}
                    <g className="wheel-spin">
                      <circle cx="16" cy="27" r="5" fill="#241C16" />
                      <circle cx="16" cy="27" r="2.2" fill="#E5E7EB" />
                    </g>
                    <g className="wheel-spin">
                      <circle cx="46" cy="27" r="5" fill="#241C16" />
                      <circle cx="46" cy="27" r="2.2" fill="#E5E7EB" />
                    </g>
                    {/* Package accent */}
                    <rect x="12" y="11" width="10" height="7" rx="1" fill="#FAF6F0" opacity="0.3" />
                  </svg>
                </div>
              </div>

              {/* Milestone Checkpoints */}
              <div className="relative mt-5 flex justify-between">
                {/* 1. Ordered */}
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white ring-4 ring-emerald-100">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="h-3.5 w-3.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="mt-2 text-xs font-bold text-[#1E1915]">Ordered</span>
                  <span className="text-[11px] text-[#241C16]/60">27 Sep</span>
                </div>

                {/* 2. Shipped */}
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B8863C] text-white ring-4 ring-[#B8863C]/20 animate-pulse">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="mt-2 text-xs font-bold text-[#B8863C]">Shipped</span>
                  <span className="text-[11px] text-[#241C16]/60">29 Sep</span>
                </div>

                {/* 3. Out for Delivery */}
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    <span className="text-[10px] font-bold">3</span>
                  </div>
                  <span className="mt-2 text-xs font-medium text-[#241C16]/60">
                    Out for Delivery
                  </span>
                  <span className="text-[11px] text-[#241C16]/50">08 Oct</span>
                </div>

                {/* 4. Delivery */}
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                    <span className="text-[10px] font-bold">4</span>
                  </div>
                  <span className="mt-2 text-xs font-medium text-[#241C16]/60">Delivery</span>
                  <span className="text-[11px] text-[#241C16]/50">08 Oct</span>
                </div>
              </div>
            </div>

            {/* Early delivery guarantee pill */}
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3 text-xs text-amber-900">
              <span className="text-base">⚡</span>
              <span>
                <strong>95% of orders</strong> are delivered on or before time in Diphu, Karbi Anglong.
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Address Card */}
        <div className="mt-4 rounded-2xl border border-[#241C16]/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#241C16]/5 pb-3">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 text-[#5C1F35]"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className="text-sm font-bold text-[#1E1915]">
                Delivery Address
              </h3>
            </div>
            <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
              VERIFIED
            </span>
          </div>

          <div className="mt-3 text-xs leading-relaxed text-[#241C16]/80 sm:text-sm">
            <p className="font-bold text-[#1E1915] text-sm sm:text-base">
              Hemraj Chapagai
            </p>
            <p className="mt-1 text-[#241C16]/75">
              Diphu, Karbi Anglong, Assam
            </p>
            <p className="text-[#241C16]/65">
              Landmark: Near Singkiri College
            </p>
            <p className="mt-2 font-mono font-medium text-[#5C1F35]">
              Contact: +91 9957380884
            </p>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="mt-4 rounded-2xl border border-[#241C16]/10 bg-white p-5 shadow-sm">
          <h3 className="border-b border-[#241C16]/5 pb-3 text-sm font-bold text-[#1E1915]">
            Payment & Price Breakdown
          </h3>

          <div className="mt-3 space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between text-[#241C16]/70">
              <span>Item Total (Black Butterfly Specs)</span>
              <span>₹499</span>
            </div>
            <div className="flex justify-between text-[#241C16]/70">
              <span>Special Offer Discount</span>
              <span className="text-emerald-700">-₹149</span>
            </div>
            <div className="flex justify-between text-[#241C16]/70">
              <span>Delivery Charges</span>
              <span className="font-semibold text-emerald-700">FREE</span>
            </div>
            <div className="flex justify-between text-[#241C16]/70">
              <span>Payment Mode</span>
              <span className="font-bold text-[#5C1F35]">Cash on Delivery (COD)</span>
            </div>

            <div className="flex items-center justify-between border-t border-[#241C16]/10 pt-3 text-sm font-bold text-[#1E1915] sm:text-base">
              <span>Total Payable on Delivery:</span>
              <span className="font-display text-lg font-extrabold text-[#5C1F35] sm:text-xl">
                ₹350/-
              </span>
            </div>
          </div>
        </div>

        {/* Support note */}
        <div className="mt-6 text-center text-xs text-[#241C16]/50">
          Arena Gifts &bull; Handcrafted with care &bull; Pan-India Express Delivery
        </div>
      </main>

      {/* Embedded CSS for Delivery Car Animations */}
      <style jsx>{`
        @keyframes vanBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes vanDrive {
          0%, 100% {
            left: 36%;
          }
          50% {
            left: 42%;
          }
        }
        @keyframes wheelSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
