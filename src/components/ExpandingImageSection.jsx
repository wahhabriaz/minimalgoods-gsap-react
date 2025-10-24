"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExpandingImageSection() {
  const imgContainer = useRef(null);
  const imgSection = useRef(null);

  useEffect(() => {
    const el = imgContainer.current;
    const elSection = imgSection.current;
    // GSAP timeline for expand animation
    gsap.set(el, {
      width: "50vmin",
      height: "50vmin", // Your "initial 30"
      borderRadius: "50%",
    });
    gsap.fromTo(
      el,
      {
        width: "67vmin",
        height: "63vmin",
        borderRadius: "40%",
      },
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0%",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: elSection,
          start: "top top", // when section hits top
          end: "+=150%", // how long the expansion lasts
          scrub: true, // smooth link to scroll
          pin: true, // keep pinned while expanding
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={imgSection}
      className="h-screen bg-[#26221f] flex items-center justify-center overflow-hidden"
    >
      <div
        ref={imgContainer}
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/expandingimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </section>
  );
}
