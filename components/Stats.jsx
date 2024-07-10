"use client";
import CountUp from "react-countup";
const stats = [
  {
    num: 2,
    text: "Years of Developing",
  },
  {
    num: 26,
    text: "Projects Completed",
  },
  {
    num: 21,
    text: "Technologies Used",
  },
  {
    num: 200,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mb-4">
      <div className="container mx-auto ">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex items-center justify-center gap-4 xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <span
                className={`${
                  stat.text.length < 15 ? "max-w-[100px" : "max-w-[150px"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
