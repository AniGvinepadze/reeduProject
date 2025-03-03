import axios from "axios";
import { useSuggestions } from "../../../context";
import Cookies from "universal-cookie";

import FormFields from "../components/molecules/newFeedback/FormFields";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// type DetailsProps = {
//   id: string;
// };

export default function EditFeedBackPage() {
  const { id } = useParams();

  const { suggestions } = useSuggestions();
  const cookie = new Cookies();
  const activeFeedback = suggestions.find(
    (suggestion) => suggestion._id === id
  );
  console.log(activeFeedback);
  const [suggestion, setSuggestion] = useState({});

  const getSuggestion = async (id: string) => {
    const res = await axios.get(`http://localhost:3000/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie.get("accessToken")}`,
      },
    });
    setSuggestion(res.data);
    console.log(res.data, "res dataaa");
  };

  useEffect(() => {
    getSuggestion(id as string);
  }, []);

  
  return (
    <section className="bg-[#F7F8FD] my-[92px] mx-auto max-w-[540px] flex justify-center max-900:mt-[56px] max-650:mt-[34px] ">
      <div className="container h-[910px] max-650:h-[967px] text-[14px] max-650:text-[13px] flex flex-col justify-between max-650:max-w-[327px] ">
        {/* <GoBack pathname="/" />
        <div className="max-w-[540px] w-full rounded-[10px]   h-[822px] bg-white max-650:max-w-[327px] max-650:h-[893px]">
          {/* form */}

        {/* <FeedBackForm
            formFields={EditFormFileds}
            img={editSign}
            title="FeedBack Title"
            IsEditForm={true}
          /> */}
        <FormFields suggestion={suggestion} />
      </div>
    </section>
  );
}
