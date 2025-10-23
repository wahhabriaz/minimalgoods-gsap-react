import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextScroll() {
  const linesRef = useRef([]);

  useEffect(() => {
    const lines = linesRef.current;

    lines.forEach((line, i) => {
      gsap.to(line, {
        yPercent: 120,
        duration: 0.9,
        delay: i * 0.1,

        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 8%",
          end: "top 2%",
          scrub: true,
          pin: false,
          //   markers: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section className="text-container h-screen bg-[#1f1b18] text-[#e8e2da] flex flex-col justify-center items-center overflow-hidden">
      <div
        className="text-center leading-[0.9] 
 font-bold space-y-[10vh]"
      >
        <div className="overflow-hidden mb-0">
          <h1
            ref={(el) => (linesRef.current[0] = el)}
            className="text-[12vw] font-bold tracking-tighter"
          >
            Discover
          </h1>
        </div>
        <div className="overflow-hidden mb-0">
          <h1
            ref={(el) => (linesRef.current[1] = el)}
            className="text-[12vw] italic font-light tracking-tight"
          >
            the best in
          </h1>
        </div>
        <div className="overflow-hidden mb-0">
          <h1
            ref={(el) => (linesRef.current[2] = el)}
            className="text-[12vw] font-bold tracking-tight"
          >
            minimal
          </h1>
        </div>
        <div className="overflow-hidden mb-0">
          <h1
            ref={(el) => (linesRef.current[3] = el)}
            className="text-[12vw] font-bold pb-10 tracking-tighter"
          >
            design
          </h1>
        </div>
      </div>
    </section>
  );
}
