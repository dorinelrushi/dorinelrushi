import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";

function Gumroad() {
  return (
    <div>
      <div className="wd lg:flex md:flex-none w-[74%] gap-[50px] justify-between  m-auto mt-[120px]">
        <div className="w-[100%]">
          <h2 className="lga text-[50px]  leading-[68px] font-bold">
            Selling <br /> Digital Products
          </h2>
          <p className="max-w-[550px] mt-[25px] text-[20px] text-[#ffffff]">
            We sell digital products to help others. Our platform simplifies the
            process, making it easy and efficient. Join us to experience the
            benefits and provide real value to your customers.
          </p>
          <ul className="mt-[25px] flex  gap-[10px]  flex-wrap">
            <li className="border-b-[1px] py-[10px] border-[#1a1919] flex gap-[19px] items-center">
              Wordpress Websites
              <div className="w-[55px] bg-[#ff88001f] flex justify-center py-[5px] backdrop-blur-sm items-center rounded-[50px] text-[#ff9f50]">
                (18)
              </div>
              <div className="w-[185px] bg-[#ffffff23] flex  justify-center py-[5px] backdrop-blur-sm items-center rounded-[50px] text-[#ffffff]">
                <MdFileDownload /> &nbsp; +360 donwload
              </div>
            </li>
            <li className="border-b-[1px] py-[10px] border-[#1a1919] flex   gap-[19px] items-center">
              Figma Templates
              <div className="w-[55px] bg-[#ff88001f] flex justify-center py-[5px] backdrop-blur-sm items-center rounded-[50px] text-[#ff9f50]">
                (18)
              </div>
              <div className="w-[185px] bg-[#ffffff23] flex  justify-center py-[5px] backdrop-blur-sm items-center rounded-[50px] text-[#ffffff]">
                <MdFileDownload /> &nbsp; +450 donwload
              </div>
            </li>
            <li className="border-b-[1px] py-[10px] border-[#1a1919] flex  gap-[19px] items-center">
              Notion Template
              <div className="w-[55px] bg-[#ff880023] flex  justify-center py-[2px] backdrop-blur-sm items-center rounded-[50px] text-[#FF8A00]">
                (5)
              </div>
              <div className="w-[185px] bg-[#ffffff23] flex  justify-center py-[5px] backdrop-blur-sm items-center rounded-[50px] text-[#ffffff]">
                <MdFileDownload /> &nbsp; +120 donwload
              </div>
            </li>

            <li className="border-b-[1px] py-[10px] border-[#1a1919] flex  gap-[19px] items-center">
              Portfolio Design
              <div className="w-[55px] bg-[#ff880023] flex justify-center py-[2px] backdrop-blur-sm items-center rounded-[50px] text-[#FF8A00]">
                (8)
              </div>
              <div className="w-[185px] bg-[#ffffff23] flex justify-center py-[5px] backdrop-blur-sm items-center rounded-[50px] text-[#ffffff]">
                <MdFileDownload /> &nbsp; +236 donwload
              </div>
            </li>
          </ul>
        </div>

        <div className="social14 lg:mt-[0px] md:mt-[50px] sm:mt-[150px] h-[584px] w-[100%] rounded-[25px]">
          <div>
            <h2 className="lgsa text-[30px] font-bold">+1000 Downloads</h2>
            <p className="max-w-[450px] m-auto">
              You can see our portfolio for every clients we worked
            </p>
          </div>
          <div>
            <Link href="d">
              <div className="blurI flex min-w-full">
                <h2 className="text-[15px] ml-[20px] text-[#dddddd]">
                  Donwload Now
                </h2>
                <div className="icon rounded-[50px] p-[8px] text-[20px]">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gumroad;
