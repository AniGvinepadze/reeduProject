import FeedBackForm from '../components/molecules/newFeedback/FeedBackForm';
import GoBack from '../components/molecules/newFeedback/GoBack';


export default function FeedBackPage() {
  return (
    <section className='bg-[#F7F8FD] my-14 mx-auto max-w-[540px] flex justify-center max-900:mt-[56px] max-650:mt-[34px] '>
      <div className='container h-[745px] max-650:h-[782px] text-[14px] max-650:text-[13px] flex flex-col justify-between max-650:max-w-[327px]'>
        <GoBack pathname='/' />

        <div className='max-w-[540px] w-full rounded-[10px]  bg-white max-650:max-w-[327px] max-650:h-[728px] shadow-md'>
          {/* form */}

          <FeedBackForm />
        </div>
      </div>
    </section>
  );
}
