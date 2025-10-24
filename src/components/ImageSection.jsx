"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageSections() {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1 = h1Ref.current;

    // Section mappings
    const sections = [
      { id: "#section1", text: "Furniture" },
      { id: "#section2", text: "Decor" },
      { id: "#section3", text: "Office" },
      { id: "#section4", text: "Tech" },
    ];

    // For each section, trigger text swap on enter / enter back
    sections.forEach(({ id, text }) => {
      ScrollTrigger.create({
        trigger: id,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateHeading(text),
        onEnterBack: () => updateHeading(text),
      });
    });

    // Smooth fade text change
    const updateHeading = (newText) => {
      gsap.to(h1, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          h1.textContent = newText;
          gsap.to(h1, { opacity: 1, duration: 0.5, ease: "power2.out" });
        },
      });
    };

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);
  return (
    <div className="w-full relative">
      {/* Sticky Text SECTION */}
      <section className="h-screen flex items-end justify-start bg-[#f5efe7] sticky top-0 z-[1]">
        <div className="p-10 md:p-20">
          <h1
            ref={h1Ref}
            className="text-[20vw] leading-none font-bold text-[#1e1b19]"
          ></h1>
        </div>
      </section>

      {/* SECTION 1 */}
      <section
        id="section1"
        className="relative min-h-screen  flex justify-center items-center overflow-hidden z-10"
      >
        <div className="list flex flex-wrap pt-[3.6em] w-[90%]">
          <div className="listitem w-[25%] mr-[6.25%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f375fb3b2487762e34b_furniture4.jpeg"
                alt="Minimal bench"
              />
            </div>
          </div>
          <div className="listitem w-[18.75%] mr-[6.25%] mt-[20%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f29da4f9f67e8a96c62_furniture3.jpeg"
                alt="Chair"
              />
            </div>
          </div>
          <div className="listitem w-[12.5%] mt-[4%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f1b3ba972c74f0c68a1_furniture2.jpeg"
                alt="Workspace"
              />
            </div>
          </div>
          <div className="listitem w-[31.25%] mt-[24%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f0fd78e9995d9b714ee_furniture1.jpeg"
                alt="Leather chair"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        id="section2"
        className="relative min-h-screen flex justify-center items-center overflow-hidden z-10"
      >
        <div className="list flex flex-wrap pt-[3.6em] w-[90%]">
          <div className="listitem w-[25%] mr-[6.25%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f9f007ec2ccc6825634_lighting6.jpeg"
                alt="Lighting item 1"
              />
            </div>
          </div>

          <div className="listitem w-[18.75%] mr-[6.25%] mt-[20%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f91d645e7308f9b5dae_lighting5.jpeg"
                alt="Lighting item 2"
              />
            </div>
          </div>

          <div className="listitem w-[12.5%] mt-[4%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f84388c67087f759d3f_lighting4.jpeg"
                alt="Lighting item 3"
              />
            </div>
          </div>

          <div className="listitem w-[31.25%] mt-[24%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f786d7824cf60e46d52_lighting3.jpeg"
                alt="Lighting item 4"
              />
            </div>
          </div>

          <div className="listitem w-[31.25%] mt-[-42%] mr-[6.25%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f69f10376fa9f1b520c_lighting2.jpeg"
                alt="Lighting item 5"
              />
            </div>
          </div>

          <div className="listitem w-[25%] mr-[25%] mt-[-18%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f5c1c86978218435d5f_lighting1.jpeg"
                alt="Lighting item 6"
              />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3 */}
      <section
        id="section3"
        className="relative min-h-screen  flex justify-center items-center overflow-hidden z-10"
      >
        <div className="list flex flex-wrap pt-[3.6em] w-[90%]">
          <div className="listitem w-[25%] mr-[6.25%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f375fb3b2487762e34b_furniture4.jpeg"
                alt="Minimal bench"
              />
            </div>
          </div>
          <div className="listitem w-[18.75%] mr-[6.25%] mt-[20%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f29da4f9f67e8a96c62_furniture3.jpeg"
                alt="Chair"
              />
            </div>
          </div>
          <div className="listitem w-[12.5%] mt-[4%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f1b3ba972c74f0c68a1_furniture2.jpeg"
                alt="Workspace"
              />
            </div>
          </div>
          <div className="listitem w-[31.25%] mt-[24%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f0fd78e9995d9b714ee_furniture1.jpeg"
                alt="Leather chair"
              />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section
        id="section4"
        className="relative min-h-screen flex justify-center items-center overflow-hidden z-10 pb-60"
      >
        <div className="list flex flex-wrap pt-[3.6em] w-[90%]">
          <div className="listitem w-[25%] mr-[6.25%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f9f007ec2ccc6825634_lighting6.jpeg"
                alt="Lighting item 1"
              />
            </div>
          </div>

          <div className="listitem w-[18.75%] mr-[6.25%] mt-[20%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f91d645e7308f9b5dae_lighting5.jpeg"
                alt="Lighting item 2"
              />
            </div>
          </div>

          <div className="listitem w-[12.5%] mt-[4%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f84388c67087f759d3f_lighting4.jpeg"
                alt="Lighting item 3"
              />
            </div>
          </div>

          <div className="listitem w-[31.25%] mt-[24%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f786d7824cf60e46d52_lighting3.jpeg"
                alt="Lighting item 4"
              />
            </div>
          </div>

          <div className="listitem w-[31.25%] mt-[-42%] mr-[6.25%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f69f10376fa9f1b520c_lighting2.jpeg"
                alt="Lighting item 5"
              />
            </div>
          </div>

          <div className="listitem w-[25%] mr-[25%] mt-[-18%] relative">
            <div className="grid_item pt-[131%] relative">
              <img
                src="https://cdn.prod.website-files.com/61a99f057627efc50e6b701e/61a99f5c1c86978218435d5f_lighting1.jpeg"
                alt="Lighting item 6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
