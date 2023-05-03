export const Animate = () => <>
 <div className="star"></div>
    {/* <div className="meteor-1"></div>
    <div className="meteor-2"></div>
    <div className="meteor-3"></div>
    <div className="meteor-4"></div>
    <div className="meteor-5"></div>
    <div className="meteor-6"></div>
    <div className="meteor-7"></div>
    <div className="meteor-8"></div>
    <div className="meteor-9"></div>
    <div className="meteor-10"></div>
    <div className="meteor-11"></div>
    <div className="meteor-12"></div>
    <div className="meteor-13"></div>
    <div className="meteor-14"></div>
    <div className="meteor-15"></div> */}

    <div onClick={()=> console.log("djkbscsjkdb")} className="fixed right-5 top-5 z-50 flipImage">
      <img
        src={"/images/astronaut.png"}
        alt="astronaut"
        className={`animate-reverse-spin w-10 md:w-12`}
      />
    </div></>