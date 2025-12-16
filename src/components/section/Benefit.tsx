import { benefits } from "@/data/benefits";
import { NextPage } from "next";

interface Props {}

const Benefit: NextPage<Props> = ({}) => {
  return (
    <div className="container mt-20 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="overflow-hidden flex flex-col w-full shadow-md p-4 bg-white gap-1 md:gap-2"
        >
          {benefit.icon}
          <strong className="text-gray-700 text-sm md:text-lg mt-1 md:mt-2">
            {benefit.title}
          </strong>
          <p className="text-gray-500 text-[11px] md:text-sm font-semibold">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Benefit;
