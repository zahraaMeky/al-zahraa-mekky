import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image'
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import service1 from "../public/service-1.png";
import check from "../public/check.svg";
import { brainwaveServices } from "@/data";
const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 relative">
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <Image
              className="w-full h-full object-cover md:object-right"
              width={800}
              alt="Smartest AI"
              height={730}
              src={service1}
            />
          </div>
          <div className="relative z-1 max-w-[17rem] ml-auto">
            <h4 className="text-[2rem] leading-normal mb-4">
              Crafting Success
            </h4>
            <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-n-3">
              Follow a structured and transparent process to ensure optimal
              outcomes for your project.
            </p>
            <ul className="font-light text-[0.875rem] leading-6 md:text-base">
              {brainwaveServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <Image width={24} height={24} src={check} alt="checkicon" />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;