import { Labels } from "../constants/labels";
import { Link } from "react-router-dom";

const TopBar = ({ scroll }: { scroll: "UP" | "DOWN" }) => (
  <div
    className={` ${
      scroll === "UP" ? "scrollDown" : " scrollUp"
    }  fixed top-0 z-50 bg-white/10 p-6 pl-14 lg:pl-28 pr-28 w-full`}
  >
    <div className="flex-1 flex gt-regular items-center">
      <div className="text-xl md:text-2xl lg:text-3xl flex-1 font-bold whitespace-nowrap">
        My Space
      </div>
      <div className="hidden md:flex gap-6 items-center text-sm">
        <Link to={`history`}>
          <div className="underline-on-hover cursor-pointer py-2 font-bold">
            {Labels.history}
          </div>
        </Link>
        <Link to={`launches`}>
          <div className="underline-on-hover cursor-pointer py-2 font-bold">
            {Labels.launches}
          </div>
        </Link>
        <Link to={`rockets`}>
          <div className="underline-on-hover cursor-pointer py-2 font-bold">
            {Labels.rockets}
          </div>
        </Link>
      </div>
    </div>
  </div>
);
export default TopBar;
