const Loader = ({countDown,timer}:{countDown:number,timer:number}) => (
  <div className="h-screen w-screen">
    <div className="flex justify-center h-full w-full">
      <img
        src={"/images/rocket.png"}   width={80} alt="rocket"
        className={`${timer ===  100 ? 'hidden':''} -rotate-45 absolute  z-20`}
        style={{bottom:`${timer}%`}}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
      <div className="w-[330px] h-[330px] border border-white rounded-full relative flex justify-center items-center">
        <div className="text-bold text-6xl">{countDown === 0 ? 'Go':countDown}</div>
        <div className="circleCss" />
      </div>
    </div>
  </div>
);

export default Loader;