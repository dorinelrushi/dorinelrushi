"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Develop() {
  const boxesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      boxesRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: boxesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="bg2">
      <div className=" w-[90%] md:w-[70%] m-auto">
        <div>
          <h2 className="thetitles mb-[30px] md:mb-[60px]">
            Developing a Website: A Step-by-Step Guide
          </h2>
        </div>
        {/* Box */}
        <div className="space-y-[30px] md:space-y-[50px]">
          <div className="flex flex-col md:flex-row gap-[20px]">
            {/* box */}
            <div
              ref={(el) => (boxesRef.current[0] = el)}
              className="box1 p-6 rounded-lg "
            >
              <Image
                src="fin.svg"
                width={80}
                height={100}
                alt="dorinel"
                className="mb-[18px] w-auto h-auto"
              />
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Planning and Research
              </h2>
              <p className="text-[#f8f8f8e1] ">
                I define your website’s purpose, target audience, and key
                features. I conduct research on competitors and gather
                inspiration.
              </p>
            </div>
            {/* box */}
            <div
              ref={(el) => (boxesRef.current[1] = el)}
              className="box1 p-6 rounded-lg "
            >
              <Image
                src="design.svg"
                width={80}
                alt="dorinel"
                height={100}
                className="mb-[18px] w-auto h-auto"
              />
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Design and Prototyping
              </h2>
              <p className="text-[#f8f8f8e1]">
                I use Figma to create wireframes and high-fidelity prototypes.
                Starting with basic layouts, I add details and use Figma’s
                collaboration features for feedback.
              </p>
            </div>
            {/* box */}
            <div
              ref={(el) => (boxesRef.current[2] = el)}
              className="box1 p-6 rounded-lg "
            >
              <Image
                src="devel.svg"
                width={80}
                height={100}
                alt="dorinel"
                className="mb-[18px] w-auto h-auto"
              />
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Development and Testing
              </h2>
              <p className="text-[#f8f8f8e1]">
                I set up projects with Next.js, using file-based routing and
                API routes. I manage state with React hooks and context,
                ensuring modular code.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[20px]">
            {/* box */}
            <div
              ref={(el) => (boxesRef.current[3] = el)}
              className="box1 p-6 rounded-lg"
            >
              <Image
                src="deply.svg"
                width={80}
                alt="dorinel"
                height={100}
                className="mb-[18px] w-auto h-auto"
              />
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Deployment
              </h2>
              <p className="text-[#f8f8f8e1]">
                I connect Vercel to GitHub for automatic deployments. Vercel’s
                features like custom domains, SSL, and serverless functions
                enhance performance.
              </p>
            </div>
            {/* box */}
            <div
              ref={(el) => (boxesRef.current[4] = el)}
              className="box1 p-6 rounded-lg "
            >
              <Image
                src="main.svg"
                width={80}
                alt="dorinel"
                height={100}
                className="mb-[18px] w-auto h-auto"
              />
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Maintenance
              </h2>
              <p className="text-[#f8f8f8e1]">
                I test across devices and browsers, using Lighthouse for
                audits. I optimize images and code to improve loading times.
              </p>
            </div>
            {/* box */}
            <div
              ref={(el) => (boxesRef.current[5] = el)}
              className="box1 p-6 rounded-lg "
            >
              <Image
                src="opt.svg"
                width={80}
                alt="dorinel"
                height={100}
                className="mb-[18px] w-auto h-auto"
              />
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                Optimization
              </h2>
              <p className="text-[#f8f8f8e1]">
                I Optimize your website for better performance and user
                experience. Implementing SEO to improve search
                engine rankings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Develop;
