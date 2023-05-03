import { useState } from "react";

export const Astronaut = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
    onClick={() =>
      window
        ? (window as any)
            .open(
              "https://www.linkedin.com/in/jayaram-karunakaran",
              "_blank"
            )
            .focus()
        : null
    }
      className="fixed right-5 top-5 z-50 "
    >
      <div
        className="flipImage cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={"/images/astronaut.png"}
          alt="astronaut"
          className={`animate-reverse-spin w-10 md:w-12`}
        />
      </div>

      {hover && (
        <div
          className="mt-2 relative left-4 p-1 bg-white/50 text-black rounded-2xl text-sm px-3 font-bold"
        >
          Find me
        </div>
      )}
    </div>
  );
};
