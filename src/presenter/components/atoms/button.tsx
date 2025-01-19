
import { cn } from "../../../utils/twMerge";
import { arrowLeftIcon } from "../../assets";
 type Props = {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  func: () => void;
  classname?: string;


};
export default function Button({ label, variant, classname, func}: Props) {
  return (

    <button
      className={cn(
        `text-sm font-semibold text-center rounded-[10px]  px-6 flex items-center justify-center `,
        classname,
        variant === "primary" && " h-11 text-white",
        variant === "secondary" && " text-grey !bg-transparent px-0",
        variant === "tertiary" && "!bg-darkBlue text-white h-[53px] "
      )}
      onClick={func}
    >
        {variant === "secondary" ||
          (variant === "tertiary" && <img src={arrowLeftIcon} />)}
        {label}
    </button>
     
  );
}
