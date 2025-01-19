import { roadmap } from "../../../../constants";
import { cn } from "../../../../utils/twMerge";
import { arrowUpIcon, message } from "../../../assets";
import InteractiveElement from "../../atoms/interactiveElement";

export default function RoadMapList() {
  const roadMapStatus = [
    {
      id: 1,
      name: "Planned",
      description: "Ideas prioritized for research",
    },
    {
      id: 2,
      name: "In-Progress",
      description: "Currently being developed",
    },
    {
      id: 3,
      name: "Live",
      description: "Released features",
    },
  ];
  return (
    <section className="mt-12 max-700:px-4">
      <div className="flex justify-between gap-[30px] max-800:gap-2.5">
        {roadMapStatus.map((status) => {
          const listCounter = roadmap.filter(
            (item) => item.status === status.name.toLowerCase()
          ).length;
          return (
            <div className="w-1/3" key={status.id}>
              <div>
                <div className="text-mediumBlue">
                  <span className="font-bold text-lg max-900:text-[14px]">
                    {status.name}
                  </span>
                  <span className="font-bold text-lg pl-1 max-900:text-[14px]">
                    ({listCounter})
                  </span>
                </div>
                <p className="text-grey mt-1">{status.description}</p>
              </div>
              <div className="mt-8 flex flex-col gap-6">
                {roadmap.map((item) => {
                  if (item.status !== status.name.toLowerCase()) return null;
                  return (
                    <div
                      className={cn(
                        `bg-white w-full px-8 py-6 max-900:px-5 max-900:py-5 rounded-md border-t-[6px]`,
                        item.status === "planned"
                          ? "border-orange"
                          : item.status === "in-progress"
                          ? "border-purple"
                          : "border-cyan"
                      )}
                      key={item.id}
                    >
                      <div>
                        <div className="flex items-center gap-4">
                          <div
                            className={cn(
                              `w-2 h-2 rounded-full`,
                              item.status === "planned"
                                ? "bg-orange"
                                : item.status === "in-progress"
                                ? "bg-purple"
                                : "bg-cyan"
                            )}
                          ></div>
                          <span className=" text-grey max-900:text-[13px]">
                            {item.status === "planned"
                              ? "Planned"
                              : item.status === "in-progress"
                              ? "In Progress"
                              : "Live"}
                          </span>
                        </div>
                        <div className="mt-2">
                          <h3 className="font-bold text-lg max-900:text-[13px] text-mediumBlue hover:text-blue cursor-pointer transition-all duration-200">
                            {item.title}
                          </h3>
                          <p className="text-grey mt-1 max-900:text-[13px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="my-4">
                        <InteractiveElement
                          variant="default"
                          label={item.category}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <InteractiveElement
                          variant="icon"
                          label={item.upvotes.toString()}
                        >
                          <img
                            src={arrowUpIcon}
                            className="mr-2 mb-0.5"
                            alt="arrow"
                          />
                        </InteractiveElement>
                        <div className="flex items-center gap-2">
                          <img src={message} alt="message" />
                          <span className="font-bold text-mediumBlue">
                            {item.comments.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
