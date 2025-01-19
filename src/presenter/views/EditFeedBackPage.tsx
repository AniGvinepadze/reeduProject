
import FormFields from "../components/molecules/newFeedback/FormFields";


export default function EditFeedBackPage() {
  return (
    <section className="bg-[#F7F8FD] my-[92px] mx-auto max-w-[540px] flex justify-center max-900:mt-[56px] max-650:mt-[34px] ">
      <div className="container h-[910px] max-650:h-[967px] text-[14px] max-650:text-[13px] flex flex-col justify-between max-650:max-w-[327px]">
        {/* <GoBack pathname="/" />
        <div className="max-w-[540px] w-full rounded-[10px]   h-[822px] bg-white max-650:max-w-[327px] max-650:h-[893px]">
          {/* form */}

          {/* <FeedBackForm
            formFields={EditFormFileds}
            img={editSign}
            title="FeedBack Title"
            IsEditForm={true}
          /> */}
           <FormFields/>
      </div>
    </section>
  );
}
