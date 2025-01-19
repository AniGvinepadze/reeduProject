import { checkMark } from '../../../assets';

type Props = {
  options?: string[];
  option: string;
  setOption: Function;
  setActive: Function;
};

export default function InteractiveInput({
  options,
  option,
  setOption,
  setActive,
}: Props) {
  const setOptions = options || [];

  return (
    <ul
      className={`max-w-[456px] w-full absolute top-[64px] z-10  rounded-[10px] h-[${
        48 * setOptions.length
      }px] bg-white shadow-lg max-650:max-w-[327px]`}
    >
      {setOptions.map((liOption, index) => (
        <li
          key={liOption}
          className={`h-[48px] w-full flex items-center  pl-[24px] cursor-pointer  ${
            liOption === option ? ' justify-between' : ''
          } 
          ${
            index == setOptions.length - 1
              ? ''
              : 'border-b-[1px] border-b-[#3A4374]'
          }`}
          onClick={() => {
            setOption(liOption);
            setActive(false);
          }}
        >
          {liOption}
          {liOption === option ? (
            <img
              src={checkMark}
              alt='checkMark'
              className='w-2 h-3 mr-[24px]'
            />
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  );
}
