import { arrowLeftIcon } from "../../../assets";

export default function GoBack({ pathname }: { pathname: string }) {
  return (
    <a
      href={pathname}
      className="flex items-center justify-between w-[75px] font-bold text-darkBlue"
    >
      <img src={arrowLeftIcon} alt="arrow left" />
      Go Back
    </a>
  );
}
