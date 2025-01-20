import DetailComments from "./DetailComments";
import AddComment from "./AddComment";
import { useSuggestions } from "../../../../../context";
import FeedBackCommentarsHeader from "../../atoms/FeedBackCommentarsHeader";
import axios from "axios";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

type DetailsProps = {
  id: string;
};

export default function Details({ id }: DetailsProps) {
  console.log(id, "id");
  const { suggestions } = useSuggestions();
  const cookie = new Cookies();
  const [suggestion, setSuggestion] = useState({});
  const activeFeedback = suggestions.find(
    (suggestion) => suggestion._id === id
  );

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
    getSuggestion(id);
  }, []);

  return (
    <div>
      <FeedBackCommentarsHeader suggestion={suggestion} />
      <DetailComments />
      <AddComment />
    </div>
  );
}
