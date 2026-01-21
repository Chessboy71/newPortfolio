"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const IconAnimated = ({
  icon,
  text,
  link = "#",
}: {
  icon: any;
  text: string;
  link: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.to(bgRef.current, {
        scaleX: 1,
        duration: 0.45,
        ease: "power3.out",
      }).to(
        iconRef.current,
        {
          scale: 1.1,
          rotate: 6,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      );

      containerRef.current?.addEventListener("mouseenter", () => tl.play());
      containerRef.current?.addEventListener("mouseleave", () => tl.reverse());
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Link href={link}>
      <div
        ref={containerRef}
        className="relative flex items-center gap-4 mt-4 p-2 cursor-pointer overflow-hidden rounded-full max-w-40 w-10 h-10"
      >
        {/* Background reveal */}
        <span
          ref={bgRef}
          className="absolute inset-0 bg-slate-200 origin-left scale-x-0 z-0"
        />

        {/* Icon */}
        <div ref={iconRef} className="relative z-10 w-8 h-8 shrink-0 top-1">
          <Image src={icon} alt={text} width={24} height={24} />
        </div>
      </div>
    </Link>
  );
};

export default IconAnimated;
