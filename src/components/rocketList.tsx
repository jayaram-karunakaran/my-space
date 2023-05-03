import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const RocketList = () => {
  const navigate = useNavigate();
  const [rocketList, setRocketList] = useState<any[]>([]); //temp

  useEffect(() => {
    async function getAllRockets() {
      const res = await axios.get("https://api.spacexdata.com/v4/rockets");
      if (res?.data?.length) setRocketList(res.data);
    }
    getAllRockets();
  }, []);

  return (
    <div>
      <div className="px-16 fixed w-screen text-4xl p-6 bg-white/20 font-bold ">
        <div className="max-w-min italic">Rockets</div>
      </div>

     {rocketList.length ?  <div className="flex flex-row flex-wrap pt-32 px-16">
        {rocketList.map((e, i) => {
          return (
              <div onClick={()=> navigate(e?.id)}
                key={e?.id}
                className="w-full flex flex-row mb-5 rounded-3xl hover:border-2  cursor-pointer"
              >
                <div className="w-1/2 md:w-2/6 flex flex-col justify-center bg-white/20 rounded-3xl rounded-r-none border border-r-0 pl-10">
                  <div className="text-xl md:text-4xl font-bold underline-on-hover max-w-min whitespace-nowrap">
                    {e?.name}
                  </div>
                  
                  <div className="text-xs md:text-base pt-1 max-w-min whitespace-nowrap z-10">
                    {e?.country}
                  </div>
                </div>
                <div
                  className="h-[160px] md:h-[300px]  w-1/2 md:w-4/6  rounded-3xl rounded-l-none "
                  style={{
                    backgroundImage: `url(${e?.flickr_images[0]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
          );
        })}
      </div>: <div className="flex h-screen justify-center items-center text-xl md:text-3xl">Loading...</div>}
    </div>
  );
};

export default RocketList;
