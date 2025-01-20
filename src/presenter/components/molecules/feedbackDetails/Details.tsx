type DetailsProps = {
  id: string | undefined;
};

import DetailComments from "./DetailComments";
import AddComment from "./AddComment";
import { useSuggestions } from "../../../../../context";
import FeedBackCommentarsHeader from "../../atoms/FeedBackCommentarsHeader";

export default function Details({ id }: DetailsProps) {
  const { suggestions } = useSuggestions();
  const activeFeedback = suggestions.find(
    (suggestion) => suggestion._id === id
  );
  console.log(activeFeedback);
  return (
    <div>
      <FeedBackCommentarsHeader suggestion={activeFeedback} />
      <DetailComments />
      <AddComment />
    </div>
  );
}
