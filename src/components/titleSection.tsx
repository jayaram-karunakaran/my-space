import React from "react";
import { Link } from "react-router-dom";

interface TitleSectionProps {
  i: number;
  title: string;
}
export const TitleSection: React.FC<TitleSectionProps> = ({ i, title }) => {
  return (
    <div className="container mx-auto px-10 text-white ">
      <div className="text-2xl md:text-3xl lg:text-5xl font-semibold">
        {i === 0 ? (
          <div className="flex flex-col relative max-w-min ">
            <div className="underline-on-hover italic max-w-min whitespace-nowrap">
              Hi,
            </div>
            <div className="underline-on-hover text-sm lg:text-2xl pt-3 italic max-w-min whitespace-nowrap">
              Welcome to my space
            </div>
          </div>
        ) : (
          <div className="underline-on-hover max-w-min whitespace-nowrap">
            {title}
          </div>
        )}
      </div>

      <Link to={'/launches'}>
        <div id="parent" className="flex mt-5 max-w-min cursor-pointer">
          <div className="py-3 border-t border-b  border-l max-w-min whitespace-nowrap px-4">
            Learn More
          </div>
          <div className="flex-1 flex flex-col max-w-min relative -left-[12px]">
            <div className="flex-1 relative top-[9px] w-10 border-t-[1.5px] rotate-[40deg]"></div>
            <div className="flex-1 relative -top-[9px] w-10 border-b-[1.5px] -rotate-[40deg]"></div>
          </div>

          <div className="hidden-child rightSlide flex-1 flex flex-col max-w-min relative -left-[32px] custom-color-2">
            <div className="flex-1 relative top-[9px] w-10 border-t-[1.5px] rotate-[40deg]"></div>
            <div className="flex-1 relative -top-[9px] w-10 border-b-[1.5px] -rotate-[40deg]"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};
