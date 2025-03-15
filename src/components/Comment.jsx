
import { Heart } from "lucide-react";


const Comment = ({ comment, currentUserId, handleLike }) => {
    
    const formattedDate =  new Date(comment.createdAt).toLocaleDateString();
    const formattedTime = new Date(comment.createdAt).toLocaleTimeString();
    

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg border border-gray-200 mb-4">
            {/* Comment Header */}
            <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold text-gray-800">{`${comment.firstName} ${comment.lastName}`}</p>
                <p className="text-sm text-gray-500">{`${formattedDate} ${formattedTime}`}</p>
            </div>

            {/* Comment Text */}
            <p className="text-gray-700 mb-3">{comment.comment}</p>

            {/* Like Button */}
            <button
                onClick={() => handleLike(comment._id)}
                className="flex items-center text-gray-600 hover:text-red-500 transition"
            >
                <Heart className="w-5 h-5 mr-1" /> {comment.likesCount}
            </button>
        </div>
    );
};

export default Comment;
