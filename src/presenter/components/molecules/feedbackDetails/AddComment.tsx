import Button from "../../atoms/button";

export default function AddComment() {
  return (
    <div className="p-4 bg-white rounded-lg mt-6 w-full">
      <h3 className="text-lg font-bold mb-2">Add Comment</h3>
      <textarea
        className="w-full p-2 resize-none bg-lightGrey border-none rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        rows={Number(4)}
        placeholder="Type your comment here"
      ></textarea>
      <div className="flex justify-between">
        <div className="text-gray-500 mb-2">250 Characters left</div>
        <Button
          label="Post Comment"
          variant="primary"
          classname="bg-purple"
          func={() => alert("comment")}
        />
      </div>
    </div>
  );
}
