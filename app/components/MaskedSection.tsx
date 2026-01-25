import { useEffect, useRef, useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { gsap } from "gsap";

const MaskedSection = ({
  element,
  maskedElement,
}: {
  element: React.ReactNode;
  maskedElement: React.ReactNode;
}) => {
  const { x, y } = useMousePosition();
  const maskRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  useEffect(() => {
    if (!maskRef.current) return;

    const rect = maskRef.current.getBoundingClientRect();

    const relativeX = x - rect.left;
    const relativeY = y - rect.top;

    gsap.to(maskRef.current, {
      webkitMaskPosition: `${relativeX - size / 2}px ${relativeY - size / 2}px`,
      webkitMaskSize: size,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [x, y, size]);

  return (
    <div>
      <div className="relative">
        <div className="mt-8 text-center h-[60vh] flex flex-col items-center justify-center gap-4 z-30">
          {element}
        </div>

        {/* MASKED LAYER */}
        <div
          className={`
            absolute inset-0
            flex items-center justify-center
            bg-amber-600
            z-50
            mask-[url('/mask.svg')]
            mask-size-[20px]
            mask-no-repeat
            text-black
          `}
          ref={maskRef}
        >
          <h2
            className="2xl:text-7xl lg:text-6xl text-4xl font-black tracking-tighter w-full lg:max-w-2/3 text-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {maskedElement}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MaskedSection;
