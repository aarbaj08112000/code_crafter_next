import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Sparkles, CheckCircle2, Search, Activity } from 'lucide-react';

export default function ProductHeroMockup({
  src,
  alt,
  moduleName = "Enterprise Suite",
  badgeText = "Live Cloud Sync",
  statText = "99.9% Accuracy",
  statLabel = "Automated Operations"
}) {
  return (
    <div className="relative w-full max-w-[580px] mx-auto group">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8a4785]/30 to-[#c6809c]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 -z-10" />

      {/* SaaS Window Shell */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-2xl transition-all duration-500 hover:-translate-y-1">
        
        {/* Modern App Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 bg-gray-100/90 border-b border-gray-200/70 select-none">
          {/* Traffic Dots */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/90 shadow-sm" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/90 shadow-sm" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400/90 shadow-sm" />
          </div>

          {/* SaaS Command & Search Bar */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/90 border border-gray-200/90 text-gray-400 shadow-xs max-w-[240px] w-full">
            <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="text-[11px] text-gray-600 font-medium truncate">{moduleName}</span>
            <kbd className="ml-auto text-[9px] font-mono bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">⌘K</kbd>
          </div>

          {/* Mobile Status Tag */}
          <div className="flex sm:hidden items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/90 border border-gray-200 text-[10px] font-semibold text-gray-700 shadow-xs max-w-[160px]">
            <span className="truncate">{moduleName}</span>
          </div>

          {/* Security Shield Icon */}
          <div className="flex items-center text-gray-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
        </div>

        {/* Window Content / Image Preview */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />

          {/* Top Left: App Module Tag */}
          {moduleName && (
            <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900/85 backdrop-blur-md border border-white/10 shadow-lg text-xs font-semibold text-white">
              <Activity className="w-3.5 h-3.5 text-[#c6809c]" />
              <span>{moduleName}</span>
            </div>
          )}

          {/* Floating Pill: Bottom Left */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-[10px] sm:text-xs font-semibold text-gray-800">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a4785] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8a4785]" />
            </span>
            <span className="truncate max-w-[110px] sm:max-w-none">{badgeText}</span>
          </div>

          {/* Floating Pill: Top Right */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-gray-900/90 backdrop-blur-md text-white border border-white/10 shadow-xl text-[10px] sm:text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>{statText}</span>
          </div>
        </div>

        {/* App Window Footer Status Strip */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 bg-white border-t border-gray-100 text-[11px] text-gray-500">
          <div className="flex items-center gap-1.5 min-w-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="font-medium text-gray-700 truncate">{statLabel}</span>
          </div>
          <span className="text-[#8a4785] font-semibold shrink-0 ml-2">Enterprise Ready</span>
        </div>
      </div>
    </div>
  );
}
