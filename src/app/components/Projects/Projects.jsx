import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Projects() {
  return (
    <div className="mba mb-[200px] ">
      <h2 className="projectOur text-center text-[50px]  font-bold">
        My Projects
      </h2>
      <p className="paras text-center  mb-[45px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        perferendis neque libero dolorem soluta impedit.
      </p>
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[50%] m-auto gap-[30px]">
        <div className="social10 w-full md:w-[100%] h-[550px] rounded-[25px]">
          <div>
            <h2 className="text-[30px] font-bold">Behance Portfolio</h2>
            <p className="max-w-[320px] m-auto">
              You can see our portfolio for every clients we worked
            </p>
          </div>
          <div>
            <Link href="/https://www.behance.net/dorinelrushi">
              <div className="blurI flex min-w-full">
                <h2 className="text-[15px] ml-[20px] text-[#c5c5c5]">
                  Visit the portfolio
                </h2>
                <div className="icon rounded-[50px] p-[8px] text-[20px]">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="social11 h-[550px] w-full md:w-[100%] rounded-[25px]">
          <div>
            <h2 className="text-[30px] font-bold">Dribble Portfolio</h2>
            <p className="max-w-[320px] m-auto">
              You can see our portfolio for every clients we worked
            </p>
          </div>
          <div>
            <Link href="https://dribbble.com/dorinelrushi123">
              <div className="blurI flex min-w-full">
                <h2 className="text-[15px] ml-[20px] text-[#c5c5c5]">
                  Visit the portfolio
                </h2>
                <div className="icon rounded-[50px] p-[8px] text-[20px]">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="social12 w-[90%] md:w-[80%] lg:w-[50%] mt-[30px] m-auto h-[600px] rounded-[25px]">
        <div>
          <h2 className="text-[30px] font-bold">linkedIn</h2>
          <p className="max-w-[320px] m-auto">
            Discover our professional journey and client success stories on
            LinkedIn
          </p>
        </div>
        <div>
          <div className="text-center">
            <Link href="https://www.linkedin.com/in/dorinel-rushi-470a9b229/">
              <div className="blurI flex min-w-full">
                <h2 className="text-[15px] ml-[20px] text-[#c5c5c5]">
                  Visit the portfolio
                </h2>
                <div className="icon rounded-[50px] p-[8px] text-[20px]">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* */}
    </div>
  );
}

export default Projects;
