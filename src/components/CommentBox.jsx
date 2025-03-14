import { useState } from "react";

const CommentBox = ({ postComment, currentUser }) => {
    const [comment, setComment] = useState("");

    const handlePostComment = () => {
        if (comment.trim()) {
            postComment(comment);
            setComment("");

        }

    };

    return (
        <div className="max-w-xl mx-auto mt-5 p-5 bg-white shadow-md rounded-lg mb-4">
            <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
            </div>

            <textarea
                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Write your comment here..."
            ></textarea>

            <button
                className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg text-lg transition"
                onClick={() => handlePostComment(comment)}
            >
                Post Comment
            </button>
        </div>
    );
};




export default CommentBox;