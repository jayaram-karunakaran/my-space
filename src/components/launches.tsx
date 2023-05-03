import axios from "axios";
import { useEffect, useState } from "react";
import { getDate } from "./history";

const Launches = () => {
  const [launch, setLaunchList] = useState<any[]>([]); //temp

  useEffect(() => {
    async function getAllRockets() {
      const res = await axios.get("https://api.spacexdata.com/v4/launches");
      if (res?.data?.length) setLaunchList(res.data);
      console.log(res.data[0]);
    }
    getAllRockets();
  }, []);

  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(https://sxcontent9668.azureedge.us/cms-assets/assets/homepage_1054_desktop_a52a06e9f7.jpg)`,
      }}
    >
      <div className="px-16 fixed w-screen text-4xl p-6 bg-white/20 font-bold ">
        <div className="max-w-min italic">Lauches</div>
      </div>

      <div className="bg-black/30">
        <div className="px-10 md:px-20 pt-28 flex pla flex-wrap">
          {launch.map((e) => (
            <div key={e.id} className="w-full md:w-1/2 lg:w-1/3 pr-3 pb-3">
              <div className="p-3 h-full border rounded-lg bg-black/40">
                <div
                  className="text-xl font-bold pb-1 underline-on-hover md:max-w-min md:whitespace-nowrap cursor-help"
                  //   onClick={()=> window ? (window as any).open(e.links.article, '_blank').focus(): null}
                >
                  {e.name}
                </div>
                <div className="text-gray-300 py-1 text-sm">{e.details}</div>
                <div className="text-gray-300 text-xs underline">
                  {getDate(e.date_local)}
                </div>
                <div
                  onClick={() =>
                    window
                      ? (window as any)
                          .open(e?.links?.webcast, "_blank")
                          .focus()
                      : null
                  }
                  className="underline text-xs text-blue-400 pt-2 cursor-pointer"
                >
                  Watch in Youtube
                </div>

                <div
                  onClick={() =>
                    window
                      ? (window as any)
                          .open(e?.links?.article, "_blank")
                          .focus()
                      : null
                  }
                  className="underline text-xs text-orange-200 pt-2 cursor-pointer"
                >
                  Read article
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Launches;
