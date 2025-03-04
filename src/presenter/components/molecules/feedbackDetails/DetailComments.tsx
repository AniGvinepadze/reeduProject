import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import human from "../../../../../public/assets/img/l60Hf.png";

type User = {
  id: number;
  fullName?: string;
  email?: string;
  avatarUrl?: string;
};

type Comment = {
  id: number;
  comment: string;
  user?: User;
  parentId?: number | null;
};

export default function DetailComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});
  const [error, setError] = useState<string | null>(null);

  const cookie = new Cookies();

  const postComment = async (parentId: number | null) => {
    if (!newComment[parentId || 0]?.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:3000/comment",
        {
          comment: newComment[parentId || 0],
          parentId,
        },
        {
          headers: { Authorization: `Bearer ${cookie.get("accessToken")}` },
        }
      );

      if (res.status === 201) {
        getComments();
        setNewComment((prev) => ({ ...prev, [parentId || 0]: "" }));
      }
    } catch (error) {
      setError("Failed to post comment.");
      console.error("Request Failed", error);
    }
  };

  const getComments = async () => {
    try {
      const response = await axios.get<Comment[]>(
        "http://localhost:3000/comment",
        {
          headers: {
            Authorization: `Bearer ${cookie.get("accessToken")}`,
          },
        }
      );
      setComments(response.data);
    } catch (error) {
      setError("Failed to load comments.");
      console.error("API Request Failed", error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center rounded-[10px] mt-6 shadow-md">
        <div className="w-full bg-white rounded-lg p-6">
          <h1 className="text-lg font-bold text-gray-900 mb-6">
            {comments.length} Comments
          </h1>

          {error && <p className="text-red-600">{error}</p>}

          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={comment.user?.avatarUrl || human}
                    alt={comment.user?.fullName || "Anonymous"}
                    className="w-[50px] h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-gray-900">
                        {comment.user?.fullName || "Anonymous"}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-sm">
                      @{comment.user?.email || "No email"}
                    </p>
                    <p className="mt-2 text-gray-700">{comment.comment}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No comments available</p>
          )}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          postComment(null);
        }}
        className="p-4 bg-white rounded-lg mt-6 w-full shadow-md"
      >
        <h3 className="text-lg font-bold mb-2">Add Comment</h3>
        <textarea
          className="w-full p-2 resize-none bg-lightGrey border-none rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          placeholder="Type your comment here"
          value={newComment[0] || ""}
          onChange={(e) =>
            setNewComment((prev) => ({ ...prev, [0]: e.target.value }))
          }
        ></textarea>
        <div className="flex justify-between">
          <div className="text-gray-500 mb-2">
            {250 - (newComment[0]?.length || 0)} Characters left
          </div>
          <button
            type="submit"
            className="bg-[#AD1FEA] max-w-[137px] w-full flex justify-center items-center p-3 rounded-xl text-white font-semibold text-base cursor-pointer hover:bg-[#ba48eb] transition-colors ease-in-out duration-300"
            disabled={!newComment[0]?.trim()}
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
