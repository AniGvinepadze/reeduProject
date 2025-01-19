type DetailsProps = {
  id: string | undefined;
};
import FeedbackCard from "../../atoms/feedbackCard";
import { suggestions } from "../../../../constants";

import DetailComments from "./DetailComments";
import AddComment from "./AddComment";
export default function Details({ id }: DetailsProps) {
  const activeFeedback = suggestions.find(
    (suggestion) => suggestion.id === Number(id)
  );
  console.log(activeFeedback);
  return (
    <div className="mt-6">
      {activeFeedback && <FeedbackCard suggestion={activeFeedback} />}
      <DetailComments />
      <AddComment />
    </div>
  );
}
