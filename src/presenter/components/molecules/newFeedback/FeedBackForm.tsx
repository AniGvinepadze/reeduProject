
import createIcon from "../../../.../../../../public/assets/icons/Group 4.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type FormField =
  | {
      type: string;
      description: string;
      label: string;
      options?: undefined;
    }
  | {
      type: string;
      description: string;
      label: string;
      options: string[];
    };


export default function FeedBackForm() {
  // const { handleSubmit, reset, register, formState } = useForm({
  //   defaultValues: {
  //     title: '',
  //     category: '',
  //     details: '',
  //     status: '',
  //   },
  // });
  
  const [inputValue, setInputValue] = useState<string>("");
 
  const [showPopup, setShowPopup] = useState(false);
  const [placeholder, setPlaceholder] = useState("Feature");


  const options = ["Feature", "UX", "UI", "Enhancement", "Bug"];

  const handleSelectOption = (option: string) => {
    setPlaceholder(option);
    setShowPopup(false);
  };


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
 

  const onSubmit = () => {
    console.log('form Submitted');
  };

  return (
  

      <form
          onSubmit={onSubmit}
          className="max-w-[540px] w-full p-8 rounded-[10px] bg-white my-24"
        >
          <div className="relative">
            <img
              src={createIcon}
              alt="createe"
              className="w-[56px] h-[56px] absolute -top-[70px]"
            />
            <h2 className="font-bold text-2xl my-4">
            Create New Feedback
            </h2>
          </div>
          <div className="mt-14 ">
            <p className="font-bold text-sm m-2 mt-6">Feedback Title</p>
            <p className="text-[#647196] font-normal text-sm mb-4 ml-2">
              Add a short, descriptive headline
            </p>
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] "
              name="title"
              type="text"
              placeholder="Please add a dark theme option"
              onChange={handleChange}
            />
          </div>

          {/* field 2 */}

          <div className="relative">
            <p className="font-bold text-sm m-2 mt-6">Category</p>
            <p className="text-[#647196] font-normal text-sm mb-4 ml-2">
              Choose a category for your feedback
            </p>
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] cursor-pointer "
              onClick={() => {
                setShowPopup((prev) => !prev);
              }}
              onChange={handleChange}
              placeholder={placeholder}
              name="category"
            />

            {showPopup && (
              <div className="absolute mt-2 border  bg-white shadow-xl rounded w-full z-10 ">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelectOption(option)} //
                    className="hover:bg-gray-100 hover:text-[#AD1FEA] cursor-pointer  "
                  >
                    <p className="p-3">{option}</p>
                    <div className="w-full h-[1px] bg-gray-100" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="font-bold text-sm m-2 mt-6">Feedback Detail</p>
            <p className="text-[#647196] font-normal text-sm mb-4 ml-2">
              Include any specific comments on what should be improved, added,
              etc.
            </p>

            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] min-h-[90px] "
         
              name="details"
              type="text"
              placeholder="It would help people with light sensitivities and who prefer dark 
mode."
              onChange={handleChange}
            />
          </div>

          <div className="flex align-bottom max-650:flex-col-reverse mt-8">
        
            <div className="w-full flex justify-end max-650:flex-col max-650:justify-between ">
              <button className="form-button bg-mediumBlue max-650:max-w-full max-650:mb-[16px]">
                <Link to="/">Cancel</Link>
              </button>
              <button
                type="submit"
                className="h-[40px] max-w-[144px] w-full rounded-[10px] ml-[16px] font-bold bg-purple text-mediumGrey  max-650:max-w-full max-650:ml-0"
             
              >
                Add feedback
              </button>
            </div>
          </div>
        </form> 

  );
}
