import { SkyAnimate } from "./Animate";
import { Astronaut } from "./Astronaut";
import { TitleSection } from "./titleSection";

const Home = ({ sortedArr }: { sortedArr: any[] }) => (
  <div>
    <Astronaut />
    <SkyAnimate />

    {sortedArr.map((e, i) => {
      const isFirstIndex = Boolean(i === 0);
      const { title } = e;
      return (
        <div id={`ele_${i}`} className="relative z-10">
          <div
            key={i.toString()}
            className={`${isFirstIndex ? "h-screen" : "h-screen md:h-96"} 
            w-screen -z-10 fade-in`}
          >
            <div
              className="parallax"
              style={{
                backgroundImage: `url(${
                  isFirstIndex ? "/images/homeBg.png" : e.backgroundDesktop.url
                })`,
              }}
            >
              <div
                className={`${
                  isFirstIndex ? "relative top-1/3 pt-2" : "flex items-center"
                } h-full`}
              >
                <TitleSection {...{ i, title,e }} />
              </div>
            </div>

            {i !== sortedArr.length - 1 && (
              <img
                onClick={() =>
                  (document as any)
                    .getElementById(`ele_${i + 1}`)
                    .scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                }
                src={"/images/scroll-down.png"}
                width={42}
                alt="scroll-down"
                className={`${
                  isFirstIndex ? "animate-bounce" : ""
                } relative bottom-12 left-1/2 z-10 hover:bg-white/10 p-1 rounded-full cursor-pointer`}
              />
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default Home;
