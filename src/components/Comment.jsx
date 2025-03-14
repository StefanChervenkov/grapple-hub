import { useState } from "react";
import { Heart } from "lucide-react";

const Comment = ({ author, text, createdAt }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg border border-gray-200">
      {/* Comment Header */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-lg font-semibold text-gray-800">Peter Petrov</p>
        <p className="text-sm text-gray-500">{new Date(createdAt).toLocaleString()}</p>
      </div>

      {/* Comment Text */}
      <p className="text-gray-700 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit explicabo, modi omnis minus dolores quaerat voluptas ratione eaque voluptatum adipisci, laborum deserunt libero rem exercitationem culpa porro, est harum alias saepe asperiores tempora assumenda officiis eos maxime! Rerum magni ratione ipsum, odio assumenda fugiat earum, exercitationem voluptate, ipsa quidem praesentium.</p>

      {/* Like Button */}
      <button 
        onClick={handleLike} 
        className="flex items-center text-gray-600 hover:text-red-500 transition"
      >
        <Heart className="w-5 h-5 mr-1" /> {likes}
      </button>
    </div>
  );
};

export default Comment;
