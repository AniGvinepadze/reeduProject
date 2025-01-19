import { cn } from "../../../utils/twMerge";

type Props = {
  func?: () => void;
  label: string;
  isActive?: boolean;
  children?: React.ReactNode;
  variant: "default" | "icon";
  onClick?: () => void;
};
export default function InteractiveElement({
  label,
  isActive,
  children,
  variant,
  func
}: Props) {
  return (
    <button
      className={cn(
        `h-[30px]  flex items-center justify-center font-semibold text-[13px] px-3.5 rounded-[10px]  hover:text-blue transition-colors duration-300 bg-mediumGrey`,
        isActive ? `bg-blue !text-white !hover:bg-blue ` : "hover:bg-[#CFD7FF]",
        variant === "default" ? "text-blue" : "text-mediumBlue"
      )}
      onClick={func}
    >
      {children}
      {label}
    </button>
  );
}
