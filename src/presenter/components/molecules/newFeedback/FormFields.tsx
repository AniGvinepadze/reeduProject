import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { arrowLeftIcon } from "../../../assets";
import { editSign } from "../../../assets";

export type FormData = {
  title: string;
  category: string;
  details: string;
  status: string;
  _v: number;
  _id: string;
};

export default function FormFields() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupSec, setShowPopupSec] = useState(false);

  const [placeholder, setPlaceholder] = useState("Feature");
  const [placeholderSec, setPlaceholderSec] = useState("Planned");

  const [feedbacks, setFeedbacks] = useState<FormData[]>([]);
  const [feedback, setFeedback] = useState<FormData | null>(null);
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    details: "",
    status: "",
  });

  console.log("Type of feedbacks:", typeof feedbacks);
  console.log("Is feedbacks an array?", Array.isArray(feedbacks));

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

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/feedback");
      setFeedbacks(res.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:3000/feedback/${id}`);
      setFeedbacks(res.data);
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/feedback/${id}`);
      setFeedback(res.data);
      setInputData({
        title: res.data.title || "",
        category: res.data.category || "",
        details: res.data.details || "",
        status: res.data.status || "",
      });
      console.log("deleeted feedback", res.data);
    } catch (error) {
      console.error("Error fetching feedback for update:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (feedback && feedback._id) {
      try {
        const res = await axios.put(
          `http://localhost:3000/feedback/${feedback._id}`,
          {
            ...inputData,
          }
        );
        console.log("Feedback updated:", res.data);
        getData();
      } catch (error) {
        console.error("Error updating feedback:", error);
      }
    } else {
      console.error("Feedback ID is missing.");
    }
  };

  return (
    <>
      <main className="text-darkBlue">
        <div className="flex ">
          <img src={arrowLeftIcon} alt="arrow" className="mr-3" />
          <Link to="/" className="font-bold text-sm ">
            Go Back
          </Link>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-[540px] w-full p-8 rounded-[10px] bg-white my-24"
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
          <div className="mt-14 ">
            <p className="font-bold text-sm m-2 mt-6">Feedback Title</p>
            <p className="text-[#647196] font-normal text-sm mb-4 ml-2">
              Add a short, descriptive headline
            </p>
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] "
              value={inputData.title}
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
              value={inputData.category}
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

          <div className="relative">
            <p className="font-bold text-sm m-2 mt-6">Update Status</p>
            <p className="text-[#647196] font-normal text-sm mb-4 ml-2">
              Change feedback state
            </p>
            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] cursor-pointer "
              onClick={() => {
                setShowPopupSec(true);
              }}
              onChange={handleChange}
              placeholder={placeholderSec}
              value={inputData.status}
              name="status"
            />

            {showPopupSec && (
              <div className="absolute mt-2 border  bg-white shadow-xl rounded w-full z-10 ">
                {options2.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelectOption2(option)}
                    className="hover:bg-gray-100 hover:text-[#AD1FEA] cursor-pointer  "
                  >
                    <p className="p-3">{option}</p>
                    <div className="w-full h-[1px] bg-gray-100" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* field 3 */}
          <div>
            <p className="font-bold text-sm m-2 mt-6">Feedback Detail</p>
            <p className="text-[#647196] font-normal text-sm mb-4 ml-2">
              Include any specific comments on what should be improved, added,
              etc.
            </p>

            <input
              className="p-4 text-[#3A4374] bg-[#F7F8FD] w-full rounded-[6px] min-h-[90px] "
              value={inputData.details}
              name="details"
              type="text"
              placeholder="It would help people with light sensitivities and who prefer dark 
mode."
              onChange={handleChange}
            />
          </div>

          <div className="flex align-bottom max-650:flex-col-reverse mt-8">
            <button
              className="bg-red border-none form-button max-650:max-w-full max-650:mt-4 :"
              onClick={(e) => {
                e.preventDefault();
                if (feedback && feedback._id) handleDelete(feedback._id);
              }}
            >
              <Link to="/">Delete</Link>
            </button>
            <div className="w-full flex justify-end max-650:flex-col max-650:justify-between ">
              <button className="form-button bg-mediumBlue max-650:max-w-full max-650:mb-[16px]">
                <Link to="/">Cancel</Link>
              </button>
              <button
                type="submit"
                className="h-[40px] max-w-[144px] w-full rounded-[10px] ml-[16px] font-bold bg-purple text-mediumGrey  max-650:max-w-full max-650:ml-0"
                onClick={(e) => {
                  e.preventDefault();
                  if (feedback && feedback._id) handleUpdate(feedback._id);
                }}
              >
                Add feedback
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
