import { useState } from "react";
import { Labels } from "../constants/labels";
import { Link } from "react-router-dom";

const TopBar = ({ scroll }: { scroll: "UP" | "DOWN" }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const Menu = ({ sm }:any) => (
    <>
      <Link to={`history`}>
        <div
          className={`${
            sm ? "text-xs" : ""
          } underline-on-hover cursor-pointer py-2 font-bold`}
        >
          {Labels.history}
        </div>
      </Link>
      <Link to={`launches`}>
        <div
          className={`${
            sm ? "text-xs" : ""
          } underline-on-hover cursor-pointer py-2 font-bold`}
        >
          {Labels.launches}
        </div>
      </Link>
      <Link to={`rockets`}>
        <div
          className={`${
            sm ? "text-xs" : ""
          } underline-on-hover cursor-pointer py-2 font-bold`}
        >
          {Labels.rockets}
        </div>
      </Link>
    </>
  );

  return (
    <div
      className={` ${
        scroll === "UP" ? "scrollDown z-50" : " scrollUp z-0"
      }  fixed top-0  bg-white/10 p-4 md:p-6 pl-14 lg:pl-28 pr-[72px] md:pr-28 w-full`}
    >
      <div className="flex-1 flex gt-regular items-center">
        <div className="text-xl md:text-2xl lg:text-3xl flex-1 font-bold whitespace-nowrap">
          My Space
        </div>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <Menu />
        </div>

        <div className="block md:hidden relative">
          <img
            onClick={() => setOpenMenu(!openMenu)}
            src="/images/menu.png"
            width={42}
            height={42}
          />

          {openMenu && (
            <div className="absolute z-20 top-14 -left-5 bg-white/10 p-3">
              <Menu sm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TopBar;
