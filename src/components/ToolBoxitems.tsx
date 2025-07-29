import { twMerge } from "tailwind-merge";
import { TexhIcon } from "./TechIcon";
import { Fragment } from "react";

export const ToolBoxItems = ({
  Items,
  className,
  itemsWrapperClasssName,
}: {
  Items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClasssName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClasssName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {Items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <div className="p-1 rounded bg-white/5">
                  <TexhIcon component={item.iconType} />
                </div>
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
