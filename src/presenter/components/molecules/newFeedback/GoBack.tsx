import { arrowLeftIcon } from "../../../assets";

export default function GoBack({ pathname }: { pathname: string }) {
  return (
    <a
      href={pathname}
      className="flex items-center justify-between font-bold text-darkBlue hover:text-slate-500 transition ease-in-out duration-150"
    >
      <img src={arrowLeftIcon} alt="arrow left" className="mr-2" />
      Go Back
    </a>
  );
}
