// import { useState } from 'react';
import { hintIcon } from "../../../assets";
import Button from "../../atoms/button";
// import { cn } from '../../../../utils/twMerge';
import { useNavigate } from "react-router-dom";
import { useSuggestions } from "../../../../../context";

export default function SuggestionHeader() {
  // const sortOptions = [
  //   'Most Upvotes',
  //   'Least Upvotes',
  //   'Most Comments',
  //   'Least Comments',
  // ];

  const { suggestions, setSuggestions } = useSuggestions();

  // const [activeOption, setActiveOption] = useState('Most Upvotes');
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  console.log(setSuggestions)

  // const filterSuggestions = (option: string) => {
  //   let sortedSuggestions = [...suggestions];

  //   switch (option) {
  //     case 'Most Upvotes':
  //       sortedSuggestions.sort((a, b) => b.upVotes - a.upVotes);
  //       break;
  //     case 'Least Upvotes':
  //       sortedSuggestions.sort((a, b) => a.upVotes - b.upVotes);
  //       break;
  //     case 'Most Comments':
  //       sortedSuggestions.sort((a, b) => b.comments.length - a.comments.length);
  //       break;
  //     case 'Least Comments':
  //       sortedSuggestions.sort((a, b) => a.comments.length - b.comments.length);
  //       break;
  //     default:
  //       sortedSuggestions.sort((a, b) => b.upVotes - a.upVotes);
  //       break;
  //   }

  //   setActiveOption(option);
  //   setSuggestions(sortedSuggestions);
  //   setIsOpen(false);
  // };

  return (
    <header className="w-full rounded-[10px] bg-darkBlue text-white flex justify-between items-center p-4 max-400:p-3 max-650:rounded-none max-650:h-[60px] shadow-md">
      <div className="flex justify-between ">
        <div className="flex ">
          <img
            src={hintIcon}
            alt="hintIcon"
            className="w-6 h-6 object-contain"
          />
          <h2 className="font-bold text-[18px] pl-3 max-400:font-medium max-400:text-base">
            {suggestions.length} Suggestions
          </h2>
        </div>
        {/* 
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex mt-1 pl-8 max-650:px-0 relative cursor-pointer"
        >
          <p className="font-normal text-sm max-400:text-[12px]">
            Sort by: <span className="font-semibold text-sm">{activeOption}</span>
          </p>
          <img
            src={arrowDownIcon}
            alt="arrowDownIcon"
            className={cn(`w-2 h-2 m-2`, isOpen && 'rotate-180')}
          />

          {isOpen && (
            <div className="absolute bg-white shadow-lg rounded-[10px] top-[50px] w-[255px]">
              {sortOptions.map((option) => (
                <div key={option} className="px-6 py-3 border-b border-[#979797] border-opacity-15">
                  <button
                    onClick={() => filterSuggestions(option)}
                    className="text-grey hover:text-purple transition-all duration-200"
                  >
                    {option}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>

      <Button
        label="+ Add Feedback "
        variant="primary"
        classname="bg-purple max-650:px-4 max-450:px-2"
        func={() => navigate("/new-feedback")}
      />
    </header>
  );
}
