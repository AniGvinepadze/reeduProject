import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import Anne from "../../../../../public/assets/img/Anne.svg";
import Button from "../../atoms/button";

type User = {
  id: number;
  fullName: string;
  email?: string;
  avatarUrl?: string;
};

type Comment = {
  id: number;
  comment: string;
  user?: User; // Make user optional to handle undefined case
};

export default function DetailComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const cookie = new Cookies();

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get<Comment[]>("http://localhost:3000/comment", {
          headers: { Authorization: `Bearer ${cookie.get("accessToken")}` },
        });
        setComments(res.data);
      } catch (error) {
        setError("Failed to load comments.");
        console.error("API Request Failed", error);
      }
    };

    getComments();
  }, []);

  const postComment = async () => {
    if (!newComment.trim()) return; // Avoid posting empty comments

    try {
      const res = await axios.post(
        "http://localhost:3000/comment",
        { comment: newComment },
        {
          headers: { Authorization: `Bearer ${cookie.get("accessToken")}` },
        }
      );
      setComments((prevComments) => [...prevComments, res.data]);
      setNewComment("");
    } catch (error) {
      setError("Failed to post comment.");
      console.error("API Request Failed", error);
    }
  };

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
              <div key={comment.id || index} className="mb-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={comment.user?.avatarUrl || Anne}
                    alt={comment.user?.fullName || "Anonymous"}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className="font-bold text-gray-900">
                        {comment.user?.fullName || "Anonymous"}
                      </h2>
                      <button className="text-blue-600 text-sm hover:underline">
                        Reply
                      </button>
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
      <div className="p-4 bg-white rounded-lg mt-6 w-full shadow-md">
        <h3 className="text-lg font-bold mb-2">Add Comment</h3>
        <textarea
          className="w-full p-2 resize-none bg-lightGrey border-none rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          placeholder="Type your comment here"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <div className="flex justify-between">
          <div className="text-gray-500 mb-2">
            {250 - newComment.length} Characters left
          </div>
          <button
            className="bg-purple"
            onClick={postComment}
            disabled={!newComment.trim()} // Disable button if comment is empty
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
