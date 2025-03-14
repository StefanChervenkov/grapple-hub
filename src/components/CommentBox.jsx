

const CommentBox = () => {
    return (
        <div className="max-w-xl mx-auto mt-5 p-5 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">John Doe</p>
            </div>

            <textarea
                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Write your comment here..."
            ></textarea>

            <button
                className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg text-lg transition"
            >
                Post Comment
            </button>
        </div>
    );
};




export default CommentBox;