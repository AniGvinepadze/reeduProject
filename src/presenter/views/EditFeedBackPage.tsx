
import { useSuggestions } from "../../../context";

import FormFields from "../components/molecules/newFeedback/FormFields";
type DetailsProps = {
  id: string | undefined;
};


export default function EditFeedBackPage({id}:DetailsProps) {
  const { suggestions } = useSuggestions();
    const activeFeedback = suggestions.find(
      (suggestion) => suggestion._id === id
    );
    console.log(activeFeedback);
  return (
    <section className="bg-[#F7F8FD] my-[92px] mx-auto max-w-[540px] flex justify-center max-900:mt-[56px] max-650:mt-[34px] ">
      <div className="container h-[910px] max-650:h-[967px] text-[14px] max-650:text-[13px] flex flex-col justify-between max-650:max-w-[327px] shadow-md">
        {/* <GoBack pathname="/" />
        <div className="max-w-[540px] w-full rounded-[10px]   h-[822px] bg-white max-650:max-w-[327px] max-650:h-[893px]">
          {/* form */}

          {/* <FeedBackForm
            formFields={EditFormFileds}
            img={editSign}
            title="FeedBack Title"
            IsEditForm={true}
          /> */}
           <FormFields suggestion={activeFeedback}/>
      </div>
    </section>
  );
}
