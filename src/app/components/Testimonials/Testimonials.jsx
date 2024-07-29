"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Testimonials() {
  useEffect(() => {
    const testimonials = document.querySelectorAll(".testimonial");

    testimonials.forEach((testimonial) => {
      gsap.fromTo(
        testimonial,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: testimonial,
            start: "top 85%",
            end: "bottom 75%",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 mt-[10px]">
      <h2 className=" testi  font-semibold text-center mb-8 text-gray-900">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[90px]">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial bg-gradient-to-r  p-10 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 text-white border-2 border-transparent hover:border-white"
          >
            <p className="text-base mb-4 ">"{testimonial.text}"</p>
            <div className="flex items-center gap-[19px]  mb-4"></div>
            <div className="text-left">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-[#ff9d4a]">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const testimonialsData = [
  {
    text: "This service was exceptional! I highly recommend it to anyone looking for quality and reliability.",
    name: "John Doe",
    position: "CEO, Company Inc.",
  },
  {
    text: "Fantastic experience from start to finish. Great customer support and fast delivery.",
    name: "Jane Smith",
    position: "Marketing Head, Company XYZ",
  },
  {
    text: "Highly professional with outstanding results. Will definitely work with Dorinel again.",
    name: "Alice Johnson",
    position: "CTO, Tech Solutions",
  },
  {
    text: "Their expertise and dedication made my project a huge success. Highly recommended.",
    name: "Michael Brown",
    position: "Project Manager, ABC Corp.",
  },
  {
    text: "Exceeded our expectations in every way. The best service we've ever used.",
    name: "Emily Davis",
    position: "Founder, Startup Co.",
  },
  {
    text: "Incredible results and a great Developer to work with. We couldn't be happier.",
    name: "Chris Wilson",
    position: "Director, Creative Agency",
  },
  {
    text: "Professional and dedicated Designer. Delivered beyond expectations.",
    name: "Anna White",
    position: "HR Manager, Global Corp.",
  },
  {
    text: "Innovative solutions and top-notch support. Truly exceptional!",
    name: "Laura Adams",
    position: "Software Engineer, DevWorks",
  },
  {
    text: "Quick and efficient service with outstanding results. Will use again.",
    name: "Tom Parker",
    position: "Freelancer",
  },
];

export default Testimonials;
