import { useEffect, useState } from "react";
import { monthNames } from "../constants/month";
import axios from "axios";

export function getDate(date: string) {
  let spilt = date.substring(0, 10).split("-");
  return `${spilt[2]} ${monthNames[parseInt(spilt[1]) - 1]} ${spilt[0]}`;
}

const History = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    async function getHistory() {
      const res = await axios.get("https://api.spacexdata.com/v4/history");
      if (res?.data?.length)
        setTimeout(() => {
          setHistory(res.data);
        }, 100);
    }
    getHistory();
  }, []);

  return history.length ? (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(https://sxcontent9668.azureedge.us/cms-assets/assets/2_Trans_7_OS_56_0469_Desktop_35340b9d00.jpg)`,
      }}
    >
      <div className="px-16 fixed w-screen text-4xl p-6 bg-white/20 font-bold ">
        <div className="max-w-min italic">History</div>
      </div>

      <div className="bg-black/30">
        <div className="px-10 md:px-20 pt-24">
          {history.map((e) => (
            <div key={e.id} className="p-3">
              <div
                className="text-xl font-bold pb-1 underline-on-hover max-w-min whitespace-nowrap cursor-help"
                onClick={() =>
                  window
                    ? (window as any).open(e.links.article, "_blank").focus()
                    : null
                }
              >
                {e.title}
              </div>
              <div className="text-gray-300 pb-1 text-sm">{e.details}</div>
              <div className="text-gray-300 text-xs underline">
                {getDate(e.event_date_utc)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default History;
