import { useParams } from "react-router-dom";

import Details from "../components/molecules/feedbackDetails/Details";
import DetailsHeader from "../components/molecules/feedbackDetails/DetailsHeader";
// import { useEffect } from "react";
// import { Cookies } from "react-cookie";
// import axios from "axios";

export default function FeedbackDetails() {
  const params = useParams();
  console.log(params, "parmaas");
  console.log(params.id, "params id");

  // const cookie = new Cookies()
  // const getSuggestion = async () => {
  //   const res = await axios.get(`http://localhost:3000/posts`, {
  //     headers: {
  //       Authorization: `Bearer ${cookie.get("accessToken")}`,
  //     },
  //   });
  //   console.log(res.data, "res dataaa");
  // };

  // useEffect(() => {
  //   getSuggestion()
  // }, []);
  return (
    <main className="container !max-w-[730px] pt-20 pb-20 max-600:pt-12 max-600:pb-12">
      <DetailsHeader />
      <section>
        <Details id={params.id} />
      </section>
    </main>
  );
}
