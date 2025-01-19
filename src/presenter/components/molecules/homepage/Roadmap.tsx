import { Link } from "react-router-dom";
import { cn } from "../../../../utils/twMerge";

export default function Roadmap() {
  const roadmap = [
    {
      id: 1,
      title: "Planned",
      count: 2,
    },
    {
      id: 2,
      title: "In-Progress",
      count: 3,
    },
    {
      id: 3,
      title: "Live",
      count: 1,
    },
  ];
  return (
    <div className="bg-white px-6 py-5 rounded-[10px] flex flex-wrap gap-x-2 gap-y-3.5 max-900:h-[178px] ">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-lg font-bold text-mediumBlue ">Roadmap</h2>
        <Link
          className="text-[13px] underline text-blue font-semibold"
          to="/roadmap"
        >
          View
        </Link>
      </div>
      <div className="mt-6 max-900:mt-3 flex flex-col gap-y-2 w-full">
        {roadmap.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  `w-2 h-2 rounded-full `,
                  item.id === 1
                    ? "bg-[#F49F85]"
                    : item.id === 2
                    ? "bg-[#AD1FEA]"
                    : "bg-[#62BCFA]"
                )}
              ></div>

              <h3 className="text-grey ">{item.title}</h3>
            </div>
            <span className="font-bold text-grey">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
