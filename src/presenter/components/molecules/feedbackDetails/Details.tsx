import DetailComments from "./DetailComments";
// import { useSuggestions } from "../../../../../context";
import FeedBackCommentarsHeader from "../../atoms/FeedBackCommentarsHeader";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

type DetailsProps = {
  id?: string;
};

export default function Details({ id }: DetailsProps) {

  // const { suggestions } = useSuggestions();
  const cookie = new Cookies();
  const [suggestion, setSuggestion] = useState({});
  // const activeFeedback = suggestions.find(
  //   (suggestion) => suggestion._id === id
  // );

  const getSuggestion = async (id: string) => {
    const res = await axios.get(`https://reeduprojectback.onrender.com/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie.get("accessToken")}`,
      },
    });
    setSuggestion(res.data);
  };

  useEffect(() => {
    if (id) {
      getSuggestion(id);
    }
  }, [id]);

  return (
    <div>
      <FeedBackCommentarsHeader suggestion={suggestion} />
      <DetailComments />
      {/* <AddComment /> */}
    </div>
  );
}
