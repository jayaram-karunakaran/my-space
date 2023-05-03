import { Animate } from "./Animate";
import { TitleSection } from "./titleSection";

const Home = ({ sortedArr }: { sortedArr: any[] }) => (
  <div>
    <Animate />
    {sortedArr.map((e, i) => {
      const { title, callToAction } = e;
      return (
        <div
          id={`ele_${i}`}
          key={i.toString()}
          className={`${i===0 ? 'h-screen':'h-96'} w-screen -z-10 fade-in`}
        >
          <div
            className="parallax"
            style={{ backgroundImage: `url(${e.backgroundDesktop.url})` }}
          >
            <div
              className={`${
                i === 0 ? "relative top-1/3 pt-2" : "flex items-center"
              } h-full`}
            >
              <TitleSection {...{ i, title, callToAction }} />
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
                i === 0 ? "animate-bounce" : ""
              } relative bottom-12 left-1/2 z-10 hover:bg-white/10 p-1 rounded-full cursor-pointer`}
            />
          )}
        </div>
      );
    })}
  </div>
);

export default Home;
