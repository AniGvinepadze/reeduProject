import { useParams } from "react-router-dom";
import DetailsHeader from "../components/molecules/feedbackDetails/DetailsHeader";
import Details from "../components/molecules/feedbackDetails/Details";

export default function FeedbackDetails() {
  const params = useParams();
  console.log(params.id);
  return (
    <main className="container !max-w-[730px] pt-20 pb-20 max-600:pt-12 max-600:pb-12">
      <DetailsHeader  />
      <section>
        <Details id={params.id} />
      </section>
    </main>
  );
}
