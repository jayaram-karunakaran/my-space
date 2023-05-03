export const Astronaut = () => {
  return (
    <div
      onClick={() => console.log("djkbscsjkdb")}
      className="fixed right-5 top-5 z-50 flipImage"
    >
      <img
        src={"/images/astronaut.png"}
        alt="astronaut"
        className={`animate-reverse-spin w-10 md:w-12`}
      />
    </div>
  );
};
