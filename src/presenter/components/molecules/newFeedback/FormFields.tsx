import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { arrowLeftIcon } from "../../../assets";
import { editSign } from "../../../assets";
import { Suggestion } from "../../../../../context";

export type FormData = {
  title: string;
  category: string;
  details: string;
  status: string;
  _v: number;
  _id: string;
};
type SuggestionListProps = {
  suggestion: Suggestion | undefined;
};
export default function FormFields({ suggestion }: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupSec, setShowPopupSec] = useState(false);
  const [placeholder, setPlaceholder] = useState("Feature");
  const [placeholderSec, setPlaceholderSec] = useState("Planned");
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    details: "",
    status: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    category: "",
    details: "",
    status: "",
  });

  const options = ["Feature", "UX", "UI", "Enhancement", "Bug"];
  const options2 = ["Suggestion", "Planned", "In-Progress", "Live"];

  const handleSelectOption = (option: string) => {
    setPlaceholder(option);
    setInputData((prev) => ({ ...prev, category: option }));
    setShowPopup(false);
  };

  const handleSelectOption2 = (option: string) => {
    setPlaceholderSec(option);
    setInputData((prev) => ({ ...prev, status: option }));
    setShowPopupSec(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation logic
  const validate = () => {
    const newErrors = {
      title: "",
      category: "",
      details: "",
      status: "",
    };

    if (!inputData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!inputData.category) {
      newErrors.category = "Category is required.";
    }

    if (!inputData.status) {
      newErrors.status = "Status is required.";
    }

    if (!inputData.details.trim()) {
      newErrors.details = "Details are required.";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => !error); // Returns true if no errors
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!validate()) {
      return; // Prevent form submission if validation fails
    }

    // Handle update if feedback exists
    if (suggestion && suggestion._id) {
      try {
        const res = await axios.put(
          `http://localhost:3000/posts/${suggestion._id}`,
          { ...inputData },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Feedback updated:", res.data);
      } catch (error) {
        console.error("Error updating feedback:", error);
      }
    } else {
      console.error("Feedback ID is missing.");
    }
  };

  const handleDelete = async (id: string, token: string) => {
    try {
      console.log("clicked");
      const res = await axios.delete(`http://localhost:3000/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Feedback deleted:", res.data);
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <>
      <main className="text-darkBlue s">
        <div className="flex">
          <img src={arrowLeftIcon} alt="arrow" className="mr-3" />
          <Link to="/" className="font-bold text-sm">
            Go Back
          </Link>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-[540px] w-full p-8 rounded-[10px] bg-white my-24 shadow-md"
        >
          <div className="relative">
            <img
              src={editSign}
              alt="edit"
              className="w-[56px] h-[56px] absolute -top-[70px]"
            />
            <h2 className="font-bold text-2xl my-4">
              Editing '{inputData.title || "Add a dark theme option"}'
            </h2>
          </div>

          <div className="mt-14">
            <p className="font-bold text-sm m-2 mt-6">Feedback Title</p>
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px]"
              value={inputData.title}
              name="title"
              type="text"
              placeholder="Please add a dark theme option"
              onChange={handleChange}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          <div className="relative">
            <p className="font-bold text-sm m-2 mt-6">Category</p>
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] cursor-pointer"
              onClick={() => setShowPopup(!showPopup)}
              value={inputData.category}
              name="category"
              placeholder={placeholder}
              onChange={handleChange}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
            {showPopup && (
              <div className="absolute mt-2 border bg-white shadow-xl rounded w-full z-10">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelectOption(option)}
                    className="hover:bg-gray-100 hover:text-[#AD1FEA] cursor-pointer"
                  >
                    <p className="p-3">{option}</p>
                    <div className="w-full h-[1px] bg-gray-100" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <p className="font-bold text-sm m-2 mt-6">Update Status</p>
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] cursor-pointer"
              onClick={() => setShowPopupSec(true)}
              value={inputData.status}
              name="status"
              placeholder={placeholderSec}
              onChange={handleChange}
            />
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status}</p>
            )}
            {showPopupSec && (
              <div className="absolute mt-2 border bg-white shadow-xl rounded w-full z-10">
                {options2.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelectOption2(option)}
                    className="hover:bg-gray-100 hover:text-[#AD1FEA] cursor-pointer"
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
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] min-h-[90px]"
              value={inputData.details}
              name="details"
              type="text"
              placeholder="It would help people with light sensitivities and who prefer dark mode."
              onChange={handleChange}
            />
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.details}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex align-bottom max-650:flex-col-reverse mt-8">
            <button
              type="button"
              className="bg-blue border-none form-button"
              onClick={() => {
                console.log(suggestion, "suggedtion on click");
                if (suggestion && suggestion._id) {
                  handleDelete(suggestion._id, "your_token_here");
                }
              }}
            >
              Delete
            </button>
            <div className="w-full flex justify-end max-650:flex-col max-650:justify-between">
              <button className="form-button bg-mediumBlue max-650:max-w-full max-650:mb-[16px]">
                <Link to="/">Cancel</Link>
              </button>
              <button
                type="submit"
                className="h-[40px] max-w-[144px] w-full rounded-[10px] ml-[16px] font-bold bg-purple text-mediumGrey max-650:max-w-full max-650:ml-0"
              >
                Update feedback
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
