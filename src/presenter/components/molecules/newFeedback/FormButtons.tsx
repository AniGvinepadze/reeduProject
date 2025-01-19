type Props = {
  isEditForm: boolean;
};

export default function FormButtons({ isEditForm }: Props) {
  return (
    <>
      {isEditForm ? (
        <div className='flex align-bottom max-650:flex-col-reverse'>
          <button className='bg-red border-none form-button max-650:max-w-full max-650:mt-4 :'>
            <a href='/'>Delete</a>
          </button>
          <div className='w-full flex justify-end max-650:flex-col max-650:justify-between '>
            <button className='form-button bg-mediumBlue max-650:max-w-full max-650:mb-[16px]'>
              Cancel
            </button>
            <button
              type='submit'
              className='h-[40px] max-w-[144px] w-full rounded-[10px] ml-[16px] font-bold bg-purple text-mediumGrey  max-650:max-w-full max-650:ml-0'
            >
              Add feedback
            </button>
          </div>
        </div>
      ) : (
        <div className='w-full flex justify-end max-650:flex-col max-650:justify-between '>
          <button className='h-[40px] max-w-[93px] w-full rounded-[10px] text-mediumGrey bg-mediumBlue max-650:max-w-full max-650:mb-[16px]'>
            Cancel
          </button>
          <button
            type='submit'
            className='h-[40px] max-w-[144px] w-full rounded-[10px] ml-[16px] font-bold bg-purple text-mediumGrey  max-650:max-w-full max-650:ml-0'
          >
            Add feedback
          </button>
        </div>
      )}
    </>
  );
}
