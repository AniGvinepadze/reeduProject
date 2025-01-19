type feedbackCardProps = {
  suggestion: {
    id: number;
    number: number;
    title: string;
    desc: string;
    feedBack: string;
    message: number;
  };
  active?: string | null;
  setActive?: (title: string) => void;
  onClick?: () => void;
};
import { cn } from "../../../utils/twMerge";
import InteractiveElement from "./interactiveElement";
import { arrowUpIcon, arrowUpwhite, message } from "../../assets";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoBack from "../molecules/newFeedback/GoBack";
import Button from "./button";
import { useEffect, useState } from "react";
import { FormData } from "../molecules/newFeedback/FormFields";
import axios from 'axios'
export default function FeedbackCard({
  suggestion,
  active,
  setActive,
}: // onClick,
feedbackCardProps) {
  const [feedback, setFeedback] = useState<FormData[]>([]);
   const [suggestions, setSuggestions] = useState<FormData[]>([])
  const navigate = useNavigate();


  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/feedback"
        );
        setFeedback(res.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const fetchSuggestions= async () => {
      try {
        const res = await axios.get("http://localhost:3000/feedback");
        setSuggestions(res.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchSuggestions();
    fetchFeedbacks();
  }, []);
  
  const filteredFeedback = feedback.filter(
    (feedback) => feedback.category === suggestion.title 
  );

  return (
    <div>
      <header className="flex justify-between">
        <GoBack pathname="/" />
        <div onClick={() => navigate(`/edit-feedback/${suggestion.id}`)}>
          <Button
            label="Edit Feedback "
            variant="primary"
            classname="bg-blue max-650:px-4 mt-2"
            func={() => alert("Button clicked!")}
          />
        </div>
      </header>
      <div className="w-full rounded-[10px] p-6 bg-white mt-5 flex justify-between max-450:flex-col cursor-pointer">
        <div className="flex gap-10 max-650:gap-5">
          <button
            className={cn(
              `bg-mediumGrey max-450:hidden rounded-[10px] cursor-pointer flex flex-col justify-center items-center  h-[53px] w-[40px] mt-4   `,
              "hover:bg-[#CFD7FF] transition-colors duration-200 ",
              active === suggestion.title &&
                "bg-blue text-white hover:text-mediumBlue"
            )}
            onClick={() => setActive?.(suggestion.title)}
          >
            <img
              src={active === suggestion.title ? arrowUpwhite : arrowUpIcon}
              alt="arrowUpIcon"
              className="w-2 h-2 mb-1"
            />
            <p
              className={cn(
                `font-bold text-[13px] ${
                  active === suggestion.title ? "text-white" : "text-mediumBlue"
                }`,
                active === suggestion.title && "hover:text-mediumBlue"
              )}
            >
              {suggestion.number}
            </p>
          </button>
          <div>
            <h2 className="font-bold text-[18px] text-mediumBlue  max-550:text-[13px]">
              {suggestion.title}
            </h2>
            <p className="font-normal text-base text-grey mb-3 max-550:text-[13px]">
              {suggestion.desc}
            </p>
            {filteredFeedback.length > 0 ? (
              filteredFeedback.map((feedback) => (
                <div key={feedback._id}>
                  <h3 className="font-bold text-[16px]">{feedback.title}</h3> {/* Display feedback title */}
                  <p>{feedback.details}</p> {/* Display feedback details */}
                </div>
              ))
            ) : (
              <p>No feedback available for this suggestion.</p>
            )}

            <InteractiveElement variant="default" label={suggestion.feedBack} />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="hidden max-450:block">
            <InteractiveElement
              variant="icon"
              label={suggestion.number.toString()}
            >
              <img src={arrowUpIcon} className="mr-2 mb-0.5" alt="arrow" />
            </InteractiveElement>
          </div>
          <div className="flex items-center -mt-3 max-450:mt-0">
            <img src={message} alt="message" className="w-[42px] h-9  pl-6" />
            <p className="text-mediumBlue font-bold text-base px-3">
              {suggestion.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
