import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useSuggestions } from '../../../../context';
import { arrowUpIcon, arrowUpwhite, message } from '../../assets';
import { cn } from '../../../utils/twMerge';
import InteractiveElement from './interactiveElement';

export default function SuggestionList({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<FormData[]>([]);

  const navigate = useNavigate();
  const { suggestions } = useSuggestions();
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const feedbackRes = await axios.get('http://localhost:3000/feedback');
        setFeedback(feedbackRes.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedbacks();
  }, []);
  console.log(feedback);
  console.log(suggestions);

  const filteredSuggestions = suggestions.filter(
    (suggestion) =>
      selectedCategory === 'All' || suggestion.category === selectedCategory
  );

  return (
    <div className='w-full max-650:px-6 '>
   
        {filteredSuggestions.map((suggestion) => (
          <div
            className='w-full rounded-[10px] p-6 bg-white mt-5 flex justify-between max-450:flex-col cursor-pointer'
            onClick={() => navigate(`/feedback-detail/${suggestion._id}`)}
            key={suggestion._id}
          >
            <div className='flex gap-10 max-650:gap-5'>
              <button
                className={cn(
                  `bg-mediumGrey max-450:hidden rounded-[10px] cursor-pointer flex flex-col justify-center items-center  h-[53px] w-[40px] mt-4   `,
                  'hover:bg-[#CFD7FF] transition-colors duration-200 ',
                  active === suggestion.title &&
                    'bg-blue text-white hover:text-mediumBlue'
                )}
                onClick={() => setActive?.(suggestion.title)}
              >
                <img
                  src={active === suggestion.title ? arrowUpwhite : arrowUpIcon}
                  alt='arrowUpIcon'
                  className='w-2 h-2 mb-1'
                />
                <p
                  className={cn(
                    `font-bold text-[13px] ${
                      active === suggestion.title
                        ? 'text-white'
                        : 'text-mediumBlue'
                    }`,
                    active === suggestion.title && 'hover:text-mediumBlue'
                  )}
                >
                  {suggestion.upVotes}
                </p>
              </button>
              <div>
                <h2 className='font-bold text-[18px] text-mediumBlue  max-550:text-[13px]'>
                  {suggestion.title}
                </h2>
                <p className='font-normal text-base text-grey mb-3 max-550:text-[13px]'>
                  {suggestion.details}
                </p>

                <InteractiveElement
                  variant='default'
                  label={suggestion.category}
                />
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <div className='hidden max-450:block'>
                <img src={arrowUpIcon} className='mr-2 mb-0.5' alt='arrow' />
              </div>
              <div className='flex items-center -mt-3 max-450:mt-0'>
                <img
                  src={message}
                  alt='message'
                  className='w-[42px] h-9  pl-6'
                />
                <p className='text-mediumBlue font-bold text-base px-3'>
                  {suggestion.comments.length}
                </p>
              </div>
            </div>
          </div>
        ))}
      
    </div>
  );
}







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // import axios from "axios";
// import { Suggestion } from "../../../../context";
// import { arrowUpIcon, arrowUpwhite, message } from "../../assets";
// import { cn } from "../../../utils/twMerge";
// // import InteractiveElement from "./interactiveElement";

// type SuggestionListProps = {
//   suggestion: Suggestion | undefined;
// };

// export default function SuggestionList({ suggestion }: SuggestionListProps) {
//   const [active, setActive] = useState<string | null>(null);
//   // const [feedback, setFeedback] = useState<Suggestion[]>([]);//!

//   const navigate = useNavigate();
//   // const { suggestions } = useSuggestions();

//   if (!suggestion) {
//     return <p>No suggestion available.</p>;
//   }

//   // useEffect(() => {
//   //   const fetchFeedbacks = async () => {
//   //     try {
//   //       const feedbackRes = await axios.get("http://localhost:3000/feedback");
//   //       setFeedback(feedbackRes.data);
//   //     } catch (error) {
//   //       console.error("Error fetching feedback:", error);
//   //     }
//   //   };

//   //   fetchFeedbacks();
//   // }, []);

//   // const combinedSuggestions = suggestions.map((s) => {
//   //   const matchedFeedback = feedback.find((f) => f._id === s._id);
//   //   return matchedFeedback || s;
//   // });
//   // console.log(feedback);
//   // console.log(suggestions);

//   // const filteredSuggestions = suggestions.filter(
//   //   (suggestion) =>
//   //     selectedCategory === "All" || suggestion.category === selectedCategory
//   // );

//   return (
//     <div className="w-full max-650:px-6 ">
//       <header>
//         <div
//           className="w-full rounded-[10px] p-6 bg-white mt-5 flex justify-between max-450:flex-col cursor-pointer"
//           onClick={() => navigate(`/feedback-detail/${suggestion?._id}`)}
//           key={suggestion?._id}
//         >
//           <div className="flex gap-10 max-650:gap-5">
//             <button
//               className={cn(
//                 `bg-mediumGrey max-450:hidden rounded-[10px] cursor-pointer flex flex-col justify-center items-center  h-[53px] w-[40px] mt-4   `,
//                 "hover:bg-[#CFD7FF] transition-colors duration-200 ",
//                 active === suggestion?.title &&
//                   "bg-blue text-white hover:text-mediumBlue"
//               )}
//               // onClick={() => setActive?.(suggestion?.title)}
//             >
//               <img
//                 src={active === suggestion?.title ? arrowUpwhite : arrowUpIcon}
//                 alt="arrowUpIcon"
//                 className="w-2 h-2 mb-1"
//               />
//               <p
//                 className={cn(
//                   `font-bold text-[13px] ${
//                     active === suggestion?._id
//                       ? "text-white"
//                       : "text-mediumBlue"
//                   }`,
//                   active === suggestion?.title && "hover:text-mediumBlue"
//                 )}
//               >
//                 {suggestion?.upVotes}
//               </p>
//             </button>
//             <div>
//               <h2 className="font-bold text-[18px] text-mediumBlue  max-550:text-[13px]">
//                 {suggestion?.title}
//               </h2>
//               <p className="font-normal text-base text-grey mb-3 max-550:text-[13px]">
//                 {suggestion?.details}
//               </p>

//               {/* <InteractiveElement
//                   variant="default"
//                   label={suggestion?.category}
//                 /> */}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <div className="hidden max-450:block">
//               <img src={arrowUpIcon} className="mr-2 mb-0.5" alt="arrow" />
//             </div>
//             <div className="flex items-center -mt-3 max-450:mt-0">
//               <img src={message} alt="message" className="w-[42px] h-9  pl-6" />
//               <p className="text-mediumBlue font-bold text-base px-3">
//                 {suggestion?.comments.length}
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
