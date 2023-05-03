import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Rocket = () => {
  const params = useParams();
  const [rocket, setSocket] = useState<any>({}); //temp

  useEffect(() => {
    async function getAllRockets() {
      const res = await axios.get(
        `https://api.spacexdata.com/v4/rockets/${params.id}`
      );
      if (res?.data?.id) setSocket(res.data);
    }
    getAllRockets();
  }, [params.id]);

  const goto = ()=> window ? (window as any).open(rocket.wikipedia, '_blank').focus(): null;

  return  rocket.id ?  <div>
  {rocket.flickr_images ? (
    <div className="relative">
      <div
        className="relative p-10  md:p-20 h-full w-full"
        style={{
          backgroundImage: `url(${rocket.flickr_images[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full bg-black/60 rounded-lg">
          <div className="p-5 md:p-10 lg:p-20">
            <div className=" gt-regular text-2xl md:text-3xl lg:text-4xl font-bold">
             <div className="flex"> <div onClick={goto} className="underline-on-hover max-w-min whitespace-nowrap">{rocket?.name}</div><div className="w-10"> 
             <img onClick={goto}  src={"/images/scroll-down.png"} className="w-full -rotate-90" alt="wikipedia"/>
             </div></div>
            </div>
            <div className="pt-5  md:w-4/6 lg:text-lg">
              {rocket.description}
            </div>

            <div className="pt-3">
              <span className="underline">First Flight -</span>{" "}
              {rocket.first_flight}
            </div>
            <div className="pt-3">
              <span className="underline">Height</span>{" "}
              {` - ${rocket.height.feet} Feet - ${rocket.height.meters} Meter`}
            </div>
            <div className="pt-3">
              <span className="underline">Diameter</span>{" "}
              {` - ${rocket.diameter.feet} Feet - ${rocket.diameter.meters} Meter`}
            </div>
            <div className="pt-3">
              Cost Per Launch - {rocket.cost_per_launch}
            </div>
            <div className="pt-3">
              Success Rate Pct - {rocket.success_rate_pct}
            </div>

           <div className="flex flex-wrap overflow-x-scroll pt-6">
           {rocket.flickr_images.reverse().map((e:any, i:number) => {
              return (
                <div key={i.toString()}>
                  <img
                    src={e} alt="pics"
                    className="h-auto  w-full md:w-80 object-cover mr-6 mb-6"
                  />
                </div>
              )
            })}
           </div>
          </div>
        </div>
      </div>
    </div>
  ) : null}
</div>: null
};

export default Rocket;
