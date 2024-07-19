"use client";
import React, { useEffect } from "react";

import Image from "next/image";

function Services() {
  return (
    <div id="services">
      <div className="py-[90px] lg:mb-[100px] sm:mb-[20px] ">
        <div className="ser flex justify-center max-w-[890px] items-start m-auto gap-[0px]">
          <Image
            src="/grow.svg"
            width={180}
            height={200}
            alt="dorinel"
            className="mt-[5px]"
          />
          <h2 className="textGra">
            your online <span className="font-bold">presence</span> with our
            expert services!
          </h2>
        </div>
        {/*1*/}
        <div className="one flex gap-[30px] mt-[100px]  justify-center lg:ml-[100px] md:ml-[0px] sm:lm-[0px]">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="social">
            <h2>Social Media Marketing</h2>
          </div>
          <div className="business">
            <h2>Business card</h2>
          </div>
        </div>
        {/*2*/}
        <div className="two flex gap-[30px] mt-[30px] justify-center lg:ml-[-100px] md:ml-[0px] sm:lm-[0px]">
          <div className="seo">
            <h2>SEO</h2>
          </div>
          <div className="tree media">
            <h2>Social Media Management</h2>
          </div>
          <div className="landing">
            <h2>Landing Page</h2>
          </div>
        </div>
        {/*3*/}
        <div className="three flex gap-[30px] mt-[30px] justify-center lg:ml-[100px] md:ml-[0px] sm:lm-[0px]">
          <div className="brochure">
            <h2>Brochure</h2>
          </div>
          <div className="website">
            <h2>Website Design</h2>
          </div>
          <div className="woo">
            <h2>WooCommerce</h2>
          </div>
        </div>
        {/*4*/}
        <div className="four flex gap-[30px] mt-[30px] justify-center lg:ml-[-100px] md:ml-[0px] sm:lm-[0px]">
          <div className="mobile">
            <h2>Mobile Responsive</h2>
          </div>
          <div className="dev">
            <h2>Website Development</h2>
          </div>
          <div className="post">
            <h2>Social cover / Posts</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
