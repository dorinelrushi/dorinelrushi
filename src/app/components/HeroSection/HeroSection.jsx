import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="heroSection w-full h-[100%] py-[180px]">
      <p className="borderText">I am Dorinel Rushi 🌐✨</p>
      <h2 className="thetitle ">Transform Your Brand with Expert Design</h2>
      <p className="paragraph max-w-[650px] text-center">
        Creating impactful and creative design solutions to strengthen your
        online presence. Let's make your brand stand out.
      </p>
      <button className="btn">
        <Link href="/contact">Contact Now</Link>
      </button>
      <Image
        src="demo.svg"
        className="mt-[50px]"
        width={800}
        height={800}
        alt="Hero Image"
      />
    </div>
  );
}

export default HeroSection;
